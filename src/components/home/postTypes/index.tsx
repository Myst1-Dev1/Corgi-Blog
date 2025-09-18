

export function PostTypes() {
  return (
    <div className="container flex gap-5 overflow-x-auto">
      <span className="w-fit px-3 py-2 bg-orange-400 rounded-md text-white font-semibold cursor-pointer transition-all duration-500 hover:bg-orange-600 hover:text-white">Todos</span>
      <span className="w-fit px-3 py-2 rounded-md text-black font-semibold cursor-pointer transition-all duration-500 hover:bg-orange-400 hover:text-white">Alimentação</span>
      <span className="w-fit px-3 py-2 rounded-md text-black font-semibold cursor-pointer transition-all duration-500 hover:bg-orange-400 hover:text-white">Treinamento</span>
      <span className="w-fit px-3 py-2 rounded-md text-black font-semibold cursor-pointer transition-all duration-500 hover:bg-orange-400 hover:text-white">Saúde</span>
      <span className="w-fit px-3 py-2 rounded-md text-black font-semibold cursor-pointer transition-all duration-500 hover:bg-orange-400 hover:text-white">Curiosidades</span>
    </div>
  );
}