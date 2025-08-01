import { modules } from "@/data/Modules";

export default function Modules () {
    return (
        <div className="modules flex gap-15 py-10">
            {modules.map(m=>(
                <div className="module__card w-70 h-100 border-2 border-green-900 rounded-2xl p-5 Poppins">
                    <p className="text-2xl pb-10">{m.name}</p>
                    <p>{m.description}</p>
                </div>
            ))}
        </div>
    )
}