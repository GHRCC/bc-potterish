//utilizaremos o moongose, o ODM
import { model, Schema } from "mongoose";

export type IWizard = {
  spell: any;
  //o I significa Interface
  username: string;
  name: string;
  surname: string;
  password: string;
};

export const wizardSchema = new Schema<IWizard>({
  username: {
    required: true,
    unique: true,
    type: Schema.Types.String,
    lowercase: true,
    min: 4,
    max: 16,
  }, //garantindo que o username vai ser uma string
  name: { required: true, type: Schema.Types.String },
  surname: { required: true, type: Schema.Types.String },
  password: { required: true, type: Schema.Types.String },
}); //criando schema, é o que garante os tipos que vão chegar no MongoDB

export const Wizard = model<IWizard>("Wizard", wizardSchema); //criando model
