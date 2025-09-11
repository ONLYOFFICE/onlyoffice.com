import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    PageTrack?: (key: string) => void;
    PageEvent?: (category: string, key: string) => void;
  }
}

let isScriptLoaded = false;
const pageTrackQueue: string[] = [];
const pageEventQueue: [string, string][] = [];

function loadGAScript() {
  return new Promise<void>((resolve) => {
    if (isScriptLoaded) {
      resolve();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="/js/ga-custom.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      isScriptLoaded = true;
      return;
    }

    const script = document.createElement("script");
    script.src = "/js/ga-custom.js";
    script.async = true;
    script.onload = () => {
      isScriptLoaded = true;
      pageTrackQueue.forEach(k => window.PageTrack?.(k));
      pageTrackQueue.length = 0;
      pageEventQueue.forEach(([c, k]) => window.PageEvent?.(c, k));
      pageEventQueue.length = 0;
      resolve();
    };
    document.body.appendChild(script);
  });
}

export function usePageTrack() {
  const [ready, setReady] = useState(isScriptLoaded);

  useEffect(() => {
    loadGAScript().then(() => setReady(true));
  }, []);

  const pageTrack = useCallback((key: string) => {
    if (window.PageTrack && ready) {
      window.PageTrack(key);
    } else {
      pageTrackQueue.push(key);
    }
  }, [ready]);

  return pageTrack;
}

export function usePageEvent() {
  const [ready, setReady] = useState(isScriptLoaded);

  useEffect(() => {
    loadGAScript().then(() => setReady(true));
  }, []);

  const pageEvent = useCallback((category: string, key: string) => {
    if (window.PageEvent && ready) {
      window.PageEvent(category, key);
    } else {
      pageEventQueue.push([category, key]);
    }
  }, [ready]);

  return pageEvent;
}
