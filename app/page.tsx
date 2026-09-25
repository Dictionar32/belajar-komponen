export type ButtonProps = {
  label: string;
  variant: "primary" | "danger" | "info" | "secondary";
  onClick: () => void;
}

export type ButtonData = {
  id: number;
  label:string;
  variant: "primary" | "danger" | "info" | "secondary";
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
    label: "read ",
    variant: "info"
    },
    {
      id:2,
      label: 'create',
      variant: "primary"
    },
    {
      id:3,
      label: 'update',
      variant: "secondary"
    },
    {
      id:4,
      label: 'delete',
      variant: 'danger'
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
