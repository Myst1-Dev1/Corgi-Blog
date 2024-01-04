import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="container py-10 m-auto">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form className="py-10 grid grid-cols-1 place-items-center gap-5 m-auto lg:max-w-96 sm:max-w-72 px-3">
                <input className="outline-none border border-gray-400 p-3 w-full" type="email" placeholder="Email" />
                <input className="outline-none border border-gray-400 p-3 w-full" type="password" placeholder="Senha" />
                <span className="text-gray-500 font-bold">Não possui uma conta? <Link href="/" className="text-orange-400 hover:text-orange-500 transition-colors">Cadastre-se</Link></span>
                <button className="bg-orange-400 text-white p-3 w-full hover:bg-orange-500 transition-colors">Entrar</button>
            </form>
        </div>
    )
}