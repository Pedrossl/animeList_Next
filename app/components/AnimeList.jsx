import React from 'react';
import Swal from 'sweetalert2';

export default function AnimeList(props) {
    function deleteAnimes (id){
            Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          props.delete(id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    }

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
            <td className="py-3 px-4">
          <i class="bi bi-pencil-square hover:bg-laranja text-gray-900 mr-2 cursor-pointer" onClick={props.alter} title='alter'></i>
          <i class="bi bi-calendar2-x hover:bg-laranja text-gray-900 cursor-pointer mr-2" onClick={()=>deleteAnimes(props.anime.id)}
          title='Delete'></i>
          <i class="bi bi-star hover:bg-laranja text-gray-900 cursor-pointer" ></i>
            </td>
        </tr>
    );
}
