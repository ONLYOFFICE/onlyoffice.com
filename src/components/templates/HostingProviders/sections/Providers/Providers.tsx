import { Trans, useTranslation } from "next-i18next";
import { useState } from "react";
import {
  StyledAbout,
  StyledAboutWrapper,
  StyledProvidersWrapper,
} from "./Providers.styled";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { providers } from "./data/providers";
import { Provider } from "./sub-components/Provider";
import { Link } from "@src/components/ui/Link";
import { icons } from "./data/icons";
import { about } from "./data/about";

const Providers = () => {
  const { t } = useTranslation("hosting-providers");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Section as="div" mobileSpacing={["48px", "80px"]} background="#F5F5F5">
      <Container>
        <StyledProvidersWrapper>
          {providers.map((provider) => {
            return (
              <Provider
                key={provider.name}
                name={provider.name}
                logo={provider.logo}
                icons={provider.icons}
                description={
                  <Trans
                    t={t}
                    i18nKey={provider.description.label}
                    components={provider.description.links?.map(
                      (link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          color="main"
                          textUnderline
                          hover="underline-none"
                        />
                      ),
                    )}
                  />
                }
                open={!!openItems[provider.name]}
                onToggle={() => toggleItem(provider.name)}
                providersIcons={icons.map((icon) => ({
                  ...icon,
                  title: t(icon.title),
                }))}
              />
            );
          })}
        </StyledProvidersWrapper>

        <StyledAboutWrapper>
          {about.map((item, index) => (
            <StyledAbout key={index}>
              <Trans
                t={t}
                i18nKey={item.label}
                components={[
                  <Link
                    href={item.link}
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key={0}
                  />,
                ]}
              />
            </StyledAbout>
          ))}
        </StyledAboutWrapper>
      </Container>
    </Section>
  );
};

export { Providers };
