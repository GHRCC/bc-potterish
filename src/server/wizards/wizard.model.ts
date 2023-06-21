//utilizaremos o moongose, o ODM
import { model, Schema } from "mongoose";

export type IWizard = {
  //o I significa Interface
  username: string;
  name: string;
  surname: string;
  password: string;
};
