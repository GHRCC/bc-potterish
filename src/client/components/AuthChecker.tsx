import { useEffect } from "react";
import { useGlobalStore } from "../utils/useGlobalStore";
import { api } from "../utils/api";
import { AuthToken } from "../utils/authToken";
import type { ITrainer } from "../../server/trainer/trainer.model";

export function AuthChecker() {
  const setTrainer = useGlobalStore((state) => state.setTrainer);
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useGlobalStore(
    (state) => state.setIsAuthenticated
  );

  async function authChecker() {
    if (isAuthenticated) {
      return;
    }

    const token = AuthToken.get();
    if (!token) {
      return;
    }
    const response = await api.get<ITrainer>("/auth/myself");
    const trainer = response.data;
    setTrainer(trainer);
    setIsAuthenticated(true);
  }

  useEffect(() => {
    authChecker();
  }, []);

  return null;
}
