'use client'
import { useEffect, useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from "next/navigation"
import AnimeList from "../components/AnimeList";
export default function Listing() {
    const [animes, setAnimes] = useState([])
    const router = useRouter()

    //const router = useRouter()
    useEffect(() => {
        async function getAnimes() {
            const response = await fetch('http://localhost:3004/animes')
            const data = await response.json()
            setAnimes(data)
        } 
        getAnimes()
    }, [])

    useEffect(() => {
      async function getGeneros() {
        const response = await fetch("http://localhost:3004/generos")
        const dados = await response.json()
        setGeneros(dados)
      }
      getGeneros()
    }
    , [])

    async function deleteAn(id) {
        const response = await fetch(`http://localhost:3004/animes/${id}`, {
            method: 'DELETE'
        })
        setAnimes(animes.filter(anime => anime.id !== id))
    }
    

    const listAnime = animes.map((anime) => (
      <AnimeList key={anime.id} 
      anime={anime} 
      delete={() => deleteAn(anime.id)}
      alter={() => router.push("alter/"+anime.id)}
      />
  ));
  
    
    
    return (
        <table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Imagem
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Nome
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Genero
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Produtora
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Numero de temporadas
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Numero de episodios
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Nota
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Ações
      </th>
    </tr>
  </thead>
  <tbody>{listAnime}</tbody>
</table>
    )
    }