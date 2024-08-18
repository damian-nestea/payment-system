interface TituloProps{
  titulo: string
}

export default function Titulo({ titulo } : TituloProps){
  return(
    <h1 className={`text-4xl font-black text-center`}>{titulo}</h1>
  )
}