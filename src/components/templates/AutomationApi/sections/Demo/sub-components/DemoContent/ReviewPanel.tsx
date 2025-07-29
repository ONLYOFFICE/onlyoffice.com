import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";

const StyledReviewPanel = styled.div`
  h3 {
    padding: 56px 0 16px;
    text-align: center;
    color: #333333;
  }

  h4 {
    text-align: center;
    padding-bottom: 32px;
    font-weight: 400;
    color: #333333;
    font-size: 16px;
  }

  .list-buttons-review {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  button {
    padding: 21px 26px !important;
    background: transparent;
    border: 1px solid #aaaaaa !important;
    color: #444444 !important;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.04em;
    border-radius: 9px;
    cursor: pointer;

    &:hover {
      background: transparent;
      border-color: #ff6f3d !important;
      color: #ff6f3d !important;
    }
  }
`;

interface IReviewPanel {
  connector?: {
    executeMethod: (methodName: string, args?: unknown[]) => void;
  };
}

export const ReviewPanel = ({ connector }: IReviewPanel) => {
  const { t } = useTranslation("automation-api");
  useEffect(() => {
    if (!connector) return;

    const handleAccept = () => connector.executeMethod("AcceptReviewChanges");
    const handleReject = () => connector.executeMethod("RejectReviewChanges");
    const handlePrev = () =>
      connector.executeMethod("MoveToNextReviewChange", [false]);
    const handleNext = () => connector.executeMethod("MoveToNextReviewChange");

    const accept = document.getElementById("accept");
    const reject = document.getElementById("reject");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    accept?.addEventListener("click", handleAccept);
    reject?.addEventListener("click", handleReject);
    prev?.addEventListener("click", handlePrev);
    next?.addEventListener("click", handleNext);

    return () => {
      accept?.removeEventListener("click", handleAccept);
      reject?.removeEventListener("click", handleReject);
      prev?.removeEventListener("click", handlePrev);
      next?.removeEventListener("click", handleNext);
    };
  }, [connector]);

  return (
    <StyledReviewPanel>
      <div className="examples_block ec-working-with-review-changes">
        <Heading level={3} size={4} label={t("WorkingWithReview")} />
        <Heading level={4} size={5} label={t("ManagesReviewProcess")} />
        <ul className="list-buttons-review doc-builder-list-buttons">
          <li>
            <button id="accept" className="button transparent">
              {t("Accept")}
            </button>
          </li>
          <li>
            <button id="reject" className="button transparent">
              {t("Reject")}
            </button>
          </li>
          <li>
            <button id="prev" className="button transparent">
              {"<"}
            </button>
          </li>
          <li>
            <button id="next" className="button transparent">
              {">"}
            </button>
          </li>
        </ul>
      </div>
    </StyledReviewPanel>
  );
};
