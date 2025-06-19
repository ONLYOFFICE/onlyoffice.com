import {
  StyledMaintenance,
  StyledMaintenanceContent,
  StyledMaintenanceText,
} from "./Maintenance.styled";
import { IMaintenance } from "./Maintenance.types";

const MaintenanceTemplate = ({ text }: IMaintenance) => {
  return (
    <StyledMaintenance>
      <StyledMaintenanceContent>
        <StyledMaintenanceText
          fontSize="24px"
          lineHeight="35px"
          color="#275678"
          textAlign="center"
          label={text}
        />
      </StyledMaintenanceContent>
    </StyledMaintenance>
  );
};

export { MaintenanceTemplate };
