import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSection = styled(Section)`
    background-color: #f9f9f9;
    background-image: url(${getAssetUrl('/images/templates/document-builder/hero/docbuilder_image.svg')});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: calc(100% + 10px);

    @media ${device.tablet} {
        background-size: 100vw auto;
    }
`;

const DocumentBuilderBlock = styled.div`
    text-align: center;
    padding: 88px 0 563px;

    @media ${device.tablet} {
        padding: 80px 0 56vw;
    }

    @media ${device.mobile} {
        padding: 48px 0 63vw;
    }
`;

const StyledDocumentBuilderHeading = styled(Heading)`
    font-size: 40px;
    font-weight: 800;
    line-height: 1.33em;

    @media ${device.mobile} {
        font-size: 24px;
        letter-spacing: -0.03em;
    }
`;

const StyledDocumentBuilderText = styled(Text)`
    font-size: 14px;
    line-height: 1.5em;
    margin: 32px 0;

    @media ${device.mobile} {
        margin: 16px auto;
    }
`;

export {
    StyledSection,
    DocumentBuilderBlock,
    StyledDocumentBuilderHeading,
    StyledDocumentBuilderText
}