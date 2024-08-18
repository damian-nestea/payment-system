import Titulo from "@/components/Titulo/Titulo";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconHome } from "../../../../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className={`h-screen py-8 px-4 flex flex-col`}>
      <Titulo titulo="Cadastre-se!" />
      <form className={`pt-24`}>
        <Card className={`p-3`}>
          <CardTitle className={`text-center mb-4`}>Cadastro</CardTitle>
          <div className={`inputWrapper`}>
            <Label htmlFor={"name"}>Nome</Label>
            <Input
              id={"name"}
              name={"name"}
              type={"text"}
              placeholder={"Digite seu nome..."}
            />
          </div>
          <div className={`inputWrapper`}>
            <Label htmlFor={"email"}>Email</Label>
            <Input
              id={"email"}
              name={"email"}
              type={"email"}
              placeholder={"Digite seu email..."}
            />
          </div>
          <div className={`inputWrapper`}>
            <Label htmlFor={"password"}>Senha</Label>
            <Input
              id={"password"}
              name={"password"}
              type={"password"}
              placeholder={"Digite sua senha..."}
            />
          </div>
          <div className={`mt-4 text-center`}>
            <Button>Enviar</Button>
          </div>
        </Card>
      </form>

      <Link className={`mx-auto mt-8`} href={"/portal"}>
        <Button>
          <IconHome />
        </Button>
      </Link>
    </main>
  );
}
