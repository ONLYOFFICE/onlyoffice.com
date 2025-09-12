import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IInput } from "@src/components/ui/Input";

const StyledPhoneInput = styled.div`
  position: relative;
`;

const StyledPhoneInputLeftSide = styled.button<{ $status: IInput["status"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-right: 1px solid #e2e2e2;
  padding: 0;
  width: 49px;
  min-width: 49px;
  height: 100%;
  background-color: ${(props) =>
    props.$status === "success" || props.$status === "error"
      ? "transparent"
      : "#f5f5f5"};
  cursor: pointer;
`;

const StyledPhoneInputFlag = styled.span<{
  $isCurrentFlag?: boolean;
  $isCountriesFlag?: boolean;
  $isOpen?: boolean;
}>`
  display: inline-flex;
  width: 16px;
  min-width: 16px;
  height: 11px;
  background-image: url("../images/widgets/phone-input/flags.gif");
  background-repeat: no-repeat;

  ${(props) =>
    props.$isCurrentFlag &&
    css`
      position: relative;
      margin-right: 8px;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -8px;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 3px 3px 0 3px;
        border-color: #808080 transparent transparent transparent;
        transform: rotate(${props.$isOpen ? "180deg" : "0deg"});
      }
    `}

  ${(props) =>
    props.$isCountriesFlag &&
    css`
      margin-top: 2px;
      margin-right: 8px;
    `}

  &.AF {
    background-position-y: -2311px;
  }

  &.AL {
    background-position-y: -1034px;
  }

  &.DZ {
    background-position-y: -528px;
  }

  &.AS {
    background-position-y: -1562px;
  }

  &.AD {
    background-position-y: -594px;
  }

  &.AO {
    background-position-y: -1947px;
  }

  &.AI {
    background-position-y: -1980px;
  }

  &.AR {
    background-position-y: -176px;
  }

  &.AM {
    background-position-y: -176px;
  }

  &.AW {
    background-position-y: -792px;
  }

  &.AC {
    background-position-y: -55px;
  }

  &.AU {
    background-position-y: -1716px;
  }

  &.AT {
    background-position-y: -1331px;
  }

  &.AZ {
    background-position-y: -1243px;
  }

  &.BS {
    background-position-y: -363px;
  }

  &.BH {
    background-position-y: -1496px;
  }

  &.BD {
    background-position-y: -1771px;
  }

  &.BB {
    background-position-y: -1573px;
  }

  &.BY {
    background-position-y: -1100px;
  }

  &.BE {
    background-position-y: 0;
  }

  &.BZ {
    background-position-y: -484px;
  }

  &.BJ {
    background-position-y: -1298px;
  }

  &.BM {
    background-position-y: -1914px;
  }

  &.BT {
    background-position-y: -1848px;
  }

  &.BO {
    background-position-y: -1650px;
  }

  &.BQ {
    background-position-y: -2719px;
  }

  &.BA {
    background-position-y: -1584px;
  }

  &.BW {
    background-position-y: -2707px;
  }

  &.BR {
    background-position-y: -770px;
  }

  &.IO {
    background-position-y: -55px;
  }

  &.VG {
    background-position-y: -1408px;
  }

  &.BN {
    background-position-y: -1683px;
  }

  &.BG {
    background-position-y: -2586px;
  }

  &.BF {
    background-position-y: -726px;
  }

  &.BI {
    background-position-y: -1892px;
  }

  &.KH {
    background-position-y: -242px;
  }

  &.CM {
    background-position-y: -2057px;
  }

  &.CA {
    background-position-y: -1375px;
  }

  &.CV {
    background-position-y: -2652px;
  }

  &.KY {
    background-position-y: -308px;
  }

  &.CF {
    background-position-y: -1837px;
  }

  &.TD {
    background-position-y: -814px;
  }

  &.CL {
    background-position-y: -1342px;
  }

  &.CN {
    background-position-y: -825px;
  }

  &.CO {
    background-position-y: -330px;
  }

  &.KM {
    background-position-y: -1430px;
  }

  &.CG {
    background-position-y: -1793px;
  }

  &.CK {
    background-position-y: -2267px;
  }

  &.CR {
    background-position-y: -2090px;
  }

  &.HR {
    background-position-y: -902px;
  }

  &.CU {
    background-position-y: -748px;
  }

  &.CW {
    background-position-y: -2729px;
  }

  &.CY {
    background-position-y: -561px;
  }

  &.CZ {
    background-position-y: -2256px;
  }

  &.DK {
    background-position-y: -1386px;
  }

  &.DJ {
    background-position-y: -2101px;
  }

  &.DM {
    background-position-y: -2432px;
  }

  &.DO {
    background-position-y: -1529px;
  }

  &.EC {
    background-position-y: -1188px;
  }

  &.EG {
    background-position-y: -2201px;
  }

  &.SV {
    background-position-y: -1639px;
  }

  &.GQ {
    background-position-y: -1507px;
  }

  &.ER {
    background-position-y: -715px;
  }

  &.EE {
    background-position-y: -2410px;
  }

  &.ET {
    background-position-y: -2443px;
  }

  &.FO {
    background-position-y: -1111px;
  }

  &.FJ {
    background-position-y: -1859px;
  }

  &.FI {
    background-position-y: -1903px;
  }

  &.FR {
    background-position-y: -1012px;
  }

  &.GF {
    background-position-y: -2234px;
  }

  &.PF {
    background-position-y: -1705px;
  }

  &.GA {
    background-position-y: -880px;
  }

  &.GM {
    background-position-y: -627px;
  }

  &.GE {
    background-position-y: -858px;
  }

  &.DE {
    background-position-y: -2509px;
  }

  &.GH {
    background-position-y: -2112px;
  }

  &.GI {
    background-position-y: -275px;
  }

  &.GR {
    background-position-y: -165px;
  }

  &.GL {
    background-position-y: -1760px;
  }

  &.GD {
    background-position-y: -2399px;
  }

  &.GP {
    background-position-y: -407px;
  }

  &.GU {
    background-position-y: -2366px;
  }

  &.GT {
    background-position-y: -935px;
  }

  &.GN {
    background-position-y: -2575px;
  }

  &.GW {
    background-position-y: -1925px;
  }

  &.GY {
    background-position-y: -803px;
  }

  &.HT {
    background-position-y: -319px;
  }

  &.HN {
    background-position-y: -2156px;
  }

  &.HK {
    background-position-y: -825px;
  }

  &.HU {
    background-position-y: -682px;
  }

  &.IS {
    background-position-y: -1991px;
  }

  &.IN {
    background-position-y: -1694px;
  }

  &.ID {
    background-position-y: -1958px;
  }

  &.IR {
    background-position-y: -2013px;
  }

  &.IQ {
    background-position-y: -649px;
  }

  &.IE {
    background-position-y: -1969px;
  }

  &.IL {
    background-position-y: -341px;
  }

  &.IT {
    background-position-y: -143px;
  }

  &.CI {
    background-position-y: -1661px;
  }

  &.JM {
    background-position-y: -1727px;
  }

  &.JP {
    background-position-y: -429px;
  }

  &.JO {
    background-position-y: -1463px;
  }

  &.KZ {
    background-position-y: -1210px;
  }

  &.KE {
    background-position-y: -2630px;
  }

  &.KI {
    background-position-y: -374px;
  }

  &.KW {
    background-position-y: -2487px;
  }

  &.KG {
    background-position-y: -1617px;
  }

  &.LA {
    background-position-y: -451px;
  }

  &.LV {
    background-position-y: -1936px;
  }

  &.LB {
    background-position-y: -1254px;
  }

  &.LS {
    background-position-y: -2190px;
  }

  &.LR {
    background-position-y: -2068px;
  }

  &.LY {
    background-position-y: -132px;
  }

  &.LI {
    background-position-y: -979px;
  }

  &.LT {
    background-position-y: -1122px;
  }

  &.MO {
    background-position-y: -825px;
  }

  &.MK {
    background-position-y: -1353px;
  }

  &.MG {
    background-position-y: -1287px;
  }

  &.MW {
    background-position-y: -2145px;
  }

  &.MY {
    background-position-y: -1870px;
  }

  &.MV {
    background-position-y: -616px;
  }

  &.ML {
    background-position-y: -2520px;
  }

  &.LU {
    background-position-y: -1474px;
  }

  &.MT {
    background-position-y: -1551px;
  }

  &.FK {
    background-position-y: -2762px;
  }

  &.MH {
    background-position-y: -1144px;
  }

  &.MQ {
    background-position-y: -198px;
  }

  &.MR {
    background-position-y: -253px;
  }

  &.MU {
    background-position-y: -2179px;
  }

  &.MX {
    background-position-y: -2024px;
  }

  &.FM {
    background-position-y: -1738px;
  }

  &.MD {
    background-position-y: -2685px;
  }

  &.MC {
    background-position-y: -913px;
  }

  &.MN {
    background-position-y: -2553px;
  }

  &.ME {
    background-position-y: -2167px;
  }

  &.MS {
    background-position-y: -583px;
  }

  &.MA {
    background-position-y: -2333px;
  }

  &.MZ {
    background-position-y: -638px;
  }

  &.MM {
    background-position-y: -11px;
  }

  &.NA {
    background-position-y: -1881px;
  }

  &.NR {
    background-position-y: -1749px;
  }

  &.NP {
    background-position-y: -110px;
  }

  &.NL {
    background-position-y: -1441px;
  }

  &.NC {
    background-position-y: -1276px;
  }

  &.NZ {
    background-position-y: -1540px;
  }

  &.NI {
    background-position-y: -154px;
  }

  &.NE {
    background-position-y: -550px;
  }

  &.NG {
    background-position-y: -2476px;
  }

  &.NU {
    background-position-y: -2079px;
  }

  &.NF {
    background-position-y: -209px;
  }

  &.KP {
    background-position-y: -1804px;
  }

  &.MP {
    background-position-y: -704px;
  }

  &.NO {
    background-position-y: -836px;
  }

  &.OM {
    background-position-y: -2454px;
  }

  &.PK {
    background-position-y: -2035px;
  }

  &.PW {
    background-position-y: -231px;
  }

  &.PS {
    background-position-y: -1199px;
  }

  &.PA {
    background-position-y: -847px;
  }

  &.PG {
    background-position-y: -1485px;
  }

  &.PY {
    background-position-y: -2344px;
  }

  &.PE {
    background-position-y: -946px;
  }

  &.PH {
    background-position-y: -1815px;
  }

  &.PL {
    background-position-y: -1177px;
  }

  &.PT {
    background-position-y: -517px;
  }

  &.PR {
    background-position-y: -473px;
  }

  &.QA {
    background-position-y: -462px;
  }

  &.KR {
    background-position-y: -2245px;
  }

  &.RE {
    background-position-y: -264px;
  }

  &.RO {
    background-position-y: -671px;
  }

  &.RU {
    background-position-y: -660px;
  }

  &.RW {
    background-position-y: -2674px;
  }

  &.BL {
    background-position-y: -1012px;
  }

  &.SH {
    background-position-y: -495px;
  }

  &.KN {
    background-position-y: -99px;
  }

  &.LC {
    background-position-y: -1397px;
  }

  &.MF {
    background-position-y: -55px;
  }

  &.PM {
    background-position-y: -1078px;
  }

  &.VC {
    background-position-y: -2619px;
  }

  &.WS {
    background-position-y: -2300px;
  }

  &.SM {
    background-position-y: -2123px;
  }

  &.ST {
    background-position-y: -2388px;
  }

  &.SA {
    background-position-y: -33px;
  }

  &.SN {
    background-position-y: -2134px;
  }

  &.RS {
    background-position-y: -2465px;
  }

  &.SC {
    background-position-y: -1045px;
  }

  &.SL {
    background-position-y: -737px;
  }

  &.SG {
    background-position-y: -22px;
  }

  &.SX {
    background-position-y: -2773px;
  }

  &.SK {
    background-position-y: -2212px;
  }

  &.SI {
    background-position-y: -1221px;
  }

  &.SB {
    background-position-y: -1067px;
  }

  &.SO {
    background-position-y: -1364px;
  }

  &.ZA {
    background-position-y: -2355px;
  }

  &.SS {
    background-position-y: -2741px;
  }

  &.ES {
    background-position-y: -1155px;
  }

  &.LK {
    background-position-y: -2641px;
  }

  &.SD {
    background-position-y: -352px;
  }

  &.SR {
    background-position-y: -2663px;
  }

  &.SZ {
    background-position-y: -2278px;
  }

  &.SE {
    background-position-y: -385px;
  }

  &.CH {
    background-position-y: -1320px;
  }

  &.SY {
    background-position-y: -1826px;
  }

  &.TW {
    background-position-y: -825px;
  }

  &.TJ {
    background-position-y: -187px;
  }

  &.TZ {
    background-position-y: -2289px;
  }

  &.TH {
    background-position-y: -957px;
  }

  &.CD {
    background-position-y: -1518px;
  }

  &.TL {
    background-position-y: -2784px;
  }

  &.TG {
    background-position-y: -605px;
  }

  &.TK {
    background-position-y: -2751px;
  }

  &.TO {
    background-position-y: -1089px;
  }

  &.TT {
    background-position-y: -440px;
  }

  &.TN {
    background-position-y: -539px;
  }

  &.TR {
    background-position-y: -1606px;
  }

  &.TM {
    background-position-y: -2542px;
  }

  &.TC {
    background-position-y: -1309px;
  }

  &.TV {
    background-position-y: -286px;
  }

  &.GB {
    background-position-y: -55px;
  }

  &.VI {
    background-position-y: -1782px;
  }

  &.UG {
    background-position-y: -1166px;
  }

  &.UA {
    background-position-y: -2002px;
  }

  &.AE {
    background-position-y: -2223px;
  }

  &.US {
    background-position-y: -44px;
  }

  &.UY {
    background-position-y: -2608px;
  }

  &.UZ {
    background-position-y: -1001px;
  }

  &.VU {
    background-position-y: -1265px;
  }

  &.VA {
    background-position-y: -2322px;
  }

  &.VE {
    background-position-y: -1056px;
  }

  &.VN {
    background-position-y: -968px;
  }

  &.WF {
    background-position-y: -1012px;
  }

  &.YE {
    background-position-y: -1672px;
  }

  &.ZM {
    background-position-y: -1595px;
  }

  &.ZW {
    background-position-y: -2046px;
  }
`;

const StyledPhoneInputCountries = styled.div`
  position: absolute;
  top: 59px;
  left: 0;
  border: 1px solid #d1d1d1;
  padding: 12px 20px 12px 24px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 16px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 3.5px 6px 3.5px;
    border-color: transparent transparent #ffffff transparent;
  }

  @media ${device.mobile} {
    top: 51px;
  }
`;

const StyledPhoneInputContriesWrapper = styled.ul`
  max-height: 260px;
  max-width: 280px;
  overflow-x: hidden;
  overflow-y: auto;

  li {
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

const StyledPhoneInputContriesItem = styled.button<{ $selected: boolean }>`
  display: flex;
  border: none;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  color: #333333;
  width: 100%;
  background-color: ${(props) => (props.$selected ? "#eeeeee" : "transparent")};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledPhoneInput,
  StyledPhoneInputLeftSide,
  StyledPhoneInputFlag,
  StyledPhoneInputCountries,
  StyledPhoneInputContriesWrapper,
  StyledPhoneInputContriesItem,
};
