import styled, { css } from 'styled-components'
import { ButtonProps, ThemeButton, TypesButton } from '.'
import { shade, transparentize } from 'polished'
import themeStyles from '../../../styles/theme'

type WrapperProps = Pick<ButtonProps, 'typeButton' | 'themeButton' | 'positionButton'>

const modifiersTheme = {
    primary: {
        main: themeStyles.colors.primary.default,
        secondary: themeStyles.colors.white[100]
    },
    info: {
        main: themeStyles.colors.info.medium,
        secondary: themeStyles.colors.white[100]
    },
    danger: {
        main: themeStyles.colors.danger.medium,
        secondary: themeStyles.colors.white[100]
    },
    warning: {
        main: themeStyles.colors.alert.medium,
        secondary: themeStyles.colors.black['88']
    },
    success: {
        main: themeStyles.colors.success.medium,
        secondary: themeStyles.colors.white[100]
    },
    octopus: {
        main: themeStyles.colors.octopus.primary.default,
        secondary: themeStyles.colors.white[100]
    },
    ihealth: {
        main: themeStyles.colors.ihealth.primary.default,
        secondary: themeStyles.colors.black['88']
    },
    secondary: {
        main: themeStyles.colors.secondary[500],
        secondary: themeStyles.colors.black['88']
    },
    gray: {
        main: themeStyles.colors.black['56'],
        secondary: themeStyles.colors.black['56']
    },
    transparent: {
        main: themeStyles.colors.noColor
    }
}

const modifiers = {
    flat: (themeButton: ThemeButton, onClick?: any) => css`
        background: ${modifiersTheme[themeButton!].main};
        color: ${modifiersTheme[themeButton!].secondary};

        transition: background 0.2s ease;

        &:hover:not(:disabled) {
            ${onClick && `background: ${shade(0.25, modifiersTheme[themeButton!].main)};`}
        }

        &:active {
            background: ${modifiersTheme[themeButton!].main};
        }

        div.iconLeftBtn > svg path {
            fill: ${modifiersTheme[themeButton!].secondary} !important;
        }
    `,
    ghost: (themeButton: ThemeButton, onClick?: any) => css`
        background: transparent;
        color: ${modifiersTheme[themeButton!].main};
        border: 2px solid ${modifiersTheme[themeButton!].main};

        transition: background 0.2s ease;

        &:hover:not(:disabled) {
            ${onClick && `background: ${transparentize(0.95, modifiersTheme[themeButton!].main)}`};
        }

        &:active {
            background: transparent;
        }

        div.iconLeftBtn > svg path {
            fill: ${modifiersTheme[themeButton!].main} !important;
        }
    `,
    text: (themeButton: ThemeButton, onClick?: any) => css`
        background: transparent;
        color: ${modifiersTheme[themeButton!].main};
        border: none;

        transition: background 0.2s ease;

        &:hover:not(:disabled) {
            ${onClick && `background: ${transparentize(0.8, modifiersTheme[themeButton!].main)};`}
        }

        &:active {
            background: transparent;
        }
    `
}

const modifierPositionButton = {
    left: (themeButton: ThemeButton, typeButton?: TypesButton, onClick?: any) => css`
        justify-content: flex-start;
        padding: 1.4rem 0;
        min-width: 120px;
        padding: 1.6rem;
        padding-right: 80px;

        img path {
            fill: red !important;
        }

        ${modifiers.text(themeButton!, onClick)}
    `,
    center: (themeButton: ThemeButton, typeButton: TypesButton, onClick?: any) => css`
        justify-content: center;
        padding: 1.4rem 2rem;

        ${modifiers[typeButton!](themeButton!, onClick)}
    `,
    leftNoSpace: (themeButton: ThemeButton, typeButton?: TypesButton, onClick?: any) => css`
        justify-content: flex-start;
        padding: 1.4rem 0;
        min-width: 120px;
        padding-right: 80px;

        img path {
            fill: red !important;
        }

        ${modifiers.text(themeButton!, onClick)}
    `
}

export const Wrapper = styled.button<WrapperProps>`
    ${({ typeButton, themeButton, positionButton, onClick }) => css`
        border: none;
        cursor: ${onClick ? 'pointer' : 'default'};
        width: 100%;
        border-radius: 6.4rem;
        height: 48px;

        display: flex;
        align-items: center;

        text-decoration: none;

        .maida-button--text {
            font-size: 1.6rem;
            font-weight: 600;
        }

        div.iconLeftBtn {
            margin-right: 1rem;
            margin-top: 4px;
        }

        ${modifierPositionButton[positionButton!](themeButton!, typeButton!, onClick)};

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `}
`
