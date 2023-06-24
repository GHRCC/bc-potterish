import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { browserHistory } from "./utils/browserHistory";
import { AppBar } from "./components/AppBar";
import { AuthChecker } from "./components/AuthChecker";
import { SignInRoute } from "./routes/SignInRoute";
import { SignUpRoute } from "./routes/SignUpRoute";
import { WizardRoute } from "./routes/WizardRoute";

export function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <AuthChecker />
      <AppBar />
      <Routes>
        <Route path="/" element={<SignInRoute />} />
        <Route path="/criar-conta" element={<SignUpRoute />} />
        <Route path="/wizard" element={<WizardRoute />} />
      </Routes>
    </HistoryRouter>
  );
}
