import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';
import useAuth from '../hooks/useAuth';

//components
import Button from '../src/components/Button';
import ModalTokenComponent from '../src/components/ModalTokenComponent'

// lista com valores estáticos - a serem substituídos pelo saphira:
const palestras = [
    'Palestra 1 super foda 3 com convidados especiais',
    'Palestra 2 super foda 3 com convidados especiais',
    'Palestra 3 super foda 3 com convidados especiais',
    'Palestra 4 super foda 3 com convidados especiais'
]

const User = () => {

    const { user, signOut } = useAuth();

    const [example, setExample] = useState("");
    const [isModalTokenOpen, setIsModalTokenOpen] = useState(false);

    const toggleModalTokenIsOpen = () => {
        setIsModalTokenOpen(!isModalTokenOpen);
    }

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
                <ContainerLectures>

                    <ListLectures>
                        <thead><tr><th><h4>Palestras Assistidas</h4></th></tr></thead>
                        <tbody>
                        {palestras.map((lecture, id) => (
                            <tr key={id}>
                                <td className={`lecture-id lecture-id-${id}`}>
                                    <span></span>
                                </td>
                                <td className={`lecture-info lecture-info-${id}`}>
                                    <p className='bold-info'>{lecture}</p>
                                </td>
                            </tr>
                        ))
                    }
                        </tbody>
                    </ListLectures>
                    <UserInfoLowerWrapper>
                        <span></span>
                            { user && !isModalTokenOpen &&
                                <Button onClick={toggleModalTokenIsOpen}>Registrar Presença</Button>
                            }

                            { user && isModalTokenOpen &&
                                <ModalTokenComponent toggleVisibility={toggleModalTokenIsOpen}/>
                            }
                    </UserInfoLowerWrapper>
                </ContainerLectures>
                <Button onClick={signOut}>Sair</Button>
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
    padding-bottom: 5rem;

    p {
        font-size: 22px;
        font-weight: 400;
    }
    .bold-info {
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 15px;
        font-weight: 600 !important;
    }
    .padrao-background {
        width: calc(100vw - 10px);
        height: 120rem;
        display: flex;
        position: absolute;
        top: -4.5rem;
        mask-image: linear-gradient(to top, transparent 0%, black 40%);
        background: url('./images/padrao_background_mobile.svg') no-repeat;
        background-position: top center;
        background-size: cover;
        z-index:-2;

        @media (min-width:1120px) {
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
    max-width: 1200px;

    padding: 2rem 45px 250px 45px;
    margin: 15rem 3rem 0 3rem;

    background: linear-gradient(180deg, #1B162C 50%, rgba(21, 16, 35, 0) 100%);

    @media (min-width:1120px) {
        margin: 8rem 3rem 0 3rem;
        padding-top: 0;
        padding: 2rem 45px 120px 45px;

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
        margin-bottom: 0px;
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
    max-width: 1050px;

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
        margin-bottom: 0px;
    }
`

const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-block: 20px;

    p {
        word-wrap: break-word;
    }

    @media (min-width:1120px) {
        margin-block: 0px;
    }

`

const ContainerLectures = styled.section`
    display: flex;
    width: 90%;
    max-width: 1200px;
    align-items: left;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 15rem;
    padding-inline: 45px;

    h4 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 5rem;
    }
    thead {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (min-width:1120px) {
            align-items: flex-start;
        }
    }
`

const ListLectures = styled.table`
    width: 100%;
    border-collapse: collapse;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 5rem;

    .lecture-id {
        vertical-align: top;
        text-align: right;
        padding: 0.8em 1.08em 0 0;
        span {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                height: 10px;
                width: 10px;
                background-color: #211936;
                border-radius: 50%;
                right: calc(-2rem - 5px);
                margin-top: auto;
                margin-bottom: auto;
                top: 0;
                bottom: 0;
            }
        }
    }
    .lecture-id-0 {
        vertical-align: top;
        text-align: right;
        padding: 0.8em 1.08em 0 0;
        span {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                height: 10px;
                width: 10px;
                background-color: #8744C2;
                border-radius: 50%;
                right: calc(-2rem - 5px);
                margin-top: auto;
                margin-bottom: auto;
                top: 0;
                bottom: 0;
            }
        }
    }

    .lecture-info {
        border-left: 2px solid #211936;
        padding: 0 1em 1.5em 1em;
        p {
            color: #FFFFFF7A;
        }
    }

    .lecture-info-0 {
        p {
            color: #FFF;
        }
    }
`