import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { CalendarFormProvider } from 'src/context/CalendarContext/useBillingCalendar'
import { NewPeriodFormProvider } from 'src/context/CalendarContext/useNewPeriod'
import { NewProcedureFormProvider } from 'src/context/ParametersContext/useNewProcedure'
import { ParameterFormProvider } from 'src/context/ParametersContext/useParameter'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/globals'
import { ToastProvider } from 'src/context/ToastContext'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import AuthProvider from 'src/context/AuthContext'
import { switchAssetsClient } from 'utils/parseAssets'
import AplicationProvider from 'src/context/AplicationContext'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <>
            <Head>
                <title>Adrenalina a Bordo</title>
                <meta name="description" content="A simple project starter to work with Typescript, React, NextJS and Styled Components" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href={`/faturamento/assets/clients/${switchAssetsClient()}/favicon.svg`} />
            </Head>
            <ThemeProvider theme={theme}>
                <CalendarFormProvider>
                    <NewPeriodFormProvider>
                        <ParameterFormProvider>
                            <NewProcedureFormProvider>
                                <ToastContainer autoClose={5000} />

                                <ToastProvider>
                                    <AuthProvider>
                                        <AplicationProvider>
                                            {getLayout(<Component {...pageProps} />)} <GlobalStyles />
                                        </AplicationProvider>
                                    </AuthProvider>
                                </ToastProvider>
                            </NewProcedureFormProvider>
                        </ParameterFormProvider>
                    </NewPeriodFormProvider>
                </CalendarFormProvider>
            </ThemeProvider>
        </>
    )
}

export default App
