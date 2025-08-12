import React, { useState } from "react";
import { useTranslation, Trans } from "next-i18next";

import { ButtonsArea, StyledSection } from "./Discover.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { coursesItems } from "./data/items";
import { SwitchExtended } from "./sub-components/SwitchExtended/SwitchExtended";
import { Heading } from "@src/components/ui/Heading";
import { KeyModules } from "./sub-components/KeyModules/KeyModules";
import { Levels } from "./sub-components/Levels/Levels";
import { CardForm } from "@src/components/templates/TrainingCourses/sections/Cards/sub-components/CardForm/CardForm";
import { ILocale } from "@src/types/locale";

export const Discover = ({ locale }: ILocale) => {
  const { t } = useTranslation("academy");
  const [openModal, setOpenModal] = useState(false);
  const [course, setCourse] = useState("academy_docs");
  
  return (
    <StyledSection
      id="discover"
      desktopSpacing={["112px", "0px"]}
      tabletSpacing={["88px", "0px"]}
      tabletSmallSpacing={["80px", "0px"]}
      mobileSpacing={["48px", "0px"]}
    >
      <SwitchExtended
        setCourse={setCourse}
        heading={{
          text: (
            <Trans
              t={t}
              i18nKey="DiscoverTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          ),
        }}
        subheading={t("DiscoverSubtitle")}
        items={[
          {
            button: {
              id: "academy_docs",
              icon: {
                url: "/images/templates/academy/courses/docs.svg",
                width: "64px",
                height: "64px",
              },
              label: t("TabsDocs"),
            },
            children: [
              <>
                <Heading level={3} textAlign="left">
                  <Trans
                    t={t}
                    i18nKey="TabsOODocsTitle"
                    components={[<Text as="span" color="main" key="0" />]}
                  />
                </Heading>
                <KeyModules items={coursesItems[0].keyModules || []} />
                <Levels items={coursesItems[0].levels} />
              </>,
            ],
          },
          {
            button: {
              id: "academy_docspace",
              icon: {
                url: "/images/templates/academy/courses/docspace.svg",
                width: "64px",
                height: "64px",
              },
              label: t("TabsDocspace"),
            },
            children: [
              <>
                 <Heading level={3}>
                  <Trans
                    t={t}
                    i18nKey="TabsOODocspaceTitle"
                    components={[<Text as="span" color="main" key="0" />]}
                  />
                </Heading>
                <KeyModules items={coursesItems[1].keyModules || []} />
                <Levels items={coursesItems[1].levels} />
              </>,
            ],
          },
          {
            button: {
              id: "academy_workspace",
              icon: {
                url: "/images/templates/academy/courses/workspace.svg",
                width: "64px",
                height: "64px",
              },
              label: t("TabsWorkspace"),
            },
            children: [
              <>
                <Heading level={3}>
                  <Trans
                    t={t}
                    i18nKey="TabsOOWorkspaceTitle"
                    components={[<Text as="span" color="main" key="0" />]}
                  />
                </Heading>
                <KeyModules items={coursesItems[2].featuresCovered || []} $isFeaturesCovered />
                <Levels items={coursesItems[2].levels} />
              </>,
            ],
          },
        ]}
      />

      <ButtonsArea>
        <Button as="button" onClick={() => setOpenModal(true)}>
          {t("SubmitRequest")}
        </Button>
        <Button as="a" href="/training-courses" variant="tertiary">
          {t("MoreCourses")}
        </Button>
      </ButtonsArea>


      {openModal &&
        <CardForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          locale={locale}
          course={course}
        />
      }
    </StyledSection>
  );
};
