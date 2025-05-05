import { Trans, useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledSupport,
  StyledSupportBg,
  StyledSupportContainer,
  StyledSupportHeading,
  StyledSupportItem,
  StyledSupportItemHeading,
  StyledSupportItemIcon,
  StyledSupportItemText,
  StyledSupportList,
  StyledSupportText,
} from "./Support.styled";

const Support = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledSupport
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <StyledSupportBg>
        <StyledSupportContainer>
          <StyledSupportHeading
            level={2}
            label={t("SupportTitleForEveryStep")}
            color="#fff"
            size={2}
          />
          <StyledSupportText label={t("SupportTextTheTeam")} color="#fff" />
          <StyledSupportList>
            {items.map((item) => (
              <StyledSupportItem key={item.heading}>
                <StyledSupportItemIcon $iconUrl={item.imageUrl} />
                <StyledSupportItemHeading
                  level={5}
                  label={t(item.heading)}
                  size={4}
                  color="#fff"
                />
                <StyledSupportItemText
                  label={t(item.desc)}
                  size={1}
                  color="#fff"
                >
                  <Trans
                    t={t}
                    i18nKey={item.desc}
                    components={[
                      <Link
                        key={0}
                        href="mailto:support@onlyoffice.com"
                        textUnderline={true}
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                      <Link
                        key={1}
                        href="mailto:sales@onlyoffice.com"
                        textUnderline={true}
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                    ]}
                  />
                </StyledSupportItemText>
                <Button
                  href={item.btn.href}
                  variant="quaternary"
                  label={t(item.btn.text)}
                  as="a"
                  className="item__btn"
                />
              </StyledSupportItem>
            ))}
          </StyledSupportList>
        </StyledSupportContainer>
      </StyledSupportBg>
    </StyledSupport>
  );
};

export { Support };
