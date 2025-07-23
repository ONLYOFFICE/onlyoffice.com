import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";

const Grid = styled.div`
  column-count: 3;
  column-gap: 20px;
  margin: 0 auto;
  padding: 64px 0 0;
  overflow-wrap: break-word;

  @media ${device.tablet} {
    column-count: 2;
    width: 80%;
  }

  @media ${device.mobile} {
    column-count: 1;
    width: 100%;
  }
`;

const Card = styled.div`
  break-inside: avoid;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  word-wrap: break-word;
  text-align: left;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled(Link)`
  font-weight: 600;
  font-size: 14px;
`;

const Username = styled(Text)`
  font-size: 12px;
  color: #666;
`;

const Comment = styled.div`
  font-size: 13px;
  line-height: 1.6em;

  > span {
    color: #ff6f3d;
  }

  > p {
    display: block;
    margin: 0 0 8px;
  }
`;

const PlatformIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

export {
  Grid,
  Card,
  Name,
  Username,
  Comment,
  PlatformIcon,
  UserInfo,
  Header,
  Avatar,
  UserDetails,
  StyledContainer,
};
