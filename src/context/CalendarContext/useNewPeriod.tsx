import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

export type NewPeriod = {
    description: string | null
    startingDay: number | null
    finalDay: number | null
    attendanceDeadline?: any | null
}

type Props = {
    children: React.ReactNode
}

type SelectedNewPeriodType = [NewPeriod, Dispatch<SetStateAction<NewPeriod>>]

const NewPeriodFormContext = createContext<SelectedNewPeriodType | undefined>(undefined)

export const useNewPeriodContext = () => useContext(NewPeriodFormContext) as SelectedNewPeriodType

const NewPeriodFormProvider = ({ children }: Props) => {
    return <NewPeriodFormContext.Provider value={useState<NewPeriod>(null)}>{children}</NewPeriodFormContext.Provider>
}

export { NewPeriodFormContext, NewPeriodFormProvider }
