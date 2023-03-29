import { useRouter } from 'next/router'

import React from 'react'

import { ReactSVG } from 'react-svg'

import CardPerfil from '../CardPerfil'

import * as S from './styles'

type RouteItem = {
    label: string

    icon: string

    redirectTo: string

    click: () => void
}

type UserData = {
    name: string
    profileImage: string
    email: string
}

type Props = {
    isOpen: boolean

    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

    routes: RouteItem[]

    user: UserData
}

const SideMenu = ({ isOpen, setIsOpen, routes, user }: Props) => {
    const route = useRouter()

    return (
        <S.Content>
            <S.Nav className={isOpen ? 'active' : ''}>
                <S.Container>
                    <S.Close onClick={() => setIsOpen(false)}>
                        <ReactSVG src="/faturamento/assets/icons/mai-ic-close.svg" />

                        <p>Fechar</p>
                    </S.Close>

                    <CardPerfil
                        name={user.name}
                        email={user.email}
                        profileImage={user.profileImage}
                        onClick={() => {
                            setIsOpen(false)
                            route.push('/selecionar-perfil')
                        }}
                    />

                    <S.ContainerLinks>
                        {routes.map((route, index) => {
                            return (
                                <S.ItemContainer key={route.label} onClick={() => routes[index].click()}>
                                    <S.IconHeader className="iconblue">
                                        <ReactSVG src={`/faturamento/assets/icons/${route.icon}`} />

                                        <S.Text>{route.label}</S.Text>
                                    </S.IconHeader>

                                    <ReactSVG src="/faturamento/assets/icons/mai-ic-chevron-single-right.svg" />
                                </S.ItemContainer>
                            )
                        })}
                    </S.ContainerLinks>
                </S.Container>
            </S.Nav>

            <div id={isOpen ? 'overlay' : 'none'} onClick={() => setIsOpen(!isOpen)}></div>
        </S.Content>
    )
}

export default SideMenu
