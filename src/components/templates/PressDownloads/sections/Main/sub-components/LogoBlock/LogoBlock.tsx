import { Heading } from "@src/components/ui/Heading";
import {
  StyledLogoBlockWrapper,
  StyledLogoBlock,
  StyledLogoBlockItem,
  StyledLogoBlockItemBottom,
  StyledLogoBlockItemLogo,
  StyledLogoBlockItemLogoTitle,
  StyledLogoBlockItemTop,
  StyledLogoBlockItemDownloadFormats,
  StyledBrandbookBlock,
  StyledBrandbookBlockItem,
  StyledBrandbookBlockBtns,
} from "./LogoBlock.styled";
import { useTranslation } from "next-i18next";
import { logos } from "./data/logos";
import { brandbooks } from "./data/brandbooks";
import { Button } from "@src/components/ui/Button";

const LogoBlock = ({ id }: { id: string }) => {
  const { t } = useTranslation("press-downloads");

  return (
    <StyledLogoBlockWrapper id={id}>
      <div>
        <Heading level={3} size={4} label={t("LogoTitle")} />
        <StyledLogoBlock>
          {logos.map((item) => (
            <StyledLogoBlockItem key={item.title} href={item.link} download>
              <StyledLogoBlockItemTop>
                <StyledLogoBlockItemLogo
                  $logo={item.logo}
                  $isLightLogo={item.isLightLogo}
                />
              </StyledLogoBlockItemTop>
              <StyledLogoBlockItemBottom>
                <StyledLogoBlockItemLogoTitle>
                  {t(item.title)}
                </StyledLogoBlockItemLogoTitle>
                <StyledLogoBlockItemDownloadFormats>
                  SVG, PNG
                </StyledLogoBlockItemDownloadFormats>
              </StyledLogoBlockItemBottom>
            </StyledLogoBlockItem>
          ))}
        </StyledLogoBlock>
      </div>
      <div>
        <Heading level={3} size={4} label={t("BrandbookTitle")} />
        <StyledBrandbookBlock>
          {brandbooks.map((item) => (
            <StyledBrandbookBlockItem key={item.src} $src={item.src} />
          ))}
        </StyledBrandbookBlock>
        <StyledBrandbookBlockBtns>
          <Button
            as="a"
            href="https://static-www.onlyoffice.com/static/brandbook(ENG).pdf"
            target="_blank"
            label={t("BrandbookPreview")}
          />
          <Button
            as="a"
            download
            href="/images/templates/press-downloads/logo/brandbook/files/onlyoffice_brandbook.pdf"
            variant="secondary"
            label={t("BrandbookDownload")}
          />
        </StyledBrandbookBlockBtns>
      </div>
    </StyledLogoBlockWrapper>
  );
};

export { LogoBlock };
