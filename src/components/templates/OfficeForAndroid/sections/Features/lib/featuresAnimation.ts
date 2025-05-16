import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

const outerFeaturesAnimation = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return function useInnerFeaturesAnimation(
    containerRef: RefObject<HTMLDivElement | null>,
  ) {
    useGSAP(
      () => {
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
      },
      { scope: containerRef },
    );
  };
};

const featuresAnimation = outerFeaturesAnimation();
export { featuresAnimation };
