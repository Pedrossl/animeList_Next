export default function Title({ children }) {
  return (
    <body>
      <header className="flex justify-between items-center bg-fundo py-2
       px-6">
        <div className="flex items-center">
          <img src="../logo.png" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-semibold text-laranja ml-4">
            AnimeCom
          </h1>
        </div>
        <div className="text-right">
        <a href="#" className="text-gray-200 text-2xl hover:text-laranja mr-4 ">
          <i class="bi bi-search-heart"></i>
          </a>
        <a href="#" className="text-gray-200 text-2xl hover:text-laranja mr-4">
        <i class="bi bi-collection-play"></i>
          </a>
        <a href="#" className="text-gray-200 text-2xl hover:text-laranja mr-4">
        <i class="bi bi-postcard-heart"></i>
          </a>
          <a href="#" className="text-gray-200 text-2xl hover:text-laranja ">
          <i class="bi bi-person-circle "></i>
          </a>
      
        </div>
      </header>
    </body>
  );
}
