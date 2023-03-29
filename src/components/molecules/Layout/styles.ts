import styled, { css } from 'styled-components'

export const Container = styled.main`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    padding-bottom: 32px;
    background-color: #f6f6f9;
`

export type SectionTopProps = {
    margin?: string
}

export const ButtonBackContainer = styled.div<SectionTopProps>`
    margin-top: 2.4rem;
    display: inline-block;
`
