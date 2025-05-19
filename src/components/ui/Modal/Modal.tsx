import { useEffect, useRef, useCallback } from "react";
import {
  StyledModal,
  StyledModalContainer,
  StyledModalWrapper,
  StyledModalCloseBtn,
} from "./Modal.styled";
import { IModal } from "./Modal.types";

let openModalCount = 0;
let cleanupTimeout: ReturnType<typeof setTimeout> | null = null;

const modalManager = {
  addModal() {
    if (cleanupTimeout) {
      clearTimeout(cleanupTimeout);
      cleanupTimeout = null;
    }

    openModalCount += 1;
    if (openModalCount === 1) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  },

  removeModal() {
    openModalCount = Math.max(openModalCount - 1, 0);
    if (openModalCount === 0) {
      cleanupTimeout = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        cleanupTimeout = null;
      }, 200);
    }
  },
};

const Modal = ({
  id,
  className,
  children,
  maxWidth = "736px",
  bgColor = "rgba(0, 0, 0, 0.4)",
  withCloseBtn,
  positionCloseBtn,
  isOpen,
  onClose,
}: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const stopAllVideos = () => {
    if (!modalRef.current) return;

    modalRef.current
      .querySelectorAll<HTMLVideoElement>("video")
      .forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });

    modalRef.current
      .querySelectorAll<HTMLIFrameElement>("iframe")
      .forEach((iframe) => {
        const src = iframe.src;
        iframe.src = "";
        iframe.src = src;
      });
  };

  const onCloseModal = useCallback(() => {
    onClose();
    stopAllVideos();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const focusableSelectors = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
      '[tabindex]:not([tabindex="-1"])',
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseModal();
      } else if (e.key === "Tab" && modalRef.current) {
        const focusableElements = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            focusableSelectors.join(","),
          ),
        ).filter((el) => el.offsetParent !== null);

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const activeElement = document.activeElement as HTMLElement;

        if (e.shiftKey) {
          if (
            activeElement === firstElement ||
            !modalRef.current.contains(activeElement)
          ) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (
            activeElement === lastElement ||
            !modalRef.current.contains(activeElement)
          ) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onCloseModal]);

  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      modalManager.addModal();
      wasOpen.current = true;
    } else if (!isOpen && wasOpen.current) {
      modalManager.removeModal();
      wasOpen.current = false;
    }

    return () => {
      if (wasOpen.current) {
        modalManager.removeModal();
        wasOpen.current = false;
      }
    };
  }, [isOpen]);

  return (
    <StyledModal
      onClick={onCloseModal}
      $isOpen={isOpen}
      $bgColor={bgColor}
      id={id}
      className={className}
    >
      <StyledModalContainer>
        <StyledModalWrapper
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          $maxWidth={maxWidth}
        >
          {withCloseBtn && (
            <StyledModalCloseBtn
              $positionCloseBtn={positionCloseBtn}
              onClick={onCloseModal}
            />
          )}
          {children}
        </StyledModalWrapper>
      </StyledModalContainer>
    </StyledModal>
  );
};

export { Modal };
