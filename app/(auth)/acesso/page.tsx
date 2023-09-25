'use client'
import React, { use, useState } from "react";
import Image from "next/image";
// import { axiosApi } from "@/services";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
// import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const { toast } = useToast()
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submit");

    // try {
    //   const response = await axiosApi.post(`token`, {
    //     username,
    //     password,
    //     cliente: 'caxias',
    //   });

    //   if (response.status === 200) {
    //     setCookie(null, "auth_token", response.data.access)
    //     router.push("/");
    //   }
    //   else
    //     toast({
    //       title: "Erro",
    //       description: "Usuário ou senha inválidos",
    //     });
    // } catch (error: any) {
    //   toast({
    //     title: "Erro",
    //     description: "Usuário ou senha inválidos",
    //   });
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-8">
      </div>
      <div className="bg-primary-foreground p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Usuário"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
