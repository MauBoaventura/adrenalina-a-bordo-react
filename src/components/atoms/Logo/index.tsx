/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import React from 'react'

import * as S from './styles'

interface LogoProps {
    src: string
}

const Logo = ({ src }: LogoProps) => {
    return (
        <Link href="/">
            <S.Wrapper>
                <img src={src} alt="Icone Logomarca" />
            </S.Wrapper>
        </Link>
    )
}

export default Logo
