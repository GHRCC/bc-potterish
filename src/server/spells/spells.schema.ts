import { Schema } from "mongoose";

export interface ISpell {
  name: string;
  type: string;
  atk: number;
  level: number;
  price: number;
}

export const spellSchema = new Schema<ISpell>({
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: 2,
    maxlength: 16,
  },
  type: {
    type: Schema.Types.String,
    required: true,
  },
  atk: {
    type: Schema.Types.Number,
    required: true,
    min: 1,
  },
  level: {
    type: Schema.Types.Number,
    required: true,
    min: 1,
    max: 99,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
    min: 0,
  },
});
