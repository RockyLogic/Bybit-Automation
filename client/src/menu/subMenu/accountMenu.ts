import prompts from "prompts";
import { accountQuestion } from "../menuPrompts";

export const accountMenu = async () => {
    return await prompts(await accountQuestion());
};
