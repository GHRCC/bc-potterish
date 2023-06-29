import { useState, useEffect } from "react";
import { Title } from "../components/Title";
import { LinkButton } from "../components/LinkButton";
import { api } from "../utils/api";
import type { ISpell } from "../../server/spells/spells.schema";

const texts = {
  title: "My Spells",
};
const initialSpelldex: ISpell[] = [];

export function WizardRoute() {
  const [spelldex, setSpelldex] = useState(initialSpelldex);
  async function loadSpelldex() {
    const { data: nextSpelldex } = await api.get<ISpell[]>(
      "/wizards/myself/spelldex"
    );
    setSpelldex(nextSpelldex);
  }

  useEffect(() => {
    loadSpelldex();
  }, []);
  return (
    <div className="mt-4">
      <Title className="text-2xl text-center mb-4">{texts.title}</Title>
    </div>
  );
}
