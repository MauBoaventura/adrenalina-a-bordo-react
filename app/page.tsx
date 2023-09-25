'use client'
import React, { use, useState } from "react";
import Image from "next/image";
import background from '../public/sertao.png'
// import { axiosApi } from "@/services";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
// import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  return (
    <div className="min-h-screen relative">
      {/* Use o componente Image para exibir a imagem de fundo */}
      <Image
        src={background}
        alt="Imagem de fundo"
        layout="fill" // Preenche todo o container pai
      />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-10 bg-white">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Em breve!</h1>
          <p className="text-gray-600">Nossos serviços estarão disponíveis em breve. Fique atento para atualizações!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
