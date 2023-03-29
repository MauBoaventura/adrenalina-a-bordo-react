import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    padding: 24px;

    gap: 32px;
`

const scale = keyframes`

  from {

    transform: scale(0,0);

  }



  to {

    transform: rotate(1,1);

  }

`

export const Content = styled.div`
    #overlay {
        position: fixed;

        top: 0;

        left: 0;

        right: 0;

        bottom: 0;

        z-index: 9998 !important;

        background-color: rgba(0, 0, 0, 0.4);

        &.active {
            animation: ${scale} 3s linear infinite;

            pointer-events: all;
        }
    }
`

export const Nav = styled.div`
    position: fixed;

    height: 100%;

    width: 366px;

    z-index: 9999;

    top: 0;

    right: -150%;

    background-color: #fff;

    overflow-x: hidden;

    transition: all 0.5s;

    &.active {
        right: 0;
    }
`

export const ContainerLinks = styled.div`
    display: flex;

    flex-direction: column;

    gap: 8px;
`

export const Text = styled.p`
    text-decoration: none;

    color: #818181;

    display: block;

    font-weight: 600;

    font-size: 16px;

    line-height: 24px;

    color: rgba(0, 0, 0, 0.88);

    /* transition: 0.3s; */
`

export const Header = styled.div`
    display: flex;

    gap: 16px;
`

export const ImageContainer = styled.div``

export const DataPerfil = styled.div``

export const ItemContainer = styled.div`
    ${({ theme }) => css`
        cursor: pointer;

        display: flex;

        padding: 16px;

        background: #f6f6f9;

        border-radius: 8px;

        justify-content: space-between;

        align-items: center;

        &:hover {
            background: ${theme.colors.primary['500']};

            p {
                color: #f6f6f9;
            }

            svg path {
                fill: #f6f6f9;

                stroke: #f6f6f9;
            }
        }
    `}
`

export const Name = styled.h2`
    font-weight: 700;

    font-size: 18px;

    line-height: 24px;

    color: #243ab2;
`

export const Email = styled.p`
    font-weight: 600;

    font-size: 14px;

    line-height: 24px;

    color: rgba(0, 0, 0, 0.56);
`

export const Close = styled.div`
    display: flex;

    align-items: flex-start;

    gap: 12px;

    cursor: pointer;

    svg path {
        fill: #2b45d4;
    }

    p {
        font-weight: 600;

        font-size: 16px;

        line-height: 24px;

        color: rgba(0, 0, 0, 0.88);
    }
`

export const IconHeader = styled.div`
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    .iconblue {
        svg path {
            fill: #2b45d4;
        }
    }
`
