import Titulo from "@/components/Titulo/Titulo";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconHome } from "../../../../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react";

export default function LoginPage(){
  return(
    <main className={`h-screen py-8 px-4 flex flex-col`}>
      <Titulo titulo="Acesse a Plataforma!"/>
      <form className={`py-24`}>
        <Card className={`p-3`}>
          <CardTitle className={`text-center mb-4`}>Login</CardTitle>
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
            <Button>Login</Button>
          </div>
        </Card>
      </form>

      <IconHome />
    </main>
  )
}