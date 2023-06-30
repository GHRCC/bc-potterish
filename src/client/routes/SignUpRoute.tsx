import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { successToast } from "../utils/successToast";
import { AuthToken } from "../utils/authToken";
import { useGlobalStore } from "../utils/useGlobalStore";
import { Title } from "../components/Title";
import { Button } from "../components/Button";

const texts = {
  title: "Create Account",
  submit: "Submit",
  namePlaceholder: "Name",
  surnamePlaceholder: "Surname",
  usernamePlaceholder: "Username",
  passwordPlaceholder: "Password",
  signUpSuccessMessage: "Your account has been created successfully",
};

export function SignUpRoute() {
  const navigate = useNavigate();
  const setWizard = useGlobalStore((state) => state.setWizard);
  const setIsAuthenticated = useGlobalStore(
    (state) => state.setIsAuthenticated
  );
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.post("/auth/sign-up", {
      name,
      surname,
      username,
      password,
    });
    console.log(response);
    setWizard(response.data.wizard);
    setIsAuthenticated(true);
    AuthToken.set(response.data.token);
    successToast(texts.signUpSuccessMessage);
    navigate("/wizard");
  }

  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] flex flex-col flex-1 items-center justify-center">
      <Title className="text-2xl text-center mb-4">{texts.title}</Title>
      <form noValidate className="flex flex-col gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={texts.namePlaceholder}
          className="bg-[#f0f0f0] p-2 rounded-md"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder={texts.surnamePlaceholder}
          className="bg-[#f0f0f0] p-2 rounded-md"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <input
          type="text"
          placeholder={texts.usernamePlaceholder}
          className="bg-[#f0f0f0] p-2 rounded-md"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder={texts.passwordPlaceholder}
          className="bg-[#f0f0f0] p-2 rounded-md"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">{texts.submit}</Button>
      </form>
    </div>
  );
}
