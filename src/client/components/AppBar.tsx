import { Link, useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { AuthToken } from "../utils/authToken";
import { successToast } from "../utils/successToast";
import { useGlobalStore, initialWizard } from "../utils/useGlobalStore";
import { LinkButton } from "./LinkButton";
import { Button } from "./Button";

const texts = {
  appTitle: "Welcome to Hogwarts School of Witchcraft and Wizardry",
  createAccountLink: "Create your account",
  logoutButtonLabel: "Sign out",
  logoutSuccess: "You have signed out. See you later!",
};

export function AppBar() {
  const navigate = useNavigate();
  const wizard = useGlobalStore((state) => state.wizard);
  const isLoading = useGlobalStore((state) => state.isLoading);
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);

  const setWizard = useGlobalStore((state) => state.setWizard);
  const setIsAuthenticated = useGlobalStore(
    (state) => state.setIsAuthenticated
  );

  function onLogout() {
    AuthToken.remove();
    setIsAuthenticated(false);
    setWizard(initialWizard);
    successToast(texts.logoutSuccess);
    navigate("/");
  }

  return (
    <header className="bg-white shadow-md flex flex-row items-center justify-between p-3 sticky top-0 left-0 z-30">
      <div className="flex flex-row items-center gap-8">
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-[36px]" />
          <h1 className="font-bold uppercase text-2xl font-[VT323]">
            {texts.appTitle}
          </h1>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-2">
        {!isAuthenticated && (
          <LinkButton
            to="/criar-conta"
            className="bg-blue-500 hover:bg-blue-600"
          >
            {texts.createAccountLink}
          </LinkButton>
        )}
        {isAuthenticated && (
          <>
            <Link
              to="/wizard"
              className="font-[VT323] text-2xl hover:underline"
            >
              {wizard.username}
            </Link>
            <Button onClick={onLogout}>{texts.logoutButtonLabel}</Button>
          </>
        )}
        {isLoading && <FiLoader className="text-2xl animate-spin" />}
      </div>
    </header>
  );
}
