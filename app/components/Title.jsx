export default function Title({ children }) {
  return (
    <body>
      <header className="flex justify-between items-center bg-gray-800 py-4 px-6">
        <div className="flex items-center">
          <img src="../Assunto.png" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-semibold text-orange-600 ml-2">
            AnimeCom
          </h1>
        </div>
        <div className="text-right">
          <a href="#" className="text-gray-200 hover:text-stone-400 mr-4">
            Lista de Animes
          </a>
          <a href="#" className="text-gray-200 hover:text-stone-400">
            Login
          </a>
        </div>
      </header>
    </body>
  );
}
