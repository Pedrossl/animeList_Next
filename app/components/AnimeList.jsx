import React from 'react';

export default function AnimeList(props) {
    return (
        <tr className="bg-purple-200 hover:bg-purple-300 transition-all ">
            <td className="py-3 px-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
                    <img src={props.anime.capa} alt="" className="w-full h-full object-cover" />
                </div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.titulo}</div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.genero}</div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.produtora}</div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.temporadas}</div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.episodios}</div>
            </td>
            <td className="py-3 px-4">
                <div className="text-gray-900">{props.anime.nota}</div>
            </td>
        </tr>
    );
}
