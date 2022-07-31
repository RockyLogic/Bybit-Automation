import prompts from "prompts";
import { moduleQuestion } from "../menuPrompts";

export const moduleMenu = async () => {
    return await prompts(moduleQuestion());
};
