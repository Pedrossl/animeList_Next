export default function Title({ children }) {
return(
<body >

<header className="flex justify-between items-center bg-gray-800 py-4 px-6">
  <div className="text-left">
    <h1 className="text-2xl font-semibold text-orange-600">AnimeCom</h1>
  </div>
  <div className="text-right">
    <a href="#" className="mr-4 text-gray-200 hover:text-stone-400">Administador</a>
    <a href="#" className="text-gray-200 hover:text-stone-400 mr-4">Lista de Animes</a>
    <a href="#" className=" text-gray-200 hover:text-stone-400">Login</a>
  </div>
</header>

</body>
)
}