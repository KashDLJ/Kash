export type Module = {
    name: string,
    description: string,
    imgPath?: string,
}

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