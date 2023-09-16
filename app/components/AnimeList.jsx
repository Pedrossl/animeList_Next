'use client'

export default function AnimeList(anime ) {
    return (
       <tr>
       <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={anime.image} alt="" />
            </div>
        </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.name}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.genre}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.producer}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.seasons}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.episodes}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{anime.score}</div>
    </td>
    </tr>
    )
}