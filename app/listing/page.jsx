'use client'
import { useEffect, useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from "next/router";
import AnimeList from "../components/AnimeList";
export default function Listing() {
    const [animes, setAnimes] = useState([])

    //const router = useRouter()
    useEffect(() => {
        async function getAnimes() {
            const response = await fetch('http://localhost:3004/animes')
            const data = await response.json()
            setAnimes(data)
        } 
        getAnimes()
    }, [])

    const listAnime = animes.map((anime) => {
        <AnimeList key = {anime.id} anime = {anime} />
    }
    )
    
    
    
    
    
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
    </tr>
  </thead>
</table>
    )
    }