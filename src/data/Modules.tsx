type Module = {
    name: string,
    module_id?: number,
    level?:number,
    description?: string,
    imgPath?: string,
}

export type { Module }

export const modules : Module[] = []

const basics: Module = {
    name: "Basico",
    description: "Entenda o básico da educação financeira para ter uma boa estabilidade!"

}

const FixInvestment: Module = {
    name: "Renda fixa",
    description: "Conheça as maneiras mais seguras de investir o seu dinheiro e ter uma reserva de emergência."

}


modules.push(FixInvestment)
modules.push(basics)

export let modules2: any
const modulesFun = async ()=> {
    
    const modules = await fetch('https://localhost:8080/api/question/list').then(resp => resp.json)
    console.log(modules)
    modules2 = modules
}


