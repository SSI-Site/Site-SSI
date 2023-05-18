import styled from 'styled-components';

import Meta from '../src/infra/Meta';

// components
import PartnerCard from '../src/components/PartnerCard';

const Partnerships = () => {

    return (
        <>
            <Meta title='SSI 2023 | Parcerias' />
            
            <PartnersSection>
                <h3>Parceiros do evento</h3>

                {/* <h2 className='deluxe'>Deluxe</h2>
                <div className='partners-wrapper'>
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                </div>

                <div className='divider-line'></div> */}

                {/* <div className='multicolor-title'>
                    <h2 className='palestra'>Palestra&nbsp;</h2>
                    <h2 className='comercial-and'>&#38;&nbsp;</h2>
                    <h2 className='workshop'>Workshop</h2>
                </div>
                <div className='partners-wrapper'>
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                </div> */}

                {/* <div className='divider-line'></div>

                <h2 className='standard'>Standard</h2>
                <div className='partners-wrapper'>
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                    <PartnerCard name='totvs' image='./images/logos/EACH-USP.svg' link="https://www.instagram.com/semanadesi/" />
                </div>

                <div className='divider-line'></div> */}

                <h2 className='apoiadores'>Apoiadores&nbsp;</h2>
                <div className='partners-wrapper'>
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                </div>

                <div className='divider-line'></div>

                <h2 className='apoio-inst'>Apoio institucional</h2>
                <div className='partners-wrapper'>
                    <PartnerCard name='each' image='./images/partners/each.svg' link="http://www5.each.usp.br/" />
                    <PartnerCard name='pet-si' image='./images/partners/pet.png' link="http://www.each.usp.br/petsi/" />
                </div>
            </PartnersSection>
        </>
    )
}

export default Partnerships;


const PartnersSection = styled.section`
    position: relative;
    padding-top: 100px;
    margin-bottom: 15rem;

    h3 {
        margin: 5rem 0 8rem;
        font-size: 48px;
        font-weight: bold;
        padding: 0 20px 0;
        line-height: 48px;
        text-align: center;
        max-width: 600px;
    }

    h2 {
        font-size: 64px;
        text-align: center;
        line-height: 64px;
    }

    .apoiadores {
        background: linear-gradient(to bottom, #AE5BF6 0%, #582C80 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* .deluxe {
        background: linear-gradient(to bottom, #FBE38F 0%, #816E2D 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .multicolor-title {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .palestra {
        background: linear-gradient(to bottom, #AE5BF6 0%, #582C80 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .comercial-and {
        background: linear-gradient(to right, #8744C2 0%, #4E4CCC 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .workshop {
        background: linear-gradient(to bottom, #7371ED 0%, #3B399E 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .standard {
        background: linear-gradient(to bottom, #E0E0E0 0%, #878787 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    } */

    .apoio-inst {
        color: #DEDEDE;
        max-width: 300px;
    }

    /*.deluxe, .multicolor-title, .standard,*/ .apoiadores, .apoio-inst {
        margin-block: 6rem;
    }

    .partners-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    .divider-line {
        height: 1px;
        width: 330px;
        background-color: #30274A;
        margin-block: 12rem 6rem;
    }

    @media (min-width:600px) {
        h3 {
            margin: 2rem 0 5rem;
        }

        /*.deluxe, .multicolor-title, .standard,*/ .apoiadores, .apoio-inst {
            margin-block: 4rem;
        }

        .apoio-inst {
            max-width: none;
        }

        .partners-wrapper {
            flex-direction: row;
            flex-flow: wrap;
            gap: 3rem;
        }

        .divider-line {
            margin-block: 8rem 4rem;
        }
    }

    @media (min-width:1120px) {
        
        .divider-line {
            background-color: transparent;
            height: 8rem;
            margin-block: 0;
        }
    }
`