import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    cursor: pointer;
`
type ContainerImageProps = {
    backgroundImage: string
}
export const ContainerImage = styled.div<ContainerImageProps>`
    ${({ backgroundImage }) => css`
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-image: url(${backgroundImage});
    `}
`
