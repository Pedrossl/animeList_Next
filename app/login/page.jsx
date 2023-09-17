import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-black mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-800 text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              id="nome"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-gray-800 text-sm font-bold mb-2">Senha</label>
            <input
              type="password"
              id="senha"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            
           <Link href='/'>Logen</Link> 
          </button>
          <a
            href="#"
            className="text-orange-500 hover:underline"
          >
            Esqueci minha senha
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;