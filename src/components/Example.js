import styled from 'styled-components';

// componente de exemplo
const Example = () => {

    return (
        <>
            <CompWrapper>
                <h1>Teste h1</h1>
                <h2>Teste h2</h2>
                <h3>Teste h3</h3>
                <h4>Teste h4</h4>
                <h5>Teste h5</h5>
                <h6>Teste h6</h6>
                <p>Teste p</p>
                <span>Teste span</span>

                <p>Borda da div com '<tt>width: 100%;</tt>'</p>
            </CompWrapper >
        </>
    )
}

export default Example;


const CompWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width:480px) {

    }

    @media (min-width:600px) {
       border-color: blue;
    }

    @media (min-width:801px) {
        border-color: red;
    }

    @media (min-width:1021px) {

    }

    @media (min-width:1281px) {

    }

    @media (min-width:1400px) {

    }


    @media (min-width:2200px) {
        /* 4k */
    }
`