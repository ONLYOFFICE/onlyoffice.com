import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledEnterpriseModal,
  StyledEnterpriseModalHeading,
  StyledEnterpriseModalItems,
  StyledEnterpriseModalItem,
  StyledEnterpriseModalItemBox,
  StyledEnterpriseModalBtns,
  StyledEnterpriseModalBtn,
  StyledEnterpriseModalList,
  StyledEnterpriseModalTotal,
  StyledEnterpriseModalTotalCurrency,
} from "./EnterpriseModal.styled";
import { IEnterpriseModal } from "./EnterpriseModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { Tooltip } from "@src/components/ui/Tooltip";
import { CounterSelector } from "@src/components/widgets/CounterSelector";
import { ToggleButtons } from "@src/components/widgets/ToggleButtons";
import { Tabs } from "@src/components/widgets/Tabs";
import {
  licenseDurations,
  numberOfUsers,
  supportUpdates,
  supportLevel,
} from "../../data/enterprise";

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

  return (
    <Modal maxWidth="544px" isOpen={isOpen} onClose={onClose}>
      <StyledEnterpriseModal>
        <StyledEnterpriseModalHeading
          level={3}
          label={t("EnterpriseOnPremises")}
        />

        <StyledEnterpriseModalItems>
          <StyledEnterpriseModalItem>
            <StyledEnterpriseModalItemBox>
              <Text as="div" size={2} label={t("NumberOfUsers")} />
              <Tooltip
                id="number-of-users"
                place="bottom-start"
                width="220px"
                content={t("NumberOfUsersTooltip")}
              >
                <InfoIcon id="info-icon" />
              </Tooltip>
            </StyledEnterpriseModalItemBox>

            <CounterSelector
              items={numberOfUsers.map((item) => ({
                id: item.id,
                label: t(item.label),
              }))}
              selected={numberOfUsersValue}
              onChange={setNumberOfUsersValue}
            />
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalItem>
            <Text as="div" size={2} label={t("LicenseDuration")} />
            <ToggleButtons
              items={licenseDurations.map((item) => ({
                id: item.id,
                label: t(item.label),
              }))}
              selected={selectedOption.licenseDuration}
              onChange={handleLicenseChange}
            />
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalItem>
            <Text as="div" size={2} label={t("Support&Updates")} />
            <ToggleButtons
              items={supportUpdates.map((item) => ({
                id: item.id,
                label: t(item.label),
              }))}
              selected={selectedOption.supportUpdates}
              onChange={handleSupportChange}
            />
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalItem>
            <Text as="div" size={2} label={t("SupportLevel")} />
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
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalItem>
            <Text as="div" size={2} label={t("Scalability")} />
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalItem>
            <Text as="div" size={2} label={t("AdditionalToolsAndServices")} />
          </StyledEnterpriseModalItem>

          <StyledEnterpriseModalTotal>
            <Heading level={4} label={t("Total")} />
            <Heading level={5} size={2} color="#ff6f3d">
              <StyledEnterpriseModalTotalCurrency
                forwardedAs="span"
                color="main"
                label="$"
              />
              6550
            </Heading>
          </StyledEnterpriseModalTotal>
        </StyledEnterpriseModalItems>

        <StyledEnterpriseModalBtns>
          <StyledEnterpriseModalBtn
            forwardedAs="a"
            href=""
            label={t("BuyNow")}
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
