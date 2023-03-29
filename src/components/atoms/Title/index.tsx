import React from 'react'
import * as S from './styles'

type TitleProps = {
    style?: any
    children: React.ReactNode
}

const Title = ({ children, style }: TitleProps) => {
    return (
        <>
            <S.Container style={style}>
                <S.Title>{children}</S.Title>
            </S.Container>
        </>
    )
}

export default Title
