import Link from "next/link";

export default function CardAnimes({ children }) {
  return (
  <article className="flex justify-around mt-5">
    <div>
     <figure ><img src="./vacaAlada.jpg" alt="" /></figure>
     <figcaption className="text-center"> <h3>Titulo</h3> </figcaption>
     </div>
     <div >
     <figure ><img src="./vacaAlada.jpg" alt="" /></figure>
     <figcaption className="text-center"> <h3>Titulo</h3> </figcaption>
     </div>
     <div >
     <figure ><img src="./vacaAlada.jpg" alt="" /></figure>
     <figcaption className="text-center"> <h3>Titulo</h3> </figcaption>
     </div>
     <div >
     <figure ><img src="./vacaAlada.jpg" alt="" /></figure>
     <figcaption className="text-center"> <h3>Titulo</h3> </figcaption>
     </div>
  </article>

  );
}