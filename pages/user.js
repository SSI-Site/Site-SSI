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

const User = () => {
    
    // Array de palestras-exemplo para permitir o desenvolvimento do front
    const lectures = [
        'Palestra muito foda 1',
        'Palestra muito foda 2',
        'Palestra muito foda 3',
    ];

    const { user, signOut } = useAuth();
    // const { user } = false; // para deploy sem login

    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    // const [lectures, setLectures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showList, setShowList] = useState(false);

    const checkUserRegister = () => {
        if (!user) return;

        setIsLoading(true);

        saphira.getUser(user.email)
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
        const documentType = `${userData.document}`.length >= 11 ? "cpf" : "nusp";
        const birthDateElements = userData.data_nascimento.split('-');

        const data = {
            name: nameElements.name,
            last_name: nameElements.lastName,
            birth_date: `${birthDateElements[2]}/${birthDateElements[1]}/${birthDateElements[0]}`,
            documentType: documentType,
            accepted_terms: true,
            is_in_internship: userData.em_estagio,
            accepted_recieve_emails: userData.aceita_receber_email,
            nusp_value: documentType === "nusp" ? userData.document : "",
            cpf_value: documentType === "cpf" ? userData.document : "",
            gender: checkIfValueIsASelectOption(selectOptions.gender, userData.genero) ? userData.genero : "outro",
            custom_gender: !checkIfValueIsASelectOption(selectOptions.gender, userData.genero) ? userData.genero : "",
            ethnicity: checkIfValueIsASelectOption(selectOptions.ethnicity, userData.etnia) ? userData.etnia : "outro",
            custom_ethnicity: !checkIfValueIsASelectOption(selectOptions.ethnicity, userData.etnia) ? userData.etnia : "",
            know_about: checkIfValueIsASelectOption(selectOptions.knowAbout, userData.como_conheceu) ? userData.como_conheceu : "outro",
            custom_know_about: !checkIfValueIsASelectOption(selectOptions.knowAbout, userData.como_conheceu) ? userData.como_conheceu : "",
            course: checkIfValueIsASelectOption(selectOptions.course, userData.curso) ? userData.curso : "outro",
            custom_course: !checkIfValueIsASelectOption(selectOptions.course, userData.curso) ? userData.curso : "",
            graduation_period: userData.periodo_curso
        }

        return data;
    }

    const checkIfValueIsASelectOption = (options, target) => {
        let isASelectOption = false;
        options.forEach(element => {
            if (element.value === target) isASelectOption = true;
        });

        return isASelectOption;
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
        saphira.listPresences(user.email)
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
        // Object.entries(lectures).forEach(([key, lecture]) => {
        //     if (lecture.online) count++;
        // });
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
        // setTimeout(() => {
        //     const hash = asPath.split('#')[1];
        //     if (hash == 'meus-brindes') {
        //         const giftsSection = document.getElementById(hash);
        //         giftsSection.scrollIntoView();
        //         scrollToMyRef(hash);
        //     }
        // }, 1000);
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

            <Meta title='SSI 2023 | Seu Perfil' />

            {isLoading &&
                <Loading>
                    <img src='./loading.svg' alt='SSI 2023 - Loading' />
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

            {!isLoading && !isEditing && user && /*isUserRegistered &&*/
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
                                        <p>CPF: {userInfo.cpf_value}</p>
                                    </div>
                                </div>
                            </PhotoTextWrapper>
                            <div className='btn-wrapper'>
                                <Button onClick={() => setIsEditing(true)}>Editar perfil</Button>
                                <ButtonSecondary onClick={signOut}>Sair</ButtonSecondary>
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
                                                    {lecture} - {lecture.online ? "Online" : "Presencial"}
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
                                            <th rowspan="2">Brinde</th>
                                            <th colspan="2">Palestras</th>
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
                                                            <img src={CheckBox} alt='check box'/>
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

const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 5rem;

    #meus-brindes { // apagar este teste
        height: 150px;
    }

    p {
        font-size: 22px;
        font-weight: 400;
    }

    .bold-info {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 15px;
        font-weight: 600 !important;
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
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
            }
        }
    }

    @media (min-width:560px) {
        .text-info h6 {
            font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
        }
    }

    @media (min-width:1021px) {
        gap: 2rem;
        flex-direction: row;

        .text-info {
            align-items: flex-start;

            h6 {
                text-align: left;
                font: 400 2rem/2.5rem 'Space_Mono_Bold';
            }

            .user-info {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
    
                p {
                    font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
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

const ButtonSecondary = styled.button`
    --padding: 0.75rem 1.5rem;
    --transition-duration: 500ms;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.75rem;
    padding: var(--padding);
    border-radius: 9px;
    border: 3px solid var(--color-neutral-50);
    background-color: transparent;
    transition: 500ms;
    cursor: pointer;

    &:hover {
        background-color: var(--color-neutral-50);
        color: var(--color-neutral-900);
    }

    &:active {
        background-color: var(--color-neutral-100);
        border-color: var(--color-neutral-100);
    }
        
    @media (min-width:560px) {
        height: 3rem;
    }
`

const UserInfoLowerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1050px;

    @media (min-width:1021px) {
        flex-direction: row;
        justify-content: space-between;
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
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
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
                    font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
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
        font-family: 'Space_Mono_Bold';
        font-weight: 400;
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
                font: 400 0.875rem/1.5rem 'Space_Mono_Bold';
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
                    font: 400 1rem/1.25rem 'Space_Mono_Bold';
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
    font: 400 1rem/1.25rem 'Space_Mono_Bold';

    thead {
        background-color:  var(--color-neutral-700);
        font: 400 0.95rem/1.5rem 'Space_Mono_Bold';
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
        font: 400 1.25rem/1.5rem 'Space_Mono_Bold';

        thead {
            font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
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