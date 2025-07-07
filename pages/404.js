// inicialização básica
import Meta from '../src/infra/Meta';
import styled from 'styled-components';

// componentes da página
import Image from "next/image";
import Button from '../src/components/Button';


const Container_background = styled.div`
  width: 100%;
`;

const Container_button = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0px;
`;


const Error = () => {
    return (
        <>
            <Meta title='Error 404'/>

            <Container_background>
                <Image
                    src="/images/background_imgs/error404 1.png"
                    alt="Plano de fundo para página de erro"
                    width={6328}
                    height={2340}
                    style={{width:'100%', height:'auto'}}
                    priority
                />
            </Container_background>

            <Container_button>
                <a href="/">
                    <Button style={{width:'auto'}}>Home</Button>
                </a>
            </Container_button>
        </>
    )
}

export default Error

