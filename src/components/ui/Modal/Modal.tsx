import { useEffect, useRef, useCallback } from "react";
import {
  StyledModal,
  StyledModalContainer,
  StyledModalWrapper,
  StyledModalCloseBtn,
} from "./Modal.styled";
import { IModal } from "./Modal.types";

const Modal = ({
  id,
  className,
  children,
  showCloseIcon,
  maxWidth = "736px",
  isOpen,
  onClose,
}: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseModal = useCallback(() => {
    onClose();
    stopAllVideos();
  }, [onClose]);

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

  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = Array.from(
      modalRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex='-1'])",
      ) || [],
    ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex >= 0);

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseModal();
      } else if (e.key === "Tab") {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleFocusIn = (e: FocusEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        focusableElements[0]?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [isOpen, onCloseModal]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      timeout = setTimeout(() => {
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <StyledModal
      onClick={onCloseModal}
      $isOpen={isOpen}
      id={id}
      className={className}
    >
      <StyledModalContainer>
        <StyledModalWrapper
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          $maxWidth={maxWidth}
        >
          {showCloseIcon && <StyledModalCloseBtn onClick={onCloseModal} />}
          {children}
        </StyledModalWrapper>
      </StyledModalContainer>
    </StyledModal>
  );
};

export { Modal };
