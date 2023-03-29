import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

export type Parameter = {
    id: number
    ruleName: string
    effectiveDate: Date
    localApplication: string
    firstVerification: string
    secondVerification: string
    providerType: string
    providerIdentity: string
    proceduresList: Procedures[]
    provider: string
}

export type Procedures = {
    mainProcedure: string
    secondaryProcedure: string
}

type Props = {
    children: React.ReactNode
}

type SelectedParameterType = [Parameter, Dispatch<SetStateAction<Parameter>>]

const ParameterFormContext = createContext<SelectedParameterType | undefined>(undefined)

export const useParameterContext = () => useContext(ParameterFormContext) as SelectedParameterType

// Create new provider component:
const ParameterFormProvider = ({ children }: Props) => {
    // Create local state:
    return <ParameterFormContext.Provider value={useState<Parameter>(null)}>{children}</ParameterFormContext.Provider>
}

export { ParameterFormContext, ParameterFormProvider }
