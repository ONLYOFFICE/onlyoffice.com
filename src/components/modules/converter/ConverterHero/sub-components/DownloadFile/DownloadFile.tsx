import { Heading } from "@src/components/ui/Heading";
import {
  StyledDownloadFileBanner,
  StyledDownloadFileBannerHeading,
  StyledDownloadFileBannerText,
  StyledDownloadFileBtnsWrapper,
  StyledDownloadFileImage,
  StyledDownloadFileImageWrapper,
  StyledDownloadFileStatistics,
  StyledDownloadFileStatisticsStar,
  StyledDownloadFileStatisticsStars,
  StyledDownloadFileStatisticsText,
  StyledDownloadFileStatisticsVotes,
  StyledDownloadFileWrapper,
  StyledGrayStar,
  StyledOrangeStar,
} from "./DownloadFile.styled";
import { Button } from "@src/components/ui/Button";
import { useCallback, useState } from "react";
import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { TSteps } from "../../ConverterHero.types";

const DownloadFile = ({
  color,
  setFile,
  setStep,
}: {
  color: string;
  setFile: (file: File | null) => void;
  setStep: (step: TSteps) => void;
}) => {
  const defaultRating = 76;
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleConfirmDelete = useCallback(() => {
    setFile(null);
    setStep("select");
  }, [setFile, setStep]);

  const handleCancelClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isLocked) setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isLocked) setHoverIndex(null);
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setIsLocked(true);
  };

  const effectiveWidth = selectedIndex
    ? selectedIndex * 20
    : hoverIndex
      ? hoverIndex * 20
      : defaultRating;

  return (
    <>
      <StyledDownloadFileWrapper $color={color}>
        <Heading
          level={3}
          size={4}
          textAlign="center"
          label="Your file is converted:"
        />
        <StyledDownloadFileImageWrapper>
          <StyledDownloadFileImage src="" alt="" />
        </StyledDownloadFileImageWrapper>
        <StyledDownloadFileBtnsWrapper>
          <Button
            label="Convert new"
            variant="tertiary"
            onClick={handleCancelClick}
          />
          <Button label="Download" as="a" />
        </StyledDownloadFileBtnsWrapper>
        <StyledDownloadFileBanner>
          <div>
            <StyledDownloadFileBannerHeading
              level={4}
              size={5}
              label="Need to make some edits?"
            />
            <StyledDownloadFileBannerText label="Create your free online office to edit and share your documents!" />
          </div>
          <Button label="Login" as="a" href="/docspace-registration#login" />
        </StyledDownloadFileBanner>
      </StyledDownloadFileWrapper>
      <StyledDownloadFileStatistics>
        <StyledDownloadFileStatisticsText>
          <b>Rate your experience</b>
        </StyledDownloadFileStatisticsText>
        <StyledDownloadFileStatisticsStars>
          {[1, 2, 3, 4, 5].map((index) => (
            <StyledDownloadFileStatisticsStar
              key={index}
              $index={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              style={{ pointerEvents: isLocked ? "none" : "auto" }}
            />
          ))}
          <StyledGrayStar />
          <StyledOrangeStar $value={effectiveWidth} />
        </StyledDownloadFileStatisticsStars>
        <StyledDownloadFileStatisticsVotes>
          <b>3.8 / 5</b> - <span>68 vote(s)</span>
        </StyledDownloadFileStatisticsVotes>
      </StyledDownloadFileStatistics>
      <DeleteConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleConfirmDelete}
        color={color}
        text="Leave the page and convert new file?"
        isDeleting={false}
      />
    </>
  );
};

export { DownloadFile };
