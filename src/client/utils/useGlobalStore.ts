import { create } from "zustand";
import type { IWizard } from "../../server/wizards/wizard.model";

type GlobalStore = {
  isLoading: boolean;
  isAuthenticated: boolean;
  wizard: IWizard;
  setIsLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setWizard: (wizard: Partial<IWizard>) => void;
};

export const initialWizard: IWizard = {
  username: "",
  name: "",
  surname: "",
  password: "",
};

export const useGlobalStore = create<GlobalStore>((set, get) => ({
  isLoading: false,
  isAuthenticated: false,
  wizard: initialWizard,
  setIsLoading(isLoading) {
    set({ isLoading });
  },
  setIsAuthenticated(isAuthenticated) {
    set({ isAuthenticated });
  },
  setWizard(Wizard) {
    set({ wizard: { ...get().wizard, ...Wizard } });
  },
}));
