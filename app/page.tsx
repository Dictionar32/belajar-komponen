export type ButtonProps = {
  id: number;
  label: string;
}

function Button ({label}: ButtonProps){
  return <button>{label}</button>
}

export default function Home (){

  const buttons: ButtonProps[] = [
    {
    id:1,
    label: "button 1",
    },
    {
      id:2,
      label: 'button 2',
    },
    {
      id:3,
      label: 'button 3',
    }
  ]

  return(
    <main>
      <h1>Belajar Component 1</h1>
      {buttons.map((button) => (
        <Button key={button.id} id={button.id} label={button.label} />
      ))}
    </main>
  )
}
