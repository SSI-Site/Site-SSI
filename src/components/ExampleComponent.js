import styled from 'styled-components';
//componente exemplo

const ExampleComponent = () =>{
    return(
        <>
            <CompWrapper>
                <h1>teste</h1>
                <h2>teste</h2>
                <p>teste</p>
            </CompWrapper >
        </>
    )
}

export default ExampleComponent;


const CompWrapper = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    width: 30vw;

    h1{
        color: red;
    }

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