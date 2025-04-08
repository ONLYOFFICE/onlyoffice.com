import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledEnterpriseModal,
  StyledEnterpriseModalHeading,
  StyledEnterpriseModalItems,
  StyledEnterpriseModalBtns,
  StyledEnterpriseModalBtn,
  StyledEnterpriseModalList,
  StyledEnterpriseModalTotal,
  StyledEnterpriseModalTotalCurrency,
  StyledEnterpriseModalTooltip,
} from "./EnterpriseModal.styled";
import { IEnterpriseModal } from "./EnterpriseModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Heading } from "@src/components/ui/Heading";
import { Checkbox } from "@src/components/ui/Checkbox";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";
import {
  licenseDurations,
  numberOfUsers,
  numberOfUsersTotal,
  supportUpdates,
  supportLevel,
} from "../../data/plans";
import { InfoIcon } from "@src/components/icons";

const EnterpriseModal = ({ isOpen, onClose }: IEnterpriseModal) => {
  const { t } = useTranslation("docspace-prices");

  const [numberOfUsersValue, setNumberOfUsersValue] = useState(
    numberOfUsers[0].id,
  );
  const [selectedOption, setSelectedOption] = useState({
    licenseDuration: licenseDurations[0].id,
    supportUpdates: supportUpdates[0].id,
  });
  const [supportLevelValue, setSupportLevelValue] = useState(
    supportLevel[0].id,
  );
  const [supportMultiServer, setSuppoerMultiServer] = useState(false);
  const [trainingCourses, setTrainingCourses] = useState(false);

  const handleLicenseChange = (value: string) => {
    setSelectedOption({
      licenseDuration: value,
      supportUpdates:
        value === licenseDurations[0].id
          ? supportUpdates[0].id
          : supportUpdates[1].id,
    });
  };

  const handleSupportChange = (value: string) => {
    setSelectedOption({
      supportUpdates: value,
      licenseDuration:
        value === supportUpdates[0].id
          ? licenseDurations[0].id
          : licenseDurations[1].id,
    });
  };

  const isUponRequest =
    selectedOption.licenseDuration !== licenseDurations[0].id ||
    selectedOption.supportUpdates !== supportUpdates[0].id ||
    supportLevelValue !== supportLevel[0].id ||
    supportMultiServer ||
    trainingCourses;
  const total =
    numberOfUsersTotal[numberOfUsersValue as keyof typeof numberOfUsersTotal];
  const isUponRequestOrEmpty = isUponRequest || !total;

  return (
    <Modal maxWidth="544px" isOpen={isOpen} onClose={onClose}>
      <StyledEnterpriseModal>
        <StyledEnterpriseModalHeading
          level={3}
          label={t("EnterpriseOnPremises")}
        />

        <StyledEnterpriseModalItems>
          <LabeledWrapper
            label={t("NumberOfUsers")}
            rightSide={
              <StyledEnterpriseModalTooltip
                id="number-of-users"
                place="bottom-start"
                width="220px"
                content={t("NumberOfUsersTooltip")}
              >
                <InfoIcon />
              </StyledEnterpriseModalTooltip>
            }
          >
            <CounterSelector
              items={numberOfUsers.map((item) => ({
                id: item.id,
                label: t(item.label),
              }))}
              selected={numberOfUsersValue}
              onChange={setNumberOfUsersValue}
            />
          </LabeledWrapper>

          <LabeledWrapper label={t("LicenseDuration")}>
            <ToggleButtons
              items={licenseDurations.map((item) => ({
                id: item.id,
                label: {
                  name: t(item.label.name),
                },
              }))}
              selected={selectedOption.licenseDuration}
              onChange={handleLicenseChange}
            />
          </LabeledWrapper>

          <LabeledWrapper label={t("Support&Updates")}>
            <ToggleButtons
              items={supportUpdates.map((item) => ({
                id: item.id,
                label: {
                  name: t(item.label.name),
                },
              }))}
              selected={selectedOption.supportUpdates}
              onChange={handleSupportChange}
            />
          </LabeledWrapper>

          <LabeledWrapper label={t("SupportLevel")}>
            <Tabs
              items={supportLevel.map((item) => ({
                id: item.id,
                label: t(item.label),
                content: (
                  <StyledEnterpriseModalList>
                    {Array.isArray(item.content)
                      ? item.content.map((text, index) => (
                          <li key={index}>{t(text)}</li>
                        ))
                      : item.content && <li>{t(String(item.content))}</li>}
                  </StyledEnterpriseModalList>
                ),
              }))}
              selected={supportLevelValue}
              bgColor="#f5f5f5"
              collapsible
              onChange={setSupportLevelValue}
            />
          </LabeledWrapper>

          <LabeledWrapper label={t("Scalability")}>
            <Checkbox
              label="Support for multi-server deployment"
              checked={supportMultiServer}
              onChange={() => setSuppoerMultiServer(!supportMultiServer)}
            />
          </LabeledWrapper>

          <LabeledWrapper label={t("AdditionalToolsAndServices")}>
            <Checkbox
              label="Training courses"
              checked={trainingCourses}
              onChange={() => setTrainingCourses(!trainingCourses)}
            />
          </LabeledWrapper>

          <StyledEnterpriseModalTotal>
            <Heading level={4} label={t("Total")} />

            <Heading level={5} size={isUponRequestOrEmpty ? 4 : 2} color="main">
              {isUponRequestOrEmpty ? (
                t("UponRequest")
              ) : (
                <>
                  <StyledEnterpriseModalTotalCurrency
                    forwardedAs="span"
                    color="main"
                    label="$"
                  />
                  {total}
                </>
              )}
            </Heading>
          </StyledEnterpriseModalTotal>
        </StyledEnterpriseModalItems>

        <StyledEnterpriseModalBtns>
          <StyledEnterpriseModalBtn
            forwardedAs="a"
            href=""
            label={isUponRequest ? t("GetAQuote") : t("BuyNow")}
          />
          <StyledEnterpriseModalBtn
            onClick={onClose}
            forwardedAs="button"
            variant="tertiary"
            label={t("Cancel")}
          />
        </StyledEnterpriseModalBtns>
      </StyledEnterpriseModal>
    </Modal>
  );
};

export { EnterpriseModal };
