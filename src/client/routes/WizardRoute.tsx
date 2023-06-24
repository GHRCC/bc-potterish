import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Title } from "../components/Title";

const texts = {
  title: "Minha pokedex",
};

export function TrainerRoute() {
  return (
    <div className="mt-4">
      <Card className="max-w-screen-sm mx-auto my-4">
        <Title className="text-2xl text-center mb-4">{texts.title}</Title>
      </Card>
    </div>
  );
}
