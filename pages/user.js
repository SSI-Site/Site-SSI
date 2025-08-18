import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Image from 'next/image';

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
    const [userGifts, setUsersGifts] = useState([])
  
    const getStudentInfo = async() => {
        if (!user) return;

        setIsLoading(true);

        try{
            const { data } = await saphira.getStudent()
            if (data) setStudentInfo({ ...saphiraUserDataToFormFormat(data) });
            
        }
        catch(err){
            console.log("Houve um erro GRAVE no usuário", err)
        }
        finally{
            setIsLoading(false)
        }
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

    const getStudentGifts = async() => {
        try{
            const { data } = await saphira.getStudentGifts()
            if (data) setUsersGifts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const getAvailableGiftCount = () => {
        return Object.values(gifts).filter(gift => lectures.length >= gift.minPresence).length
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

    useEffect(() => {
        if (disableAuth || !user) {
            Router.push('/');
        } else {
            getStudentInfo();
            getPresences();
            getStudentGifts();
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
        {
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    if (!document.cookie || !document.cookie.includes('ssi-student-auth')) {
                        window.location.href = "/"
                    }
                `
                }}
            />
        }

            <Meta title='Meu Perfil | Semana de Sistemas de Informação 2025' />

            {isLoading &&
                <Loading>
                    <Image 
                    src='./loading.svg' 
                    width = {500}
                    height = {500}
                    alt='SSI 2025 - Loading' />
                </Loading>
            }

            {!isLoading && !disableAuth && user &&
                <>
                    <UserInfoSection>
                        <div>
                            <h2>Meu perfil</h2>

                            <UserInfoWrapper>
                                <PhotoTextWrapper>
                                    <Image 
                                    className='user-pic' 
                                    width = {500}
                                    height = {500}
                                    src={user.photoUrl} alt="user picture" />
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
                                </div>
                            </UserInfoWrapper>
                        </div>
                    </UserInfoSection>

                    <UserWatchedLecturesListSection>
                        <div className='lectures-info-wrapper'>
                            <h5>Palestras assistidas</h5>
                            <p>Filtre por dia:</p>
                            <div className='info-content'>
                                <UserWatchedLecturesList lectures={lectures} />

                                <div className="statusPres">
                                    <div className='display-pres b0 '>
                                        <p>Total de registros</p>
                                        <h4>{lectures.length}</h4>
                                    </div>
                                    <div className='display-pres b1'>
                                        <p>Brindes completados:</p>
                                        <h4>{getAvailableGiftCount()}</h4>
                                    </div>

                                    <div className='display-pres b1'>
                                        <p>Brindes resgatados:</p>
                                        <h4>{userGifts.length}</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </UserWatchedLecturesListSection>

                    {/*
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
                    */}
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
    padding: 1.5rem;
    max-width: 1328px;
    width: 100%;
    margin: 0 auto;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media (min-width:1024px) {
        padding: 2rem 1.5rem;
        gap: 3.5rem;
        border-inline: 1px solid var(--outline-neutrals-secondary);
    }
`

const UserInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: var(--background-neutrals-secondary);
    padding: 1rem;
    gap: 1.25rem;

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
        flex-direction: row;
        align-items: center;
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

    @media (min-width:801px) {
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
        margin-bottom: 1.5rem;
    }

    @media (min-width:1021px) {
        button {
            width: fit-content;
        }
    }
`

const UserWatchedLecturesListSection = styled.section`
    //border-block: 1px solid var(--outline-neutrals-secondary);
    border-top: 1px solid var(--outline-neutrals-secondary);

    .lectures-info-wrapper {
        padding-block:1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        width: 100%;

		.statusPres {
			width: 100%;
			display: flex;
            flex-direction: column;
			gap: 1rem;
            background-color: var(--background-neutrals-secondary);
            margin-block: 1.5rem;
            padding: 1.25rem;

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
					color: var(--content-neutrals-primary);
				}
			}

			.b1 {
				background-color: var(--background-neutrals-inverse);

				p, h4 {
					color: var(--content-neutrals-inverse);
				}
			}

		}

        button {
            width: fit-content;
        }
    }

    @media (min-width:520px) {

        .lectures-info-wrapper {
            align-items: center;
            justify-content: flex-start;

            .b0, .b1 {
                max-width: 18.5rem;
            }
        }
    }

    @media (min-width:801px) {
       
        .lectures-info-wrapper {
            gap: 2rem;
            max-width: 1328px;
            padding: 2rem 1.5rem;
            border-inline: 1px solid var(--outline-neutrals-secondary);
            width: 100%;

            h4, p {
                width: 100%;
                text-align: left;
            }

            .info-content{
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                width: 100%;
                
            }

            .statusPres{
                width: fit-content;
                margin-block: unset;
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
