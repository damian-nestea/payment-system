"use client";
import { useSelector } from "react-redux";

import Titulo from "@/components/Titulo/Titulo";
import Link from "../../../node_modules/next/link";

export default function Portal() {
  const user = useSelector((state: any) => state.user);
  return (
    <main className={`h-screen py-8 px-4 flex flex-col`}>
      <Titulo titulo="Sistema Pagamentos" />

      <div className={`flex flex-1 items-center justify-center`}>
        {user.isLogged ? (
          <p className={`text-3xl text-center`}>
            Bem-vindo{" "}
            <span className={`text-4xl font-black`}>
              {user.userOnline.name}
            </span>
            !
          </p>
        ) : (
          <p className={`text-center`}>
            <Link className={`link`} href={"/portal/login"}>
              Acesse
            </Link>{" "}
            a plataforma, se não tem conta{" "}
            <Link className={`link`} href={"/portal/register"}>
              registre-se
            </Link>
            .
          </p>
        )}
      </div>
    </main>
  );
}
