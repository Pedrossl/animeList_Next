'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
  const { register, handleSubmit, reset } = useForm();

  const enviaDados = async (data) => {
    try {
      const response = await fetch('http://localhost:3004/animes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.status === 201) {
        toast.success('Anime cadastrado com sucesso!');
        reset();
      } else {
        toast.error('Erro ao cadastrar anime!');
      }
    } catch (error) {
      console.error('Erro ao cadastrar anime:', error);
      toast.error('Erro ao cadastrar anime. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="container mx-auto mt-5 p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Cadastro de Animes</h2>
      <form onSubmit={handleSubmit(enviaDados)}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-800 text-sm font-bold mb-2">Nome</label>
          <input type="text" id="titulo" {...register('titulo')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="genero" className="block text-gray-800 text-sm font-bold mb-2">Gênero</label>
          <input type="text" id="genero" {...register('genero')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="temporadas" className="block text-gray-800 text-sm font-bold mb-2">Temporadas</label>
          <input type="number" id="temporadas" {...register('temporadas')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="episodios" className="block text-gray-800 text-sm font-bold mb-2">Episódios</label>
          <input type="number" id="episodios" {...register('episodios')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="produtora" className="block text-gray-800 text-sm font-bold mb-2">Produtora</label>
          <input type="text" id="produtora" {...register('produtora')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="capa" className="block text-gray-800 text-sm font-bold mb-2">Capa</label>
          <input type="url" id="capa" {...register('capa')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="nota" className="block text-gray-800 text-sm font-bold mb-2">Nota</label>
          <input type="number" id="nota" {...register('nota')} className="border rounded w-full py-2 px-3 text-orange-500" required />
        </div>

        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-3">
          Enviar
        </button>
        <button type="button" onClick={() => reset()} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Limpar
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Cadastro;
