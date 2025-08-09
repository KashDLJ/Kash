import Link from "next/link";

export default function Login(){
    return (
        <div className="login_content pt-40 flex items-center justify-center">

            <form action="" className=" grid p-10 gap-2 w-1/3  justify-center justify-items-center box-border bg-neutral-100 rounded-xl">
                
                <div className="title text-2xl">
                    <h1 className="Poppins text-center text-neutral-800">Seja bem vindo</h1>
                </div>
                <div className="grid box-border py-10 gap-10">
                    <input type="text" placeholder="Seu usuario mais criativo" className="Poppins p-3 bg-neutral-300 rounded-xl outline-0 hover:border-2 box-border border-2 hover:border-green-400 transition-all duration-300" />
                    <input type="text" placeholder="Sua senha mais secreta" className="Poppins p-3  bg-neutral-300 rounded-xl outline-0 hover:border-2 box-border border-2 hover:border-green-400 transition-all duration-300" />
                </div>
                <button className="w-32 h-10 bg-green-600 rounded-xl Poppins cursor-pointer border-1 hover:border-green-600 hover:bg-neutral-100 hover:text-green-400 transition-all duration-300"> Criar conta </button>
                <Link className="Poppins text-green-600 pt-3 text-xs" href={"/"}>Já tenho conta</Link>
                
            </form>

        </div>
    )
}