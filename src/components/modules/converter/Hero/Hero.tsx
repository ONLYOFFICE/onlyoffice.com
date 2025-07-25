import { useState, useRef } from "react";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroBody,
  StyledHeroHeading,
} from "./Hero.styled";
import { IHero, TStep, IResultData } from "./Hero.types";
import { Container } from "@src/components/ui/Container";
import { SelectFile } from "./sub-components/steps/SelectFile";
import { ConvertFile } from "./sub-components/steps/ConvertFile";
import { DownloadFile } from "./sub-components/steps/DownloadFile";
import { CancelConvertModal } from "./sub-components/modals/CancelConvertModal";
import { DeleteFileModal } from "./sub-components/modals/DeleteFileModal";
import { LearnMore } from "./sub-components/LearnMore";

const Hero = ({ theme, heading, subHeading, learnMore, ratingData }: IHero) => {
  const [step, setStep] = useState<TStep>("select");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpenDeleteFileModal, setIsOpenDeleteFileModal] = useState(false);
  const [isOpenCancelConvertModal, setIsOpenCancelConvertModal] =
    useState(false);
  const [resultData, setResultData] = useState<IResultData | null>(null);
  const [outputFileType, setOutputFileType] = useState("");
  const currentUUIDRef = useRef<string | null>(null);

  return (
    <>
      <StyledHero
        background="rgba(217, 244, 255, 0.4)"
        desktopSpacing={["128px", "185px"]}
        tabletSpacing={["128px", "108px"]}
        tabletSmallSpacing={["128px", "108px"]}
        mobileSpacing={["96px", "48px"]}
      >
        <Container>
          <StyledHeroWrapper>
            <StyledHeroHeading level={1} textAlign="center">
              {heading}
            </StyledHeroHeading>

            <StyledHeroBody>
              {step === "select" && (
                <SelectFile
                  theme={theme}
                  heading={subHeading}
                  setSelectedFile={setSelectedFile}
                  setStep={setStep}
                />
              )}
              {(step === "convert" || step === "loading") && (
                <ConvertFile
                  theme={theme}
                  selectedFile={selectedFile}
                  setIsOpenCancelConvertModal={setIsOpenCancelConvertModal}
                  setIsOpenDeleteFileModal={setIsOpenDeleteFileModal}
                  step={step}
                  setStep={setStep}
                  setResultData={setResultData}
                  setOutputFileType={setOutputFileType}
                  currentUUIDRef={currentUUIDRef}
                />
              )}
              {step === "download" && (
                <DownloadFile
                  theme={theme}
                  selectedFile={selectedFile}
                  resultData={resultData}
                  setIsOpenCancelConvertModal={setIsOpenCancelConvertModal}
                  outputFileType={outputFileType}
                  ratingData={ratingData}
                />
              )}

              {learnMore && (
                <LearnMore label={learnMore.label} text={learnMore.text} />
              )}
            </StyledHeroBody>
          </StyledHeroWrapper>
        </Container>
      </StyledHero>

      <DeleteFileModal
        isOpen={isOpenDeleteFileModal}
        setIsOpenDeleteFileModal={setIsOpenDeleteFileModal}
        setSelectedFile={setSelectedFile}
        setStep={setStep}
        theme={theme}
      />
      <CancelConvertModal
        isOpen={isOpenCancelConvertModal}
        setIsOpenCancelConvertModal={setIsOpenCancelConvertModal}
        setSelectedFile={setSelectedFile}
        step={step}
        setStep={setStep}
        theme={theme}
        currentUUIDRef={currentUUIDRef}
      />
    </>
  );
};

export { Hero };
