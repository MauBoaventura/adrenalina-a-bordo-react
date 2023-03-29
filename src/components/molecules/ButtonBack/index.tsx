import { ContentButton } from './styles'
import { ReactSVG } from 'react-svg'

type ButtonProps = {
    icon?: string
    style?: React.CSSProperties | undefined
    to?: any
    handleClick?: () => void
} & React.ComponentProps<'button'>

const ButtonBack = ({ children, style, icon, handleClick }: ButtonProps) => {
    return (
        <ContentButton style={style} onClick={handleClick}>
            <ReactSVG src={icon ? icon : ''}></ReactSVG>
            {children}
        </ContentButton>
    )
}

export default ButtonBack
