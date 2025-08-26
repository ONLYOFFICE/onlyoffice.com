import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Download } from "./sections/Download";
import { Testimonials } from "./sections/Testimonials";
import { FeaturedIn } from "./sections/FeaturedIn";
import { IntegrationsBlock } from "./sections/IntegrationsBlock";
import { DoEvenMore } from "./sections/DoEvenMore";
import { DocumentEncryption } from "./sections/DocumentEncryption";
import { Quotes } from "./sections/Quotes";

const DesktopTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <IntegrationsBlock
        logos={true}
        image="CollaborationImgUrl"
        image2x="CollaborationImgUrl2x"
        title="CollaborationTitle"
        description="CollaborationDescription"
      />
      <Quotes image="/images/templates/desktop/quotes/softpedia.svg" title="Softpedia" description="SoftpediaQuote" link="https://www.softpedia.com/reviews/onlyoffice-desktop-editors-review/" />
      <DocumentEncryption />
      <Quotes image="/images/templates/desktop/quotes/softlay.svg" title="Softlay" description="SoftlayQuote" link="https://www.softlay.com/reviews/onlyoffice-desktop-editors-review/" />
      <IntegrationsBlock
        image="AIImgUrl"
        image2x="AIImgUrl2x"
        title="AITitle"
        description="AIDescription"
        linkHref="/ai-assistants"
        linkText="LearnMore"
      />
      <IntegrationsBlock
        image="CapabilitiesImgUrl"
        image2x="CapabilitiesImgUrl2x"
        title="CapabilitiesTitle"
        description="CapabilitiesDescription"
        linkHref="http://www.onlyoffice.com/app-directory"
        linkText="FindPlugins"
      />

      <DoEvenMore />
      <Download />
      <FeaturedIn />
      <Testimonials />
    </>
  );
};

export { DesktopTemplate };
