import React from 'react'
import { useRouter } from 'next/router'
import Logo from '../../atoms/Logo'

import * as S from './styles'
import { switchAssetsClient } from 'utils/parseAssets'
import Link from 'next/link'

type HeaderProps = {
    isLoggedIn?: boolean
    headerColor?: 'white' | 'grey'
    hasNotificationIcon?: boolean
    typeLogo?: 'maida' | 'workspace'
    children?: React.ReactNode
    appName?: string
}

const Header = ({ headerColor, hasNotificationIcon, typeLogo = 'workspace', children, appName = 'Adrenalina a Bordo' }: HeaderProps) => {
    const route = useRouter()

    return (
        <S.Header headerColor={headerColor}>
            <S.Container>
                <S.FlexContent>
                    <S.LogoContainer>
                        <Logo src={`/admin/assets/clients/brand-logo.png`} />
                        {/* <Logo src={`/faturamento/assets/clients/${switchAssetsClient()}/brand-logo.svg`} /> */}
                        <Link href="/">{appName && <h2>{appName}</h2>}</Link>
                    </S.LogoContainer>
                    {/* <Image src={`/workspace/assets/clients/${switchAssetsClient()}/favicon.svg`}/> */}
                    <S.Content>
                        {/* {hasNotificationIcon && (
              <S.Notifications>
                <img src='/workspace/icons/bell.svg'></img>
              </S.Notifications>
            )} */}
                        {children}
                    </S.Content>
                </S.FlexContent>
            </S.Container>
        </S.Header>
    )
}

export default Header
