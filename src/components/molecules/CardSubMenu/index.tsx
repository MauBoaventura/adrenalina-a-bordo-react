import { useRouter } from 'next/router'
import React from 'react'
import { ReactSVG } from 'react-svg'
import * as S from './styles'

type CardSubMenuProps = {
    image?: string
    title?: string
    description?: string
    link?: string
    disabled?: boolean
    onClick?: () => void
    style?: React.CSSProperties
    titleStyle?: React.CSSProperties
}

const CardSubMenu = ({ image, title, description, disabled, style, titleStyle, link = '', onClick }: CardSubMenuProps) => {
    const route = useRouter()
    return (
        <S.CardSubMenu
            style={{ ...style }}
            role={'div-CardSubMenu'}
            isDisabled={disabled}
            onClick={() => {
                if (!disabled) {
                    route.push(link)
                    !!onClick && onClick()
                }
            }}
        >
            <S.Content>
                <ReactSVG src={image ? image : ''} role={'Icon'} wrapper="span" />
                <h1 style={titleStyle}>{title}</h1>
            </S.Content>

            <p>{description}</p>
        </S.CardSubMenu>
    )
}

export default CardSubMenu
