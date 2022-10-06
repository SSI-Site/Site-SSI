import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';
import useAuth from '../hooks/useAuth';

//components
import Working from '../src/components/Working'
import Button from '../src/components/Button';

const User = () => {

    const { user, signOut } = useAuth();

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getCatFact();
        setExample(res.fact);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    if (!document.cookie || !document.cookie.includes('ssi-site-auth')) {
                        window.location.href = "/"
                    }
                `
            }} />

            <Meta title='SSI 2022 | Seu Perfil' />
            <BackgroundWrapper>
                    <div className='padrao-background'></div>

                <UserInfoSection>

                    { user ?
                        <img className='userPic' src={user.photoUrl} alt="user picture" />
                    :
                        <h2>loading ...</h2>
                    }

                    <Button onClick={signOut}>Sair</Button>

                    <Working />
                </UserInfoSection>
            </BackgroundWrapper>
        </>
    )
}

export default User;

const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .padrao-background {
        width: calc(100vw - 10px);
        height: 120rem;
        display: flex;
        position: absolute;
        top: -4.5rem;
        mask-image: linear-gradient(to top, transparent 0%, black 7%);
        background: url('./images/padrao_background_mobile.svg') no-repeat;
        background-position: top center;
        background-size: cover;
        z-index:-2;

        @media (min-width:1000px) {
            height: 50%;
            background: url('./images/padrao_background_desktop.svg');
            background-size: cover;
        }
        @media (min-width:1500px) {
            left: calc((1500px - 100vw - 10px)/2);
        }
    }
`
const UserInfoSection = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 62px 45px 200px 45px;
    margin: 15rem 3rem;

    background: linear-gradient(180deg, #1B162C 50%, rgba(21, 16, 35, 0) 100%);

    .userPic {
        border-radius: 100%;
        min-width: 150px;
        width: 10%;
        margin-bottom: 50px;
    }
    @media (min-width:1000px) {
        
    }
`
