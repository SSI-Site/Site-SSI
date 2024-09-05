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
import UserGiftCard from '../src/components/UserGiftCard';

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

        for (let i=1; i<fullNameParts.length; i++) {
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
                                <div className='text-info'>
                                    {user.name ?
                                        <h6>{user.name}</h6>
                                        :
                                        <h6>{userInfo.name}</h6>
                                    }
                                    <div className='user-info'>
                                        <p>Email: {user.email}</p>
                                        <div></div>
                                    </div>
                                </div>
                            </PhotoTextWrapper>
                            <div className='btn-wrapper'>
                                <Button onClick={() => setIsEditing(true)}>Editar perfil</Button>
                                <SecondaryButton onClick={signOut}>Sair</SecondaryButton>
                            </div>
                        </UserInfoWrapper>
                    </UserInfoSection>

                    <LecturesListSection>
                        <div className='lectures-info-wrapper'>
                            <h4>Registro de presenças</h4>
                            <TokenModal/>
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
                        <h5>Progresso dos brindes</h5>

                        <div className='user-gifts-wrapper'>
                            {Object.entries(gifts).map(([key, gift]) => {
                                return (
                                    <UserGiftCard key={key} index={key} gift={gift} totalPres={10} presentialPres={5}></UserGiftCard>
                                )
                            })}
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
    padding-block: 7.25rem 3.75rem;
    gap: 3.5rem;

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

    @media (min-width:560px) {
        .btn-wrapper {
            width: fit-content;
        }
    }

    @media (min-width:1021px) {
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        padding: 2rem 6.5rem;
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

    .text-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h6 {
            text-align: center;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
            }
        }
    }

    @media (min-width:560px) {
        .text-info h6 {
            font: 700 1.5rem/1.75rem 'AT Aero Bold';
        }
    }

    @media (min-width:1021px) {
        gap: 2rem;
        flex-direction: row;

        .text-info {
            align-items: flex-start;

            h6 {
                text-align: left;
                font: 700 2rem/2.5rem 'AT Aero Bold';
            }

            .user-info {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
    
                p {
                    font: 700 1.25rem/1.5rem 'AT Aero Bold';
                }

                > div {
                    width: 4px;
                    height: 28px;
                    background-color: var(--color-neutral-600);
                    margin-inline: 1rem;
                    border-radius: 2px;
                }
            }
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

const UserGiftsWrapper = styled.section`
	margin-top: 2rem;
	margin-bottom: 2rem;
	display: flex;
	padding-inline: 2rem;
	gap: 2rem;
	flex-direction: column;
`

const GiftsProgressSection = styled.section`
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .user-gifts-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        @media(min-width: 800px) {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
        }
    }
`
