import { Dispatch, SetStateAction } from "react";

interface FilterDataProps{
    setParam: (param : string) => void,
}

export default function FilterData(props: FilterDataProps){
    
    function handleSubmit(event : any){
        event.preventDefault()

        props.setParam(event.target.filtro.value)
    }
    
    return(
        <div className="border-x-4 border-b-1 border-t-4 rounded-t-xl border-gray-300 w-[80%] m-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-gray-300 border-b-blue-500 border-b-2 pb-2">
                <label htmlFor="filtro">Filtrar por usuário: </label>
                <input className="rounded-md" type="email" name="filtro" id="filtro" placeholder="exemplo@exemplo.com"/>
                <button type="submit" className="bg-blue-400 rounded-xl p-1 ml-4 uppercase hover:text-white">Filtrar</button>
            </form>
        </div>
    )
}