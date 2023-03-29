import { ButtonHTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'

import * as S from './styles'

export type TypesButton = 'flat' | 'ghost' | 'text'
export type ThemeButton = 'primary' | 'info' | 'danger' | 'success' | 'warning' | 'octopus' | 'ihealth' | 'secondary' | 'gray'
export type PositionButton = 'left' | 'center' | 'leftNoSpace'

export type ButtonProps = {
    iconLeft?: string
    children: React.ReactNode
    typeButton?: TypesButton
    themeButton?: ThemeButton
    positionButton?: PositionButton
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
    iconLeft,
    children,
    typeButton = 'flat',
    themeButton = 'primary',
    positionButton = 'center',
    title,
    ...rest
}) => (
    <S.Wrapper typeButton={typeButton} themeButton={themeButton} positionButton={positionButton} className="maida-button--wrapper" {...rest}>
        {!!iconLeft && <ReactSVG src={iconLeft} wrapper="div" className="iconLeftBtn" aria-label="iconLabel" />}
        <span title={title} className="button maida-button--text">
            {children}
        </span>
    </S.Wrapper>
)

export default Button
