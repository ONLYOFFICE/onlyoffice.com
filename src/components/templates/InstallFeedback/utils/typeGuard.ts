import { IFormData } from "../InstallFeedback.types";

const isModulesField = (name: keyof IFormData): name is "modules" => name === "modules";

export { isModulesField };