import Link from "next/link";

export default function Title({ children }) {
  return (
    <body className="pagina-especifica">
      <header className="flex justify-between items-center bg-fundo py-2 px-6">
        <div className="flex items-center">
          <img src="../logo.png" className="w-14 h-14 rounded-full" />
          <Link href="/">
            <h1 className="text-2xl font-semibold text-laranja ml-4">
              AnimeCom
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-5">

          <Link
            href="/listing"
            className="text-gray-200 text-2xl hover:text-laranja ml-4"
          >
            <i className="bi bi-collection-play"></i>
          </Link>
          <Link
            href="/registerAnime"
            className="text-gray-200 text-2xl hover:text-laranja ml-4"
          >
            <i className="bi bi-postcard-heart"></i>
          </Link>
          <Link
            href="/graphic"
            className="text-gray-200 text-2xl hover:text-laranja ml-4"
          >
            <i class="bi bi-buildings"></i>
          </Link>
          <Link
            href="/login"
            className="text-gray-200 hover:text-laranja ml-4"
          >
            <div className="flex flex-col items-center">
            <i className="bi bi-person-circle text-2xl mt-5 mb-0 "></i>
            <p className="text-x">User</p>
            </div>
            
              
          </Link>
        </div>
      </header>
    </body>
  );
}
