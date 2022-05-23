import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div className="flex w-2/3 max-w-4xl bg-white shadow-2xl rounded-2xl">
          {/* Sign in section */}
          <div className="w-3/5 p-5">
            <div className="font-bold text-left">
              Nome<span className="text-green-500">Empresa</span>
            </div>
            <div className="py-10">
              <h2 className="mb-2 text-3xl font-bold text-green-500">Entrar na conta</h2>
              <div className="inline-block w-10 mb-2 border-2 border-green-500"></div>
              {/* Social login section */}
              <div className="flex justify-center my-2 ">
                <a href="#" className="p-3 mx-1 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="p-3 mx-1 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="p-3 mx-1 border-2 border-gray-200 rounded-full hover:bg-green-500 hover:text-white">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="my-3 text-gray-400">ou use sua conta de email</p>
              <div className="flex flex-col items-center">
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <FaRegEnvelope className="m-2 text-gray-400" />
                  <input type="email" name="email" placeholder="Email" className="flex-1 text-sm bg-gray-100 outline-none" />
                </div>
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <MdLockOutline className="m-2 text-gray-400" />
                  <input type="password" name="password" placeholder="Senha" className="flex-1 text-sm bg-gray-100 outline-none" />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="Lembre-me" className="mr-1" />Lembre-me
                  </label>
                  <a href="#" className="text-xs">Esqueceu sua senha?</a>
                </div>
                <a href="#" className="inline-block px-12 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white">Entrar</a>
              </div>
            </div>
          </div>
          {/* Sign up section */}
          <div className="w-2/5 px-12 text-white bg-green-500 rounded-tr-2xl rounded-br-2xl py-36">
            <h2 className="mb-2 text-3xl font-bold">Bem vindo!</h2>
            <div className="inline-block w-10 mb-2 border-2 border-white"></div>
            <p className="mb-10">Preencha as informações pessoais e comece sua jornada conosco.</p>
            <a href="#" className="inline-block px-12 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-green-500">Inscreva-se</a>
          </div>
        </div>        
      </main>
    </div>    
  )
}
