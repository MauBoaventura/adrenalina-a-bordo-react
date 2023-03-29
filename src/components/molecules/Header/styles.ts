import styled, { css } from 'styled-components'

type HeaderProps = {
    headerColor?: 'white' | 'grey'
}

export const Header = styled.header<HeaderProps>`
    ${({ theme, headerColor }) => css`
        background-color: ${headerColor ? theme.colors.bodyColor[headerColor] : theme.colors.bodyColor.white};
        width: 100%;
        padding: 20px 0;
    `}
`

export const Container = styled.div`
    max-width: 1400px;
    width: 95%;
    margin: 0 auto;
`

export const FlexContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        height: 33px;
    }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    h2 {
        cursor: pointer;
        margin-left: 8px;
        font-family: 'Open Sans';
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.56);
    }
`

export const ButtonSize = styled.div`
    width: 220px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
`

export const Notifications = styled.div`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    cursor: pointer;
`
