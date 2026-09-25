export type ButtonProps = {
  label: string;
  variant: "primary" | "danger";
  onClick: () => void;
}

export type ButtonData = {
  id: number;
  label:string;
  variant: "primary" | "danger";
}

function Button ({label, variant, onClick}: ButtonProps){
  return (
    <button
      data-variant={variant}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default function Home (){

  function handleButtonClick() {
    console.log("button clicked");
  }

  const buttons: ButtonData[] = [
    {
    id:1,
    label: "button 1",
    variant: "primary"
    },
    {
      id:2,
      label: 'button 2',
      variant: "danger"
    },
    {
      id:3,
      label: 'button 3',
      variant: "primary"
    }
  ]

  return(
    <main>
      <h1>Belajar Component 1</h1>

      {buttons.map((button) => (
        <Button 
          key={button.id}
          label={button.label}
          variant={button.variant}
          onClick={handleButtonClick}
        />
      ))}
    </main>
  )
}
