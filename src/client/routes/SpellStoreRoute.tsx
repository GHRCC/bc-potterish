import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { api } from "../utils/api";
import { useGlobalStore } from "../utils/useGlobalStore";
import { successToast } from "../utils/successToast";
import type { ISpellStore } from "../../server/spellstore/spellstore.model";
import type { ISpell } from "../../server/spells/spells.schema";
import type { IWizard } from "../../server/wizards/wizard.model";

const texts = {
  title: "Buy spells",
  buySpellsButton: "Buy",
  buySpellsSuccess: "Got it!",
};

const initialSpellStore: ISpellStore[] = [];

export function SpellStoreRoute() {
  const navigate = useNavigate();
  const setWizard = useGlobalStore((state) => state.setWizard);
  const [spellStore, setSpellStore] = useState(initialSpellStore);

  async function loadSpellStore() {
    const response = await api.get<ISpellStore[]>("/spellstore");
    const nextSpellStore = response.data;
    setSpellStore(nextSpellStore);
  }

  async function onBuySpell(spell: ISpell) {
    const response = await api.post<IWizard>("/spellstore/sell", {
      spellName: spell.name,
    });

    const nextWizard = response.data;
    setWizard(nextWizard);
    successToast(texts.buySpellsSuccess);
    navigate("/wizard");
  }

  useEffect(() => {
    loadSpellStore();
  }, []);

  return (
    <div className="mt-4">
      <Title className="text-2xl text-center mb-4">{texts.title}</Title>
    </div>
  );
}
