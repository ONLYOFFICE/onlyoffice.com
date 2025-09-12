import styled from "styled-components";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMaintenance = styled.div`
  position: relative;
  height: 100%;
  min-height: 646px;
  background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAUAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgDrgABAwERAAIRAQMRAf/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPBUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEyobHwFMHR4SNCFVJicvEzJDRDghaSUyWiY7LCB3PSNeJEgxdUkwgJChgZJjZFGidkdFU38qOzwygp0+PzhJSktMTU5PRldYWVpbXF1eX1RlZmdoaWprbG1ub2R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8A+vFM3zz1LqYFXYpbwJX0wIpdhSupgSuwKvoMCW6YrS6h8MKV+RVdTFK7Aq+mKV2BK6mKV9MC0voMUrsCV9BgtV1MU0voMbVdgTS+gwJXUOKqlMC03Q4pX4ErqHFK/Aq6hxSvyKV9MVXYpXUwJX4FXUxTa/FV9BgS3gWm6HwxSqYq3Q4Er8Ct4sqX4ELsKV1MCV1MC03Q4pX0wKuwpb4++C1XYFbxTTdD4YqvyKXYVbxSupii3cvbAlbirsVdiqnirsVW8jiq3FWuQxVZirqjxxVTxV2KqeKuqPHFVPFXYqp1PjiqzkcVaxVbyOKrajxxVTxVrkMVWYqsqcVW1GKrMVW8vbFVuKrKnFVtRiqzFVvL2xVbUeOKqeKrKnFWsVU8VaqMVWYqt5e2KrcVU8VW8jiq3FVlT44q1iqnirsVU8VdUeOKqeKrORxVrFVvL2xVSq/8v44q/wD/2Q==");
  background-color: #dfdfdf;
  background-repeat: repeat-x;
  overflow: hidden;
`;

const StyledMaintenanceContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 952px;
  height: 646px;
  background-image: url(${getAssetUrl('/images/templates/maintenance/bg.png')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledMaintenanceText = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 316px auto 0;
  padding-left: 38px;
  font-family: "Tahoma", sans-serif;
  width: 348px;
`;

export { StyledMaintenance, StyledMaintenanceContent, StyledMaintenanceText };
