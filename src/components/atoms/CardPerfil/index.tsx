import { useRouter } from 'next/router'
import React from 'react'
import UserProfile from '../UserProfile'
import * as S from './styles'
type Props = {
    name: string
    email: string
    profileImage?: string
    onClick?: () => void
}
const CardPerfil = ({ name, email, profileImage, onClick }: Props) => {
    return (
        <S.Header>
            <S.ImageContainer>
                <UserProfile img={profileImage} />
            </S.ImageContainer>
            <S.DataPerfil>
                <S.Name>{name}</S.Name>
                <S.ChangeUser
                    onClick={() => {
                        !!onClick && onClick()
                    }}
                >
                    Usar outro perfil
                </S.ChangeUser>
                {/* <S.Email>{email}</S.Email> */}
            </S.DataPerfil>
        </S.Header>
    )
}

export default CardPerfil
