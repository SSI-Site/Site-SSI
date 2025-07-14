// inicialização básica
import Meta from '../src/infra/Meta';
import styled from 'styled-components';

// componentes da página
import Image from "next/image";
import Button from '../src/components/Button';

const Error = () => {
    return (
        <>
            <Meta title='404 | Semana de Sistemas de Informação'/>

            <Container_background>
                <Image
                    src="/images/background_imgs/error404 1.png"
                    alt="Plano de fundo para página de erro"
                    width={6328}
                    height={2340}
                    style={{width:'100%', height:'auto'}}
                    priority
                />
                
                <Container_button>
                    <a href="/">
                        <Button style={{width:'auto'}}>Ir para Home</Button>
                    </a>
                </Container_button>
            </Container_background>


        </>
    )
}

export default Error


const Container_background = styled.div`
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  padding-block: 3.5rem;
  padding-inline: 1rem; // DEFAULT FOR MOBILE
  
  @media screen and (min-width: 800px){
    padding-block: 0;
  }
`;

const Container_button = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0px;
`;