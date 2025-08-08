"use client"

import { modules,modules2,Module } from "@/data/Modules";

import { useEffect, useState } from "react";

export default function Modules () {
    const [modules3, setmodules] = useState<Module[]>([])
    async function gettingdata(){
    const modules2: Module[] = await fetch('http://localhost:8080/api/question/list').then(resp => resp.json())
        console.log( modules2 , " Modules")
        setmodules(modules2)
        
    }

    gettingdata()
   
    return (
        <div className="modules flex gap-15 py-10">
            {modules3.length > 0 ? (
            modules3.map(m=>(
                
                <div className="module__card w-70 h-100 border-2 border-green-900 rounded-2xl p-5 Poppins">
                    <p className="text-2xl pb-10">{m.name}</p>
                    
                </div>
            ))) :
            <div></div>
        }
        </div>
    )
}