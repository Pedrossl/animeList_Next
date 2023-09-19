'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AlteracaoNota = () => {
    const { register, handleSubmit, reset } = useForm();
    const params = useParams();
    console.log(params);
  
    const [anime, setAnime] = useState(null);
    const [nota, setNota] = useState(null);
  
    useEffect(() => {
      async function carregarAnime() {
        try {
          const response = await fetch('http://localhost:3004/animes/' + params.id);
          if (response.ok) {
            const animeData = await response.json();
            setAnime(animeData);
            setNota(animeData.nota);  
          } else {
            toast.error('Erro ao carregar detalhes do anime.');
          }
        } catch (error) {
          console.error('Erro ao carregar anime:', error);
          toast.error('Erro ao carregar anime. Verifique o console para mais detalhes.');
        }
      }
  
      carregarAnime();
    }, [params.id]);
  
    const enviaDados = async () => {
      try {
        const response = await fetch(`http://localhost:3004/animes/${params.id}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ nota, ...anime })  // Inclua outros campos do anime
        });
  
        if (response.ok) {
          toast.success('Nota do anime atualizada com sucesso!');
        } else {
          toast.error('Erro ao atualizar a nota do anime.');
        }
      } catch (error) {
        console.error('Erro ao atualizar a nota do anime:', error);
        toast.error('Erro ao atualizar a nota do anime. Verifique o console para mais detalhes.');
      }
    };

  return (
    <div className="container mx-auto mt-5 p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Alteração de Nota do Anime</h2>
      <form onSubmit={handleSubmit(enviaDados)}>
        <div className="mb-4">
          <label htmlFor="nota" className="block text-gray-800 text-sm font-bold mb-2">Nova Nota</label>
          <input
            type="number"
            id="nota"
            {...register('nota')}
            className="border rounded text-orange-500 w-full py-2 px-3"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-3">
          Atualizar Nota
        </button>
        <button type="button" onClick={() => reset()} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Limpar
        </button>
      </form>

      <ToastContainer
        position="top-center"
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

export default AlteracaoNota;
