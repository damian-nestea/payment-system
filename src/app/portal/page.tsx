import Titulo from "@/components/Titulo/Titulo";
import Link from "../../../node_modules/next/link";

export default function Portal(){
  return(
    <main className={`h-screen py-8 px-4 flex flex-col`}>
      <Titulo titulo="Sistema Pagamentos"/>
      
      <div className={`flex flex-1 items-center justify-center`}>
        <p className={`text-center`}><Link className={`link`} href={"/portal/login"}>Acesse</Link>  a plataforma, se não tem conta <Link className={`link`} href={"/portal/register"}>registre-se</Link>.</p>
      </div>
    </main>
  )
}