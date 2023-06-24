import { create } from "zustand";
import type { IWizard } from "../../server/wizards/wizard.model";

type GlobalStore = {
  isLoading: boolean;
  isAuthenticated: boolean;
  trainer: IWizard;
  setIsLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setTrainer: (trainer: Partial<IWizard>) => void;
};

export const initialTrainer: IWizard = {
  username: "",
  name: "",
  surname: "",
  password: "",
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  isLoading: false,
  isAuthenticated: false,
  trainer: initialTrainer,
  setIsLoading(isLoading) {
    set({ isLoading });
  },
  setIsAuthenticated(isAuthenticated) {
    set({ isAuthenticated });
  },
  setTrainer(trainer) {
    set({ trainer: { ...get().trainer, ...trainer } });
  },
}));
