// import {useState, createContext, useEffect, ReactNode, useContext} from 'react';
// import {api} from 'src/services/api';

// interface Calendar {
// 	id: number;
// 	createdAt: string;
// 	typeProvider: string;
// 	module: string;
// 	maximumAmount: number;
// 	deadline: number;
// 	description: string;
// 	startingDay: number;
// 	finalDay: number;
// 	attendanceDeadline: number;
// }

// type CalendarInput = Omit<Calendar, 'id'>;

// interface CalendarsProviderProps {
// 	children: ReactNode;
// }

// interface CalendarsContextData {
// 	calendars: Calendar[];
// 	createCalendar: (calendar: CalendarInput) => Promise<void>;
// }

// export const CalendarContext = createContext<CalendarsContextData>({} as CalendarsContextData);

// export function CalendarsProvider({children}: CalendarsProviderProps) {
// 	const [calendars, setCalendars] = useState<Calendar[]>([]);

// 	useEffect(() => {
// 		api.get('calendars').then(response => setCalendars(response.data.calendars));
// 	}, []);

// 	async function createCalendar(calendarInput: CalendarInput) {
// 		const response = await api.post('/calendars', {
// 			...calendarInput,
// 			createdAt: new Date(),
// 		});

// 		const {calendar} = response.data;

// 		setCalendars([...calendar, calendars]);
// 	}

// 	return (
// 		<CalendarContext.Provider value={{calendars, createCalendar}}>
// 			{children}
// 		</CalendarContext.Provider>
// 	);
// }

// export function useBillingCalendar() {
// 	const context = useContext(CalendarContext);

// 	return context;
// }

// import React from 'react';

// export type Calendar = {
// 	typeProvider: any;
// 	specificNumber?: string;
// 	module: string;
// 	maximumAmount: string;
// 	deadline: string;
// 	newPeriod: NewPeriod[];
// };

// export type NewPeriod = {
// 	description: string;
// 	startingDay: number;
// 	finalDay: number;
// 	attendanceDeadline: any;
// };

// export const CalendarContext: Calendar = {
// 	typeProvider: '',
// 	specificNumber: '',
// 	module: '',
// 	maximumAmount: '',
// 	deadline: '',
// 	newPeriod: [{description: '', startingDay: 0, finalDay: 0, attendanceDeadline: 0}],
// };

// export const CalendarFormContext = React.createContext(CalendarContext);

// email-context.jsx

// Import createContext() method from React:
// import {createContext, useState} from 'react';

// const initialFormState: Calendar = {
// 	typeProvider: '',
// 	specificNumber: '',
// 	module: '',
// 	maximumAmount: '',
// 	deadline: '',
// 	newPeriod: [{description: '', startingDay: 0, finalDay: 0, attendanceDeadline: 0}],
// };

// // Create new context:
// export const CalendarFormContext = createContext(null);

// // Create new provider component:
// export const CalendarFormProvider = ({children}) => {
// 	// Create local state:
// 	const [calendarForm, setCalendarForm] = useState<Calendar>();

// 	// Prepare values to share:
// 	const val = {
// 		calendarForm, // The state itself
// 		setCalendarForm, // The state update function
// 	};

// 	return <CalendarFormContext.Provider value={val}>{children}</CalendarFormContext.Provider>;
// };

import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

export type Calendar = {
    id: number
    typeProvider: any
    specificNumber?: string
    module: string
    maximumAmount: string
    deadline: string
    newPeriod: NewPeriod[]
}

export type NewPeriod = {
    id?: string
    description: string
    startingDay: number
    finalDay: number
    attendanceDeadline?: any
}

type Props = {
    children: React.ReactNode
}

type SelectedCalendarType = [Calendar, Dispatch<SetStateAction<Calendar>>]

const CalendarFormContext = createContext<SelectedCalendarType | undefined>(undefined)

export const useCalendarContext = () => useContext(CalendarFormContext) as SelectedCalendarType

// Create new provider component:
const CalendarFormProvider = ({ children }: Props) => {
    // Create local state:
    return <CalendarFormContext.Provider value={useState<Calendar>(null)}>{children}</CalendarFormContext.Provider>
}

export { CalendarFormContext, CalendarFormProvider }
