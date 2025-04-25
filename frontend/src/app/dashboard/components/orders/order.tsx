import { RefreshCw } from "lucide-react";

export function Orders() {
  return (
    <div className="flex items-start justify-center min-h-screen pt-[30px]">
      <div className="p-8 flex flex-col items-center max-w-[720px] w-full mx-[20px]">
        <div className="flex items-center space-x-4 mb-4 w-full">
          <h1 className="text-3xl font-bold text-white">Últimos Pedidos</h1>
          <button className="hover:rotate-180 transition-transform duration-300">
            <RefreshCw size={24} color="#3fffa3" />
          </button>
        </div>

        <div className="flex flex-col space-y-2 w-full items-center justify-start">
          <button className="bg-[#101126] rounded-lg w-full max-w-[720px] p-0 text-left hover:bg-[#1c1c1c] hover:shadow-lg hover:scale-105 transition-all">
            <div className="flex items-stretch w-full h-full group">
              <div className="bg-[#3fffa3] w-[2%] rounded-l-lg"></div>

              <div className="bg-[#101126] w-[98%] rounded-r-lg flex items-center p-4 group-hover:bg-[#1b1b2f] transition-colors">
                <span className="text-white text-lg font-bold group-hover:text-[#3fffa3]">
                  Mesa 30
                </span>
              </div>
            </div>
          </button>
          <button className="bg-[#101126] rounded-lg w-full max-w-[720px] p-0 text-left hover:bg-[#1c1c1c] hover:shadow-lg hover:scale-105 transition-all">
            <div className="flex items-stretch w-full h-full group">
              <div className="bg-[#3fffa3] w-[2%] rounded-l-lg"></div>

              <div className="bg-[#101126] w-[98%] rounded-r-lg flex items-center p-4 group-hover:bg-[#1b1b2f] transition-colors">
                <span className="text-white text-lg font-bold group-hover:text-[#3fffa3]">
                  Mesa 29
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
