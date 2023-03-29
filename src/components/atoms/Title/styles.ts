import styled, { css } from 'styled-components'

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: 2.5rem;
        font-weight: 600;
        margin: 3rem 0;
        color: ${theme.colors.black[88]};
    `}
`

export const Container = styled.nav`
    max-width: 1400px;
    margin: 0 auto;
`
