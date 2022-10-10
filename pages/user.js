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

                { user ?
                    <UserInfoSection>
                        <UserInfoUpperWrapper>
                            <PhotoNameWrapper>
                                <img className='userPic' src={user.photoUrl} alt="user picture" />
                                <h3>{user.name}</h3>
                            </PhotoNameWrapper>
                            
                            <p>Palestras assistidas:<span className='bold-info'>&nbsp; 700 &#128293;</span></p>
                        </UserInfoUpperWrapper>
                        <UserInfoLowerWrapper>
                            <TextInfo>
                                <UserInformation>
                                    <p>Email</p>
                                    <p className='bold-info'>{user.email}</p>
                                </UserInformation>
                                <UserInformation>
                                    <p>Número USP</p>
                                    <p className='bold-info'>NUSP AQUI</p>
                                </UserInformation>
                            </TextInfo>

                            <Button>Editar perfil</Button>
                        </UserInfoLowerWrapper>

                    </UserInfoSection>
                    :
                    <h2>loading ...</h2>
                }
                <Button onClick={signOut}>Sair</Button>
                <Working />
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

        @media (min-width:1120px) {
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
    width: 90%;
    
    padding: 2rem 45px 250px 45px;
    margin: 15rem 3rem;

    background: linear-gradient(180deg, #1B162C 50%, rgba(21, 16, 35, 0) 100%);

    p {
        font-size: 22px;
        font-weight: 400;
        margin-top: 20px; 
    }
    .bold-info {
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 15px; 
        font-weight: 600 !important;
    }
    @media (min-width:1120px) {
        margin: 8rem 3rem;
        padding-top: 0;

    }
    @media (min-width:1550px) {
        width: 100%;
    }
`

const UserInfoUpperWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-bottom: 50px;

    @media (min-width:1120px) {
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
    }

`
const PhotoNameWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .userPic {
        border-radius: 100%;
        min-width: 150px;
        width: 10%;
        margin-top: 3rem;
        margin-bottom: 50px;
    }
    h3 {
        font-size: 36px;
        font-weight: 600;
        text-align: center;
    }
    @media (min-width:1120px) {
        flex-direction: row;
        max-width: 70%;

        h3 {
            text-align: left;
            margin-left: 3rem;
        }
    }

`
const UserInfoLowerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    @media (min-width:1120px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const TextInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;

    @media (min-width:1120px) {
        max-width: 70%;
        flex-direction: row;
        gap: 25%;
    }
`

const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-block: 20px;

    p {
        word-wrap: break-word;
    }

`