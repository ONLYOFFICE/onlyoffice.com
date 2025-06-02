import { CardComment } from "./sections/CardComment/CardComment";
import { CardCommentHosting } from "./sections/CardCommentHosting/CardComment";
import { CardCommentHardware } from "./sections/CardCommentHardware/CardCommentHardware";
import { Features } from "./sections/Features";
import { HardwareLinkImage } from "./sections/HardwareLinkImage/LinkImage";
import { Hero } from "./sections/Hero/Hero"
import { HostingLinkImage } from "./sections/HostingLinkImage/LinkImage";
import { DistributionsLinkImage } from "./sections/DistributionsLinkImage/LinkImage";
import { MarketplacesLinkImage } from "./sections/MarketplacesLinkImage/LinkImage";
import { CardCommentDistributions } from "./sections/CardCommentDistributions/CardComment";
import { Benefits } from "./sections/Benefits/Benefits";
import { MarketplaceConnector } from "./sections/MarketplaceConnector";
import { ScrollMenu } from "./sections/ScrollMenu/ScrollMenu";

const TechnologyPartnersTemplate = () => {
    return (
        <>
            <Hero />
            <ScrollMenu />
            <Features />
            <CardComment />
            <HardwareLinkImage />
            <CardCommentHardware />
            <HostingLinkImage />
            <CardCommentHosting />
            <DistributionsLinkImage />
            <CardCommentDistributions />
            <MarketplacesLinkImage />
            <Benefits />
            <MarketplaceConnector />
        </>
    );
};

export { TechnologyPartnersTemplate }