import { useTranslation } from "next-i18next";
import { useState } from "react";
import {
  StyledSocialIcons,
  StyledSocialIcon,
  StyledSocialButton,
  StyledSocialIconLink,
  StyledWeChatQRCode,
} from "./SocialIcons.styled";
import { SubscribeModal } from "./sub-components/SubscribeModal/index";
import { socialIcons } from "./data/social-icons";
import { useRouter } from "next/router";

const SocialIcons = () => {
  const { t } = useTranslation("SocialIcons");
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const { locale } = useRouter();

  return (
    <>
      <StyledSocialIcons className="social-icons-list">
        {socialIcons
          .filter(
            (item) =>
              (!item.onlyFor || item.onlyFor === locale) &&
              (!item.excludeFor || item.excludeFor !== locale),
          )
          .map((item, index) => (
            <StyledSocialIcon
              key={index}
              title={t(item.title)}
              onClick={
                !item.link && item.title !== "WeChat"
                  ? () => setIsMailModalOpen(true)
                  : undefined
              }
              tabIndex={item.title === "WeChat" ? 0 : undefined}
              $isWeChat={item.title === "WeChat"}
            >
              {item.link ? (
                <StyledSocialIconLink
                  $iconPosition={item.iconPosition}
                  $iconUrl={item.iconUrl}
                  href={item.link.startsWith("http") ? item.link : t(item.link)}
                  target="_blank"
                  rel="noreferrer noopener"
                />
              ) : (
                <StyledSocialButton
                  $iconPosition={item.iconPosition}
                  $iconUrl={item.iconUrl}
                />
              )}
              {item.title === "WeChat" && (
                <StyledWeChatQRCode>
                  <span>关注我们</span>
                  <span>了解ONLYOFFICE最新信息</span>
                </StyledWeChatQRCode>
              )}
            </StyledSocialIcon>
          ))}
      </StyledSocialIcons>

      <SubscribeModal
        isOpen={isMailModalOpen}
        onClose={() => setIsMailModalOpen(false)}
      />
    </>
  );
};

export { SocialIcons };
