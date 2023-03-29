import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 100%;
`

export const CardFlex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 32px;

    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #243ab2;
`
