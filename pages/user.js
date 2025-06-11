import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import saphira from '../services/saphira';
import Meta from '../src/infra/Meta';

// components
import Button from '../src/components/Button';
import SecondaryButton from '../src/components/SecondaryButton';
import TokenModal from '../src/components/TokenModal';
import UserGiftCard from '../src/components/UserGiftCard';
import UserWatchedLecturesList from '../src/components/UserWatchedLecturesList';

// assets
import gifts from '../data/gifts';

const User = () => {

    const { user, disableAuth, signOut } = useAuth();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [studentInfo, setStudentInfo] = useState({});
    const [lectures, setLectures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addOrEditNUSP, setAddOrEditNUSP] = useState(false);

    const getStudentInfo = () => {
        if (!user) return;

        setIsLoading(true);

        saphira.getStudent()
            .then((res) => {
                setStudentInfo({ ...saphiraUserDataToFormFormat(res.data) });
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }

    const saphiraUserDataToFormFormat = (userData) => {
        const nameElements = getFullNameComponents(userData.name);

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
        saphira.listStudentPresences()
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

    const onSubmit = data => {
        if (data.usp_number === studentInfo.usp_number) {
            setAddOrEditNUSP(false);
            return;
        }

        setIsLoading(true);

        saphira.updateStudent(data.usp_number)
            .then((res) => {
                setStudentInfo({ ...studentInfo, usp_number: res.data.usp_number });
                setAddOrEditNUSP(false);
                setIsLoading(false);
            }).catch((err) => {
                console.error(err);
                setAddOrEditNUSP(false);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (disableAuth || !user) {
            Router.push('/');
        } else {
            getStudentInfo();
            getPresences();
        }
    }, [user]);

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
                    if (!document.cookie || !document.cookie.includes('ssi-student-auth')) {
                        window.location.href = "/"
                    }
                `
                }}
            />

            <Meta title='Meu Perfil | Semana de Sistemas de Informação' />

            {isLoading &&
                <Loading>
                    <img src='./loading.svg' alt='SSI 2024 - Loading' />
                </Loading>
            }

            {!isLoading && !disableAuth && user &&
                <>
                    <UserInfoSection>
                        <div>
                            <h2>Meu perfil</h2>

                            <UserInfoWrapper>
                                <PhotoTextWrapper>
                                    <img className='user-pic' src={user.photoUrl} alt="user picture" />
                                </PhotoTextWrapper>

                                <InfoUser>
                                    <div className='text-info'>
                                        {user.name ?
                                            <h4>{user.name}</h4>
                                        :
                                            <h4>{studentInfo.name}</h4>
                                        }
                                        <div className='user-info'>
                                            <p>Email: {user.email}</p>
                                        </div>
                                    </div>
                                    <div className='btn-wrapper'>
                                        <SecondaryButton onClick={signOut}>Sair</SecondaryButton>
                                    </div>
                                </InfoUser>

                                <div className="section-info">
                                    <p>Código SSI:</p>
                                    <div className='unique-code'>
                                        <h6>{studentInfo.code}</h6>
                                    </div>

                                    <p>Número USP:</p>
                                    {addOrEditNUSP ?
                                        <>
                                            <div className='number-usp'>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <InputBox>
                                                        <div className='form-input'>
                                                            <input 
                                                                id='usp_number'
                                                                type='number'
                                                                placeholder='Digite aqui...'
                                                                className={`${errors.usp_number && 'error-border'}`}
                                                                {...register("usp_number", {required: true, minLength: 5, maxLength: 10 })} 
                                                            />
                                                        </div>
                                                        {errors.usp_number && <ErrorMessage>Número USP inválido</ErrorMessage>}
                                                    </InputBox>
                                                    <Button className='contained-width-btn'>Salvar</Button>
                                                </form>
                                            </div>
                                        </>
                                    :
                                        <>
                                            {studentInfo.usp_number ?
                                                <Button className='contained-width-btn defined-nusp' onClick={() => { setAddOrEditNUSP(true) }}>
                                                    {studentInfo.usp_number}
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 18.9998V14.7498L14.625 0.174805L18.8 4.4498L4.25 18.9998H0ZM14.6 5.7998L16 4.39981L14.6 2.9998L13.2 4.39981L14.6 5.7998Z" fill="white"/>
                                                    </svg>
                                                </Button>
                                            :
                                                <div className='number-usp'>
                                                    <SecondaryButton onClick={() => { setAddOrEditNUSP(true) }}>
                                                        Adicionar Número USP
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                            <path d="M19.5 12.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.99805H13.5V10.998H19.5V12.998Z" fill="white"/>
                                                        </svg>
                                                    </SecondaryButton>
                                                </div>
                                            }
                                        </>
                                    }
                                </div>
                            </UserInfoWrapper>
                        </div>
                    </UserInfoSection>

                    <UserWatchedLecturesListSection>
                        <div className='lectures-info-wrapper'>
                            <h5>Palestras assistidas</h5>

                            <div className="statusPres">
                                <div className='display-pres b0 '>
                                    <p>Total de registros</p>
                                    <h4>{lectures.length}</h4>
                                </div>
                                <div className='display-pres b1'>
                                    <p>Registros presenciais</p>
                                    <h4>{presentialLecturesCount()}</h4>
                                </div>
                            </div>
                            
                            <TokenModal  onSuccess={getPresences} />

                            <UserWatchedLecturesList lectures={lectures} />
                        </div>
                    </UserWatchedLecturesListSection>


                    <GiftsProgressSection id='meus-brindes'>
                        <h5>Progresso dos brindes</h5>

                        <div className='user-gifts-wrapper'>
                            {Object.entries(gifts).map(([key, gift]) => {
                                return (
                                    <UserGiftCard 
                                        key={key}
                                        index={key}
                                        gift={gift}
                                        totalPres={lectures.length}
                                        presentialPres={presentialLecturesCount()}
                                    />
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

const UserInfoSection = styled.section`
    padding-block: 1.5rem;
    border-bottom: 1px solid var(--background-neutrals-secondary);

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem 2rem;
        gap: 3.5rem;
    }
`

const UserInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: var(--background-neutrals-primary-800);
    padding: 1rem;
    gap: 1rem;

    @media (min-width:1021px) {
        width: 100%;
        gap: 3rem;
        justify-content: space-between;
        flex-direction: row;
        padding: 2rem 7rem;
    }

    .section-info {
        width: 100%;
        min-width: 16rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5rem;

        p {
            font: 700 0.875rem/1.5rem 'AT Aero Bold';
        }

        button {
            padding-inline: 0.75rem;
        }

        .contained-width-btn {
            width: fit-content;
        }

        .defined-nusp {
            font: 700 1rem/1.5rem 'AT Aero Bold';

            @media (min-width:801px) {
                font: 700 1.5rem/2rem 'AT Aero Bold';
            }
        }

        @media (min-width:1021px) {
            width: unset;
        }
    }
    
    .unique-code {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.25rem;
        background-color: var(--brand-primary);
    }
    
    .number-usp {
        display: flex;
        gap: 0.5rem;
        width: 100%;

        form {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            width: 100%;

            @media (min-width:801px) {
                max-width: 16rem;
            }
        }
        
        input {
            width: 100%;
        }

        @media (min-width:1021px) {
            max-width: 16rem;
        }
    }
`

const ErrorMessage = styled.span`
    color: var(--color-invalid);
    text-decoration: underline;
    position: absolute;
    bottom: -1.1rem;
`

const InputBox = styled.div`
    --color-invalid: #F24822;
    --color-valid: #14AE5C;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    .form-input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: var(--background-neutrals-primary-50);
        padding: 0.5rem;
        margin-left: -4px;

        border: 2px solid white;
        background: transparent;
        background-clip: padding-box;
        color: white;

        &:has(input[type=number]:focus):not(:has(.error-border)) {
            border-color: var(--brand-primary);
        }

        &:has(.error-border) {
            border-color: var(--color-invalid);
        }

        input[type=number] {
            width: 95%;
            border: none;
            height: fit-content;
            background-color: transparent;
            color: white;
            font: 400 1rem/1.5rem 'AT Aero';
        }

        ::placeholder {
            color: white;
            font: 400 1rem/1.5rem 'AT Aero';
        }

        ::-ms-input-placeholder {
            color: white;
            font: 400 1rem/1.5rem 'AT Aero';
        }
    }

    /* Remove setas do input number em navegadores */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Remove setas do input number no Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    span {
        font: 400 0.875rem/1rem 'AT Aero Bold';
        color: var(--color-invalid);
    }
`

const PhotoTextWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width:520px) {
        max-width: 9.375rem;
    }

    @media (min-width:1021px) {
        gap: 2rem;
        flex-direction: row;
    }
`
const InfoUser = styled.div`
    width: 100%;
    
    h6 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .user-info {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width:1021px) {
        button {
            width: fit-content;
        }
    }
`

const UserWatchedLecturesListSection = styled.section`
    padding-block: 2rem;
    border-bottom: 1px solid var(--background-neutrals-secondary);

    .lectures-info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

		.statusPres {
			width: 100%;
			display: flex;
            flex-direction: column;
			gap: 1rem;

			.display-pres {
				width: 100%;
				display: flex;
                flex-direction: column;
				padding: 0.75rem;
                gap: 0.5rem;

				span {
					font: 700 2rem/2.5rem 'AT Aero Bold';
				}

				p {
					text-align: left;
					font: 400 1rem/1.5rem 'AT Aero Bold';
				}
			}

			.b0 {
				background-color: var(--brand-primary);
				
				p, h4 {
					color: white;
				}
			}

			.b1 {
				background-color: white;

				p, h4 {
					color: var(--brand-primary);
				}
			}

		}

        button {
            width: fit-content;
        }
    }

    @media (min-width:520px) {

        .lectures-info-wrapper .statusPres {
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .b0, .b1 {
                max-width: 18.5rem;
            }
        }
    }

    @media (min-width:1021px) {
        .lectures-info-wrapper {
            gap: 2rem;

            h4 {
                width: 100%;
                text-align: left;
            }
        }
    }
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
        padding-inline: 1rem;

        @media (min-width:800px) {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            padding-inline: 0;
        }
    }
`
