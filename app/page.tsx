"use client";

import { useState } from "react";

export type ButtonProps = {
  label: string;
  variant: "primary" | "danger" | "info" | "secondary";
  active: boolean;
  onClick: (label: string) => void;
};

export type ButtonData = {
  id: number;
  label: string;
  variant: "primary" | "danger" | "info" | "secondary";
};

function Button({
  label,
  variant,
  active,
  onClick,
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-active={active}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default function Home() {
  const [activeButton, setActiveButton] = useState("");

  function handleButtonClick(label: string) {
    setActiveButton(label);
  }

  const buttons: ButtonData[] = [
    {
      id: 1,
      label: "read",
      variant: "info",
    },
    {
      id: 2,
      label: "create",
      variant: "primary",
    },
    {
      id: 3,
      label: "update",
      variant: "secondary",
    },
    {
      id: 4,
      label: "delete",
      variant: "danger",
    },
  ];

  return (
    <main>
      <h1>Belajar Component 1</h1>

      <p>Button aktif: {activeButton}</p>

      {buttons.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          variant={button.variant}
          active={button.label === activeButton}
          onClick={handleButtonClick}
        />
      ))}
    </main>
  );
}