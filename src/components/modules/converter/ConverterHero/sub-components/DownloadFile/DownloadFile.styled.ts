import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledDownloadFileWrapper = styled.div<{
  $color?: string;
  $borderStyle?: string;
}>`
  width: 100%;
  padding: 48px;
  display: grid;
  gap: 32px;
  justify-items: center;
  background-color: #fff;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ $color }) => $color};
  border-style: ${({ $borderStyle }) => $borderStyle || "solid"};
`;

const StyledDownloadFileImageWrapper = styled.div``;

const StyledDownloadFileImage = styled.img`
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  height: 86px;
  padding: 16px;
  width: 66px;
`;

const StyledDownloadFileBtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledDownloadFileBanner = styled.div`
  background: #f9f9f9;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 458px auto;
  align-items: center;
  padding: 16px 24px;
`;

const StyledDownloadFileBannerHeading = styled(Heading)`
  margin-bottom: 8px;
`;

const StyledDownloadFileBannerText = styled(Text)``;

const StyledDownloadFileStatistics = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledDownloadFileStatisticsText = styled.span``;

const StyledDownloadFileStatisticsStars = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: auto auto auto auto auto;
  position: relative;
  width: 149px;
`;

const StyledDownloadFileStatisticsStar = styled.div<{ $index: number }>`
  height: 28px;
  width: 30px;
  position: relative;
  z-index: 3;
  cursor: pointer;
`;

const StyledGrayStar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/images/modules/converter/empty-stars.svg");
  background-repeat: no-repeat;
  z-index: 1;
`;

const StyledOrangeStar = styled.div<{ $value: number }>`
  position: absolute;
  width: ${({ $value }) => $value}%;
  height: 100%;
  background-image: url("/images/modules/converter/full-stars.svg");
  background-repeat: no-repeat;
  z-index: 2;
  left: 0;
`;

const StyledDownloadFileStatisticsVotes = styled.div``;

export {
  StyledDownloadFileWrapper,
  StyledDownloadFileImageWrapper,
  StyledDownloadFileImage,
  StyledDownloadFileBtnsWrapper,
  StyledDownloadFileBanner,
  StyledDownloadFileBannerHeading,
  StyledDownloadFileBannerText,
  StyledDownloadFileStatistics,
  StyledDownloadFileStatisticsText,
  StyledDownloadFileStatisticsStars,
  StyledDownloadFileStatisticsStar,
  StyledGrayStar,
  StyledOrangeStar,
  StyledDownloadFileStatisticsVotes,
};
