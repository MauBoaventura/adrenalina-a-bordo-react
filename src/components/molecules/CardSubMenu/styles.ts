import styled, { css } from 'styled-components'

type CardSubMenuProps = {
    isDisabled?: boolean
}

export const CardSubMenu = styled.div<CardSubMenuProps>`
    ${({ theme, isDisabled }) => css`
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        padding: 24px;
        width: 100%;
        min-width: 296px;
        min-height: 120px;
        background-color: ${theme.colors.white['100']};
        opacity: ${isDisabled ? '0.5' : '1'};
        cursor: ${isDisabled ? 'no-drop' : 'pointer'};
        transition: all 0.5s;

        h1 {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
            color: ${theme.colors.black['56']};
        }

        p {
            font-size: 1.2rem;
            line-height: 16px;
            font-weight: 400;
            color: ${theme.colors.black['88']};
        }

        :hover {
            background-color: ${isDisabled ? '#fafafa' : theme.colors.primary['500']};

            h1,
            p {
                color: ${isDisabled ? '' : theme.colors.white['bg']};
            }

            svg path {
                fill: ${isDisabled ? theme.colors.primary['500'] : theme.colors.white['bg']};
            }
        }
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        display: flex;
        margin-bottom: 16px;

        > span {
            margin-right: 0.8rem;
            width: 2.4rem;
            height: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: center;

            > span {
                line-height: 0;
            }
        }
    `}
`
