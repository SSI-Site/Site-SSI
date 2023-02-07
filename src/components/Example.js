import styled from 'styled-components';

// componente de exemplo
const Example = () => {

    return (
        <>
            <CompWrapper>
                <h1>Teste h1</h1>
                <h2>Teste h2</h2>
                <span>Teste h3, h4, h5, p, span</span>
            </CompWrapper >
        </>
    )
}

export default Example;


const CompWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    width: 30vw;

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