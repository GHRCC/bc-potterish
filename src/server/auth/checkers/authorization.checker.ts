import { Action } from "routing-controllers";
import { WizardRepository } from "../../wizards/wizard.repository";
import { JwtService } from "../jwt.service";
import { IWizard } from "../../wizards/wizard.model";

const wizardRepository = new WizardRepository();
const jwtService = new JwtService();

export async function authorizationChecker(action: Action): Promise<boolean> {
  const authorizationHeader = action.request.headers.authorization;
  if (!authorizationHeader) {
    return false;
  }
  const [bearer, token] = authorizationHeader.split(" ");
  if (bearer !== "Bearer") {
    return false;
  }
  let payload: IWizard | null;
  try {
    payload = jwtService.verify(token) as IWizard | null;
  } catch (error) {
    return false;
  }
  if (payload === null) {
    return false;
  }
  const wizard = await wizardRepository.findOne(payload.username);
  if (wizard === null) {
    return false;
  }
  action.request.wizard = wizard;
  return true;
}
