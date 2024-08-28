"use client";

import Titulo from "@/components/Titulo/Titulo";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconHome } from "../../../../node_modules/@tabler/icons-react/dist/esm/tabler-icons-react";
import Link from "next/link";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/user/reducer";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.user.list);

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const userExists = userList.find(
      (user: any) => user.email === email && user.password === password,
    );
    if (userExists) {
      const user = {
        email,
        password,
      };
      setEmail("");
      setPassword("");
      dispatch(login(user));
    } else {
      alert("Usuário não encontrado.");
    }
  };

  return (
    <main className={`h-screen py-8 px-4 flex flex-col`}>
      <Titulo titulo="Acesse a Plataforma!" />
      <form className={`pt-24`}>
        <Card className={`p-3`}>
          <CardTitle className={`text-center mb-4`}>Login</CardTitle>
          <div className={`inputWrapper`}>
            <Label htmlFor={"email"}>Email</Label>
            <Input
              id={"email"}
              name={"email"}
              type={"email"}
              placeholder={"Digite seu email..."}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`inputWrapper`}>
            <Label htmlFor={"password"}>Senha</Label>
            <Input
              id={"password"}
              name={"password"}
              type={"password"}
              placeholder={"Digite sua senha..."}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={`mt-4 text-center`}>
            <Button onClick={handleLogin}>Enviar</Button>
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
