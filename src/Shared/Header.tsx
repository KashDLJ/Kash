"use client"

import { useUser } from "@/data/Contexts"


export default function Header () {

    const {user,setUser,imgPath,setImgPath} = useUser()
    
    return (
        <div className="Header bg-neutral-900 py-5">
            <div className="wrapper">
                <div className="Header__container flex justify-between">
                    <div className="Logo Poppins">
                        <h1 className="text-4xl text-green-600 ">Kash</h1>
                    </div>
                    <div className="user flex gap-5">
                        <div className="box bg-neutral-50 w-25 h-10 rounded-xl flex justify-center items-center">
                            <p className="Poppins text-neutral-800">{user}</p>
                        </div>
                        <div className="userimg">
                            <div className="userimg__area w-10 h-10 overflow-hidden rounded-full">
                                <img src={imgPath} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}