import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

export type Procedures = {
    mainProcedure: string
    secondaryProcedure: string
}

type Props = {
    children: React.ReactNode
}

type SelectedNewProcedureType = [Procedures, Dispatch<SetStateAction<Procedures>>]

const NewProcedureFormContext = createContext<SelectedNewProcedureType | undefined>(undefined)

export const useNewProcedureContext = () => useContext(NewProcedureFormContext) as SelectedNewProcedureType

const NewProcedureFormProvider = ({ children }: Props) => {
    return <NewProcedureFormContext.Provider value={useState<Procedures>(null)}>{children}</NewProcedureFormContext.Provider>
}

export { NewProcedureFormContext, NewProcedureFormProvider }
