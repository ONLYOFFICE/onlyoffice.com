import { gsap } from "gsap";
import { RefObject, useEffect } from "react";

const useFeaturesAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: gsap.Context;

      (async () => {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const items = gsap.utils.toArray(".item");
          const tabletImages: HTMLElement[] = gsap.utils.toArray(".tabletImage");
          const mobileImages: HTMLElement[] = gsap.utils.toArray(".mobileImage");

          for (let i = 0; i < items.length - 1; i += 1) {
            gsap.to(tabletImages[i], {
              opacity: 0,
              scrollTrigger: {
                trigger: items[i] as HTMLElement,
                start: "bottom center+=30%",
                end: "bottom center-=30%",
                scrub: true,
                // markers: true,
              },
            });

            gsap.to(mobileImages[i], {
              opacity: 0,
              scrollTrigger: {
                trigger: items[i] as HTMLElement,
                start: "bottom center+=30%",
                end: "bottom center-=30%",
                scrub: true,
                // markers: true,
              },
            });
          }
        }, containerRef);
      })();

      return () => ctx?.revert()
    }, [containerRef]);
  };

export { useFeaturesAnimation };
