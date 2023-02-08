import styled from 'styled-components';

// assets
import separador from '../../public/images/SeparadorPrincipal.svg';

/*
    - 'props' contém a variável 'dividerSize', que representa uma String que descreve o tamanho do Divider.
    - Pode ser "small", "medium" ou "large".
    - Quando o Divider especificado for "large", o tamanho varia de acordo com a tela (desktop e mobile).

    Exemplo de uso: <Divider dividerSize="large" />
*/
const Divider = (props) => {

    if (props.dividerSize === "small")
        return (
            <>
                <DividerWrapperSmall>
                    <img src={separador} />
                </DividerWrapperSmall >
            </>
        )

    if (props.dividerSize === "medium")
        return (
            <>
                <DividerWrapperMedium>
                    <img src={separador} />
                </DividerWrapperMedium >
            </>
        )

    if (props.dividerSize === "large")
        return (
            <>
                <DividerWrapperLarge>
                    <img src={separador} />
                </DividerWrapperLarge >
            </>
        )
}

export default Divider;


const DividerWrapperSmall = styled.div`

    img {
        width: 56px;
        height: 5.82px;
    }
`

const DividerWrapperMedium = styled.div`
    text-align: center;
    margin: 20% 0;

    img {
        width: 20%;
        min-width: 160px;
        max-width: 380px;
    }

    @media(max-height:590px) {
        display: none;
    }
`
const DividerWrapperLarge = styled.div`
    text-align: center;
    margin: 8rem 0;

    img {
        width: 30%;
        min-width: 250px;
        max-width: 470px;
    }
`