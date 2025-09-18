import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Pagination() {
    return (
        <>
            <div className="py-10 container flex justify-center items-center gap-6">
                <span className="cursor-pointer border border-gray-300 w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    <FaArrowLeft />
                </span>
                <span className="cursor-pointer bg-orange-100 font-semibold w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    1
                </span>
                <span className="cursor-pointer font-semibold w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    2
                </span>
                <span className="cursor-pointer font-semibold w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    3
                </span>
                <span className="cursor-pointer font-semibold w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    ...
                </span>
                <span className="cursor-pointer border border-gray-300 w-10 h-10 grid place-items-center transition-all duration-500 hover:bg-orange-500 hover:border-transparent hover:text-white">
                    <FaArrowRight />
                </span>
            </div>
        </>
    )
}