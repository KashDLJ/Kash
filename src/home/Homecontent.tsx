import Modules from "./Modules";

export default function Homecontent(){

    return (
        <div className="Home py-20">
            <div className="wrapper">
                <div className="Home__text Poppins">
                    <h1 className="text-6xl">Home</h1>
                    <p> Bem vindo de volta! Explore nossos modulos:</p>
                </div>
                <Modules/>
            </div>
        </div>
    )

}