import { memo, useLayoutEffect, useRef } from "react";
import {
  StyledProvider,
  StyledProviderLogo,
  StyledProviderName,
  StyledProvidersIcons,
  StyledProviderIcon,
  StyledProviderDescription,
  StyledProviderDescriptionText,
  StyledProviderInner,
  StyledProviderInnerText,
} from "./Provider.styled";
import { Tooltip } from "@src/components/ui/Tooltip";
import { ChevronDownIcon } from "@src/components/icons";
import { ProviderItemProps } from "./Providet.types";

const Provider = ({
  name,
  logo,
  icons,
  description,
  open,
  onToggle,
  providersIcons,
}: ProviderItemProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.style.height = open
      ? contentRef.current.scrollHeight + "px"
      : "0px";
  }, [open]);

  return (
    <>
      <StyledProvider onClick={onToggle}>
        <StyledProviderInner $isOpen={open}>
          <StyledProviderLogo $logo={logo} />

          <StyledProviderInnerText>
            <StyledProviderName className="provider-name">
              {name}
            </StyledProviderName>
            <StyledProvidersIcons>
              {icons.map((icon) => {
                const iconData = providersIcons.find(
                  (providerIcon) => providerIcon.id === icon.id,
                );
                if (!iconData) return null;

                return (
                  <Tooltip
                    key={icon.id}
                    id={icon.id}
                    width="148px"
                    content={iconData.title}
                  >
                    <StyledProviderIcon
                      href={icon.link}
                      title={iconData.title}
                      target="_blank"
                      $positionX={iconData.iconPositionX}
                    />
                  </Tooltip>
                );
              })}
            </StyledProvidersIcons>
          </StyledProviderInnerText>

          <StyledProviderDescription ref={contentRef}>
            <StyledProviderDescriptionText size={3}>
              {description}
            </StyledProviderDescriptionText>
          </StyledProviderDescription>

          <ChevronDownIcon className="arrow" />
        </StyledProviderInner>
      </StyledProvider>
    </>
  );
};

export { Provider };
