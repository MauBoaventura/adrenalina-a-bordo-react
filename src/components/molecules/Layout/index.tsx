import Title from 'components/atoms/Title'
import React from 'react'
import Header from '../Header'
import * as S from './styles'
import { useRouter } from 'next/router'
import ButtonBack from '../ButtonBack'

import { useAuth } from 'src/hooks/auth'
import UserProfile from 'components/atoms/UserProfile'
import SideMenu from 'components/atoms/SideMenu'
import { StringUtils } from 'utils/stringUtils'

type LayoutProps = {
    title?: string
    isLoggedIn: boolean
    children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
    const { dataUser, logout } = useAuth()
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()
    const routes = [
        {
            label: 'Configurações da conta',
            icon: 'mai-ic-settings.svg',
            redirectTo: '#',
            click: () => {
                // console.log()
            }
        },
        {
            label: 'Termos de Uso e Política de Privacidade',
            icon: 'mai-ic-info.mono.svg',
            redirectTo: '#',
            click: () => {
                // console.log()
            }
        },
        {
            label: 'Sair',
            icon: 'ic-logout.svg',
            redirectTo: '#',
            click: () => {
                logout()
                window.location.href = process.env.NEXT_PUBLIC_SSO
            }
        }
    ]

    return (
        <>
            <Header>
                {dataUser?.imageUrl !== undefined && (
                    <UserProfile img={dataUser?.imageUrl} onClick={() => setIsOpen(!isOpen)}>
                        <SideMenu
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            routes={routes}
                            user={{
                                name: dataUser?.name ? StringUtils.getFirstName(dataUser?.name) : '',
                                email: dataUser?.email,
                                profileImage: dataUser?.imageUrl
                            }}
                        />
                    </UserProfile>
                )}
            </Header>

            <S.Container>
                <S.ButtonBackContainer margin={'2.4rem'}>
                    <ButtonBack
                        handleClick={() => {
                            router.pathname === '/' ? (window.location.href = `${process.env.NEXT_PUBLIC_WORKSPACE}`) : router.back()
                        }}
                        icon={'/faturamento/assets/imgs/mai-ic-arrow-back.svg'}
                    >
                        <h3>Voltar</h3>
                    </ButtonBack>
                </S.ButtonBackContainer>
                <Title>{title}</Title>
                {children}
            </S.Container>
        </>
    )
}

export default Layout
