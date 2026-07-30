import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Image from 'next/image';

import useAuth from '../hooks/useAuth';
import saphira from '../services/saphira';
import Meta from '../src/infra/seo/Meta';

// components
import Button from '../src/components/ui/Button';
import SecondaryButton from '../src/components/ui/SecondaryButton';
import UserGiftCard from '../src/components/features/gifts/UserGiftCard';
import UserWatchedLecturesList from '../src/components/features/user/UserWatchedLecturesList';
import QRCodeModal from '../src/components/features/user/QRCodeModal';

// assets
import gifts from '../data/gifts';
import { eventDetails } from '../data/eventDetails';
import coisinho1 from '../public/images/user/coisinho1.svg';
import coisinho2 from '../public/images/user/coisinho4.svg';
import qrcodeIcon from '../public/images/user/qrcode-icon.svg';

import presenteIcon from '../public/images/user/dark/presente-icon.svg';
import userAvatar from '../public/images/user/dark/user-avatar.png';
import medalCompleted from '../public/images/user/dark/medal/completado.png';
import medalIncomplete from '../public/images/user/dark/medal/incompleto.png';
import medalCollected from '../public/images/user/dark/medal/resgatado.png';

import presenteIcon_light from '../public/images/user/light/presente-icon.svg';
import userAvatar_light from '../public/images/user/light/user-avatar.png';
import medalCompleted_light from '../public/images/user/light/medal/completado.png';
import medalIncomplete_light from '../public/images/user/light/medal/incompleto.png';
import medalCollected_light from '../public/images/user/light/medal/resgatado.png';

const User = () => {

    const { user, disableAuth, signOut } = useAuth();

    const [isOpen, setIsOpen] = useState(false);
    const [showCodeModal, setShowCodeModal] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [studentInfo, setStudentInfo] = useState({});
    const [lectures, setLectures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userGifts, setUsersGifts] = useState([])

    /*
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

    const getPresences = () => {
        saphira.listStudentPresences()
            .then((res) => {
                setLectures([...res.data]);
            })
            .catch(() => {
                setLectures([]);
            })
    }
    */
  
    const getStudentInfo = async() => {
        if (!user) return;

        setIsLoading(true);

        try{
            const data = await saphira.getStudent()
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
            const data = await saphira.getStudentGifts()
            if (data) setUsersGifts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const getPresences = () => {
        saphira.listStudentPresences()
            .then((res) => {
                setLectures([...res]);
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

    const handleShowCodeModal = () => {
        setIsOpen(false);
        setShowCodeModal(true);
    }

    useEffect(() => {
        if (showCodeModal) {
            // Calcula a largura da barra de rolagem
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Adiciona o padding-right para compensar a largura da barra de rolagem
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [showCodeModal]);

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

        {/* QR Code */}
        {showCodeModal &&
        <QRCodeModal
            code={studentInfo.code}
            onClose={() => setShowCodeModal(false)}
            show={showCodeModal}
        />
        }
                    
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

            <Meta title={`Meu Perfil | Semana de Sistemas de Informação ${eventDetails.year}`} />

            {isLoading &&
                <Loading>
                    <Image 
                    src='./images/ui/loading.svg' 
                    width = {500}
                    height = {500}
                    alt={`SSI ${eventDetails.year} - Loading`} />
                </Loading>
            }

            {!isLoading && !disableAuth && user &&
                <>
                    <UserInfoSection>
                        <UserInfoContainer>
                            <UserInfoWrapper>
                                <UserInfo>
                                    <PhotoTextWrapper>
                                        <Image 
                                            className='user-pic'
                                            width={640}
                                            height={640}
                                            src={userAvatar} alt="user picture" 
                                        />

                                        <UserText>
                                            {user.name ?
                                                <h4>{user.name}</h4>
                                            :
                                                <h4>{studentInfo.name}</h4>
                                            }
                                            <p>Email: {user.email}</p>
                                        
                                        </UserText>
                                    </PhotoTextWrapper>
                                    
                                    {/* Implementar botão para adicionar o Número USP */}
                                    <NuspContainer>
                                        <label>Adicionar Número USP</label>
                                        <label>+</label> {/* incluir ícone */}
                                    </NuspContainer>
                                    
                                </UserInfo>

                                <UserCode>
                                    <CodeText>
                                        <div className='user-code-label'>
                                            <label>Seu código SSI:</label>
                                            <h3 className='code-value'>{studentInfo.code}</h3>
                                        </div>

                                        <label className='user-code-instruction-mobile'>
                                            Use o QRcode para registrar suas presenças e resgatar brindes!
                                        </label>
                                        <label className='user-code-instruction-desktop'>
                                            Faça login pelo celular e use o QRcode para registrar suas presenças e resgatar brindes!
                                        </label>

                                    </CodeText>

                                    <button
                                    className='qrcode-button'
                                    onClick={handleShowCodeModal} 
                                    >
                                        <Image 
                                        width={64} height={64}
                                        src={qrcodeIcon} alt="QRCode" />
                                    </button>
                                </UserCode>
                            </UserInfoWrapper>

                            <SignOutButton onClick={signOut}>Sair</SignOutButton>
                        </UserInfoContainer>
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
                                        <h4>{userGifts.length}</h4>
                                    </div>

                                    <div className='display-pres b1'>
                                        <p>Brindes resgatados:</p>
                                        <h4>{userGifts.filter(item => item.receveid == true).length}</h4>
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
        height: auto;
        max-width: 250px;
    }
`

const UserInfoSection = styled.section`
    padding: 1rem;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width:1024px) {
        padding: 1.5rem;
        gap: 2rem;
    }
`

const UserInfoContainer = styled.div`
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: column;
    
    padding: 1.25rem 1rem;
    gap: 1.5rem;
    border-radius: 1rem;

    background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25); /* era 2px e 4px para rem */
    backdrop-filter: blur(6px);

    @media (min-width:1021px) {
        align-items: end;
        padding: 1.5rem;
        gap: 2rem;
    }
`
const UserInfoWrapper = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 2rem;
    }
`

const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 1024px) {
        gap: 1.5rem;
    }
`
const PhotoTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    @media (min-width: 1024px) {
        gap: 1.5rem;
    }

    .user-pic {
        width: 5rem;
        height: 5rem;
        border-radius: 0.75rem;
        border: 2px solid var(--brand-primary-light);
        object-fit: cover;

        @media (min-width: 1024px) {
            width: 8rem;
            height: 8rem;
        }
    }
`
const UserText = styled.div`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        width: 100%;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    
    @media (min-width: 1024px) {
        justify-content: start;
        gap: 0.75rem;

        h4 {
            line-height: 2.75rem;
        }
    }
`
const NuspContainer = styled.div`
    width: 100%;
    min-height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    gap: 1rem;

    border-radius: 0.75rem;
    background-color: var(--background-neutrals-secondary);
    border: 2px solid rgba(128, 128, 128, 0.25);

    @media (min-width: 1024px) {
        max-width: 18.5rem;
    }
`

const UserCode = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    .qrcode-button {
        padding: 0.45rem 0.55rem;
        border-radius: 0.75rem;
        border: 0;
        background-color: var(--brand-primary);

        @media (min-width: 1024px) {
            display: none;
        }
    }
`

const CodeText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    @media (min-width: 1024px) {
        justify-content: start;
    }

    .user-code-label {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;

        @media (min-width: 1024px) {
            gap: 1rem;

            label {
                font-size: 1.125rem;
            }
        }
    }

    .code-value {
        background: var(--text-gradient-primary-dark); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    
    .user-code-instruction-mobile {
        display: block;
        font-size: 0.75rem;
        color: var(--content-neutrals-tertiary);

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .user-code-instruction-desktop {
        width: 18.5rem;
        display: none;
        font-size: 0.95rem;
        line-height: 1.5rem;
        color: var(--content-neutrals-tertiary);

        @media (min-width: 1024px) {
            display: block;
        }
    }
`

const SignOutButton = styled(SecondaryButton)`
    width: 100%;

    @media (min-width: 1024px) {
        max-width: 18.5rem;
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
