import styled from 'styled-components';

// assets
import working from '../../public/images/working.gif';
import Image from 'next/image';

const Working = () => {

    return (
        <>
            <WorkingWrapper>
                <h1>We r still working on it!! ¯\_(ツ)_/¯</h1>
                <figure>
                    <Image src={working} alt="Tartarugas Mario andando" />
                </figure>
            </WorkingWrapper >
        </>
    )
}

export default Working;


const WorkingWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 50px 0 50px 0;
    width: 80%;
    /* padding-top: 100px; // para compensar a NavBar */

    img {
        width: 100%;
        height: auto;
    }
`