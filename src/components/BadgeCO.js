import styled from "styled-components";

const BadgeCO = ({ text, bgColor, textColor}) => {

    return (
        <BadgeWrapper textColor = {textColor} bgColor = {bgColor}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

const BadgeWrapper = styled.div`
    width: fit-content;
    padding: 0.125rem 0.25rem;
    max-width: 170px;
    background-color: ${props => props.bgColor};

    p{
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.textColor}
    }
`

export default BadgeCO;