import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';
import useAuth from '../hooks/useAuth';
import selectOptions from '../data/registerFormSelectOptions';

// components
import Button from '../src/components/Button';
import TokenModal from '../src/components/TokenModal';
import RegisterForm from '../src/components/RegisterForm';

// assets
import gifts from '../data/gifts';
import CheckBox from '../public/images/icons/lecture-check-box.svg';
import SecondaryButton from '../src/components/SecondaryButton';

const User = () => {

    // // Array de palestras-exemplo para permitir o desenvolvimento do front
    // const lectures = [
    //     'Palestra muito foda 1',
    //     'Palestra muito foda 2',
    //     'Palestra muito foda 3',
    // ]; // Para o exemplo -> COMENTAR

    const { user, signOut } = useAuth();
    // const { user } = false; // para deploy sem login

    const [isUserRegistered, setIsUserRegistered] = useState(true); // Lembrar de trocar pra false
    const [userInfo, setUserInfo] = useState({});
    const [lectures, setLectures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showList, setShowList] = useState(false);

    const checkUserRegister = () => {
        if (!user) return;
        // console.log("Usuário:", user);

        setIsLoading(true);

        saphira.getStudent()
            .then((res) => {
                setIsUserRegistered(true);
                setUserInfo({ ...saphiraUserDataToFormFormat(res.data) });
                setIsLoading(false);
            })
            .catch(() => {
                setIsUserRegistered(false);
                setIsLoading(false);
            });
    }

    const saphiraUserDataToFormFormat = (userData) => {
        const nameElements = getFullNameComponents(userData.full_name);
        console.log("nameElements: ", nameElements);

        const data = {
            name: nameElements.name,
            last_name: nameElements.lastName,
            usp_number: userData.usp_number,
            code: userData.code,
        }

        return data;
    }

    const getFullNameComponents = (fullName) => {
        const fullNameParts = fullName.split(" ");
        const name = fullNameParts[0];
        let lastName = "";

        for (let i = 1; i < fullNameParts.length; i++) {
            lastName += ` ${fullNameParts[i]}`;
        }

        return {
            name,
            lastName
        }
    }

    const getPresences = () => {
        saphira.listStudentPresences(user.email)
            .then((res) => {
                setLectures([...res.data]);
            })
            .catch(() => {
                setLectures([]);
            })
    }

    const presentialLecturesCount = () => {
        var count = 0;
        for (const lecture of lectures) {
            if (!lecture.online) count++;
        }
        return count;
    }

    useEffect(() => {
        // if (isUserRegistered) {
        //     getPresences();
        // }
    }, [isUserRegistered]);

    useEffect(() => {
        // checkUserRegister();
    }, [user]);

    useEffect(() => {
        // checkUserRegister();
    }, []);

    const { asPath } = useRouter('/user');

    useEffect(() => {
        setTimeout(() => {
            const hash = asPath.split('#')[1];
            if (hash == 'meus-brindes') {
                const giftsSection = document.getElementById(hash);
                giftsSection.scrollIntoView();
                scrollToMyRef(hash);
            }
        }, 1000);
    }, [asPath]);

    const scrollToMyRef = (id) => {
        setTimeout(function () {
            var ref = document.getElementById(id);
            ref.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 1000);
    };

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    if (!document.cookie || !document.cookie.includes('ssi-site-auth')) {
                        window.location.href = "/"
                    }
                `
                }}
            />

            <Meta title='SSI 2024 | Meu Perfil' />

            {isLoading &&
                <Loading>
                    <img src='./loading.svg' alt='SSI 2024 - Loading' />
                </Loading>
            }

            {/* {!isLoading && user && !isUserRegistered &&
                <FormContainer>
                    <RegisterForm />
                </FormContainer>
            } */}

            {isEditing &&
                <>
                    <FormContainer>
                        <RegisterForm
                            userInfo={userInfo}
                            isEditing={true}
                            cancelCallback={() => {
                                setIsEditing(false);
                                window.scrollTo(0, 0);
                            }} />
                    </FormContainer>
                </>
            }

            {!isLoading && !isEditing && user && isUserRegistered &&
                <>
                    <UserInfoSection>
                        <h3>Meu perfil</h3>

                        <UserInfoWrapper>
                            <PhotoTextWrapper>
                                <img className='user-pic' src={user.photoUrl} alt="user picture" />
                            </PhotoTextWrapper>
                            <InfoUser>
                                <div className='text-info'>
                                    {user.name ?
                                        <h6>{user.name}</h6>
                                        :
                                        <h6>{userInfo.name}</h6>
                                    }
                                    <div className='user-info'>
                                        <p>Email: {user.email}</p>
                                    </div>
                                </div>
                                <div className='btn-wrapper'>
                                    {/* <Button onClick={() => setIsEditing(true)}>Editar perfil</Button> */}
                                    <SecondaryButton onClick={signOut}>Sair</SecondaryButton>
                                </div>
                            </InfoUser>

                            <div className="section-info">
                                <h4>Código SSI</h4>
                                <div className='section-cod-ssi'>
                                    <Button>
                                        A24
                                    </Button>
                                </div>
                                <h4>Número USP:</h4>
                                <SecondaryButton onClick={() => { }} >Adicionar Número USP
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 48 48"
                                        fill="#fff"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >

                                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z" />
                                    </svg>
                                </SecondaryButton>
                            </div>
                        </UserInfoWrapper>
                    </UserInfoSection>

                    <LecturesListSection>
                        <div className='lectures-info-wrapper'>
                            <h4>Registro de presenças</h4>
                            <TokenModal />
                            <div className='lectures-count'>
                                <p>N<sup>o</sup> total de registros: <span>{lectures.length}</span></p>
                                <p>N<sup>o</sup> de registros presenciais: <span>{presentialLecturesCount()}</span></p>
                            </div>
                            <Button onClick={() => setShowList(!showList)}>
                                {showList ? "Ocultar registros" : "Exibir registros"}
                            </Button>
                            {showList &&
                                <LecturesList>
                                    <div className='lecture-list-container'>
                                        <ul>
                                            {lectures.length === 0 &&
                                                <p className="no-presences-message">Você ainda não tem nenhuma presença registrada...</p>
                                            }
                                            {lectures.map((lecture, key) =>
                                                <li key={key}>
                                                    {lecture.talk_title} - {lecture.online ? "Online" : "Presencial"}
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                </LecturesList>
                            }
                        </div>
                    </LecturesListSection>

                    <GiftsProgressSection id='meus-brindes'>
                        <div className='gifts-progress-wrapper'>
                            <h4>Painel de progresso dos brindes</h4>
                            <div className='progress-table'></div>
                        </div>
                        <div className='table-card'>
                            <div className='table-container'>
                                <ProgressTable>
                                    <thead>
                                        <tr>
                                            <th rowSpan="2">Brinde</th>
                                            <th colSpan="2">Palestras</th>
                                        </tr>
                                        <tr>
                                            <th>Totais</th>
                                            <th>Presenciais</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(gifts).map(([key, gift]) => {
                                            return (
                                                <tr key={key}>
                                                    <td className='column-1'>{gift.name}</td>
                                                    {lectures.length >= gift.totalPres && presentialLecturesCount() >= gift.presentialPres ?
                                                        <>
                                                            <td className='column-2'>
                                                                <img src={CheckBox} alt='check box' />
                                                            </td>
                                                            <td className='column-3'>
                                                                <img src={CheckBox} alt='check box' />
                                                            </td>
                                                        </>
                                                        :
                                                        <>
                                                            <td className='column-2'>{lectures.length}/{gift.totalPres}</td>
                                                            <td className='column-3'>{presentialLecturesCount()}/{gift.presentialPres}</td>
                                                        </>
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </ProgressTable>
                                <div className='available'>
                                    <img src={CheckBox} alt='check box' />
                                    <p>: brinde disponível para retirada</p>
                                </div>
                                <p>x/y: x registros de y necessários</p>
                            </div>
                        </div>
                    </GiftsProgressSection>
                </>
            }
        </>
    )
}

export default User;


const Loading = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;

    img {
        width: 50%;
        max-width: 250px;
    }
`

const FormContainer = styled.section`
    padding-block: 7.25rem 3.75rem;
    background: url('./images/background_imgs/background4_mobile.svg') fixed;
    background-size: cover;
    overflow-x: hidden;

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background4_desktop.svg');
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;
    }
`

const UserInfoSection = styled.section`
    display: flex;
    align-items: flex-start;
    padding-block: 1rem;
    gap: 2rem;

    @media (min-width:1021px) {
        padding-block: 6.75rem 3.5rem;
        gap: 3.5rem;
    }
`

const UserInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-neutral-800);
    border-radius: 1rem;
    padding: 2.25rem;
    gap: 1rem;

    .btn-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    @media (min-width:1021px) {
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        padding: 2rem 6.5rem;
    }

    .section-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
    }
    
    .section-cod-ssi {
        width: 4rem;
    }
`

const PhotoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    .user-pic {
        border-radius: 100%;
        min-width: 150px;
    }

    @media (min-width:560px) {
        .text-info h6 {
            font: 700 1.5rem/1.75rem 'AT Aero Bold';
        }
    }

    @media (min-width:1021px) {
        gap: 2rem;
        flex-direction: row;

        // .text-info {
        //     align-items: flex-start;

        //     h6 {
        //         text-align: left;
        //         font: 700 2rem/2.5rem 'AT Aero Bold';
        //     }

        //     .user-info {
        //         display: flex;
        //         flex-direction: row;
        //         gap: 0.5rem;
    
        //         p {
        //             font: 700 1.25rem/1.5rem 'AT Aero Bold';
        //         }

        //         > div {
        //             width: 4px;
        //             height: 28px;
        //             background-color: var(--color-neutral-600);
        //             margin-inline: 1rem;
        //             border-radius: 2px;
        //         }
        //     }
        // }

    }
`
const InfoUser = styled.div`
    width: 100%;
    
    h6{
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .user-info{
        font-size: 1rem;
        margin-bottom: 1rem;
    }

     @media (min-width:1021px) {
        margin-left: 1.5rem;

        .btn-wrapper{
            width: 100px;
        }
     }

    
`


const LecturesListSection = styled.section`

    .lectures-info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        h4 {
            text-align: center;
            margin-bottom: 1.25rem;
        }

        .lectures-count {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
                span {
                    font: inherit;
                    color: var(--color-primary-500);
                }
            }
        }

        button {
            width: fit-content;
        }
    }

    @media (min-width:1021px) {
        gap: 2.25rem;

        .lectures-info-wrapper {
            h4 {
                width: 100%;
                text-align: left;
            }

            .lectures-count {
                flex-direction: row;
                gap: 3.5rem;

                p {
                    font: 700 1.25rem/1.5rem 'AT Aero Bold';
                }
            }
        }
    }
`

const LecturesList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .lecture-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    span {
        font: inherit;
        color: var(--color-primary-500);
        font-family: 'AT Aero Bold';
        font-weight: 700;
    }

    ul {

        li {
            margin-bottom: 1rem;
        }
    }
`

const GiftsProgressSection = styled.section`
    padding-block: 3.75rem;
    overflow-x: hidden;

    .table-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 3rem 1rem 2.5rem 1rem;

        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        height: auto;
        width: 100vw;
        overflow: auto;  
        display: flex;
        scroll-snap-type: x mandatory;

        .table-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            p {
                font: 700 0.875rem/1.5rem 'AT Aero Bold';
            }

            .available {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                margin-block: 0.5rem 0.2rem;

                img {
                    width: 24px;
                }
            }
        }
    }

    @media (min-width:480px) {

        .table-card {
            align-items: center;
        }
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;

        h4 {
            margin-bottom: 3.5rem;
        }

        .table-card {
            width: 100%;
            padding: 4rem 6.5rem 3.5rem 6.5rem;
            background-color: var(--color-neutral-800);
            border-radius: 1rem;

            .table-container {
                p {        
                    font: 700 1rem/1.25rem 'AT Aero Bold';
                }
                
                .available {
                    margin-block: 1rem 0.4rem;
                }
            }
        }
    }
`

const ProgressTable = styled.table`
    border: 2px solid var(--color-neutral-600);
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 1rem;
    overflow: hidden;
    font: 700 1rem/1.25rem 'AT Aero Bold';

    thead {
        background-color:  var(--color-neutral-700);
        font: 700 0.95rem/1.5rem 'AT Aero Bold';
    }

    tbody {
        background-color:  var(--color-neutral-800);
    }

    th, td {
        border: 1.5px solid var(--color-neutral-600);
        vertical-align: middle;
        text-align: center;
    }

    th {
        padding: 0.5rem;
    }

    td {
        padding: 1rem;
    }

    .column-2, .column-3 {
        width: 9rem;
    }

    @media (min-width:1021px) {
        font: 700 1.25rem/1.5rem 'AT Aero Bold';

        thead {
            font: 700 1.25rem/1.5rem 'AT Aero Bold';
        }

        th, td {
            border: 2px solid var(--color-neutral-600);
        }

        th {
            padding: 1rem;
        }

        td {
            padding: 1.5rem;
        }

        .column-1 {
            width: 17rem;
        }

        .column-2, .column-3 {
            width: 23rem;
        }
    }
`