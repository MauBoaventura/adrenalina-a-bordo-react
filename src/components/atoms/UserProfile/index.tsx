import React from 'react'
import * as S from './styles'
type UserProfileProps = {
    children?: React.ReactNode
    onClick?: () => void
    img?: string
}

const UserProfile = ({ children, onClick, img }: UserProfileProps) => {
    return (
        <S.Wrapper>
            {children}
            <S.ContainerImage backgroundImage={img ? img : '/faturamento/assets/icons/avatar.svg'} onClick={onClick} />
        </S.Wrapper>
    )
}

export default UserProfile
