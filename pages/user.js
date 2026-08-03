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
import GiftCard from '../src/components/features/user/GiftCard';

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
    const [userGifts, setUsersGifts] = useState([]);
    const minGiftPresences = Math.min(...Object.values(gifts).map(gift => gift.minPresence));
    const maxGiftPresences = Math.max(...Object.values(gifts).map(gift => gift.minPresence));
    const medal = { completed: medalCompleted, incomplete: medalIncomplete, collected: medalCollected}
    
    // Lista de todos os brindes com dois novos campos: completed e collected, que indicam a situação do usuário em relação a cada brinde
    const giftsWithStatus = Object.values(gifts).map((gift) => {
        const userGift = userGifts.find((userGift) => userGift.gift.name === gift.name);
        return {
            ...gift,
            completed: userGift ? true : false,
            collected: userGift ? userGift.received : false
        }
    })

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

    const presentialLecturesCount = () => {
        var count = 0;
        for (const lecture of lectures) {
            if (!lecture.online) count++;
        }
        return count;
    }

    useEffect(() => {
        // if (disableAuth || !user) {
        //     Router.push('/');
        // } else {
            getStudentInfo();
            getPresences();
            getStudentGifts();
        // }
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
                        <UserWatchedLecturesListContainer>
                            <PresenceStatus>
                                <div className='status-header'>
                                    <h5>Participação Total</h5>
                                </div>

                                <div className='status-content'>
                                    <div className='status-display-main'>
                                        <h2>{lectures.length}</h2>
                                        <label>Presenças</label>
                                    </div>
                                    <div className='status-display'>
                                        <h2>{userGifts.length}</h2>
                                        <label>Brindes Conquistados</label>
                                    </div>

                                    <div className='status-display'>
                                        <h2>{userGifts.filter(item => item.received == true).length}</h2>
                                        <label>Brindes Resgatados</label>
                                    </div>
                                </div>
                            </PresenceStatus>
                                
                            
                            <div className='lectures-list-wrapper'>
                                <h5>Minhas Presenças</h5>
                                <UserWatchedLecturesList lectures={lectures} />                            
                            </div>
                        </UserWatchedLecturesListContainer>
                    </UserWatchedLecturesListSection>

                    <UserProgressSection>
                        <UserProgressContainer>
                            <h5>Meus Brindes</h5>

                            <div className='gifts-progress-wrapper'>
                                <GiftCardWrapper className='left'>
                                    {giftsWithStatus.map((gift, index) => (
                                        index % 2 === 0 && (
                                            <GiftCard key={index} gift={gift} presenceCount={presentialLecturesCount()} />
                                        )
                                    ))}
                                </GiftCardWrapper>
                                
                                <GiftProgressBar>
                                    {giftsWithStatus.map((gift, index) => (
                                        <img 
                                        key={index}
                                        className='medal'
                                        src={gift.collected ? medal.collected : (gift.completed ? medal.completed : medal.incomplete)}
                                        />
                                    ))}

                                    <div className='progress-bar'>
                                        <div className='progress-fill' style={{ height: `${Math.max(0, Math.min(100, (giftsWithStatus.filter(gift => gift.completed === true).length - 1) / (giftsWithStatus.length - 1) * 100))}%` }}>
                                            <div className='progress-collected' style={{ height: `${Math.max(0, Math.min(100, (giftsWithStatus.filter(gift => gift.collected === true).length - 1) / (giftsWithStatus.filter(gift => gift.completed === true).length - 1) * 100))}%` }}>
                                                {/* Sim, a barra de progresso são só um monte de divs vazias dentro uma da outra. Agora toma esse caractere invisível: */} &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </GiftProgressBar>

                                <GiftCardWrapper className='right'>
                                    {giftsWithStatus.map((gift, index) => (
                                        index % 2 === 1 && (
                                            <GiftCard key={index} gift={gift} presenceCount={presentialLecturesCount()} />
                                        )
                                    ))}
                                </GiftCardWrapper>
                            </div>
                            
                            <img src={coisinho2} className='bg-decoration coisinho2' style={{ top: 0, right: 0}} />
                            <img src={coisinho1} className='bg-decoration coisinho1' style={{ top: '24rem', left: 0}} />
                            <img src={coisinho1} className='bg-decoration coisinho1' style={{ top: '36rem', left: 0}} />
                            <img src={coisinho1} className='bg-decoration coisinho1' style={{ bottom: 0, right: 0}} />
                        </UserProgressContainer>
                    </UserProgressSection>
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
    
        @media (prefers-color-scheme: light) {
            background: var(--text-gradient-primary-light); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`

const UserWatchedLecturesListContainer = styled.section`
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0;
    gap: 2.5rem;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        gap: 1rem;
    }

    .lectures-list-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
const PresenceStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 1rem;
    overflow: hidden;

    background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25); /* era 2px e 4px para rem */
    backdrop-filter: blur(6px);

    @media (min-width: 1024px) {
        min-height: 100%;
        align-self: stretch;
        max-width: 20rem;
    }

    .status-header {
        width: 100%;
        padding: 0.75rem 1rem;
        background: linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%);

        @media (min-width: 1024px) {
            h5 {
                font-size: 1.25rem;
                line-height: 1.75rem;
            }
        }
    }

    .status-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1rem;
        gap: 0.5rem;
        
        label {
            font-size: 0.75rem;
        }

        @media (min-width: 1024px) {
            h2 {
                font-size: 2.25rem;
                line-height: 3.25rem;
            }

            label {
                font-size: 1rem;
            }
        }

        .status-display-main {
            width: 100%;
            padding: 1rem;
            border-radius: 1rem;
            color: var(--content-neutrals-inverse);
            background: linear-gradient(90deg, var(--background-neutrals-inverse) 0%, var(--brand-primary-light) 100%);
        }

        .status-display {
            width: 100%;
            padding: 1rem;
            border-radius: 1rem;
            color: var(--content-neutrals-primary);
            background: color-mix(in srgb, var(--background-neutrals-primary) 50%, transparent);
        }
    }
`

const UserProgressSection = styled.section`
    width: 100%;
    justify-content: center;
    margin: 4rem 0;
`

const UserProgressContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    .bg-decoration {
        display: none;
        position: absolute;
        z-index: -1;

        @media (min-width: 1024px) {
            display: block;

            &.coisinho1 {
                height: 12rem;
            }

            &.coisinho2 {
                height: 6rem;
            }
        }
    }

    .gifts-progress-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`
const GiftProgressBar = styled.div`
    position: relative;
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2.5rem 0;

    @media (min-width: 1024px) {
        margin: 3.25rem 2rem;
    }
    
    .progress-bar {
        position: absolute;
        top: 2.5rem;
        left: calc(50% - 0.4rem);
        width: 0.8rem;
        height: calc(100% - 5rem);
        border-radius: 10rem;
        background: var(--background-neutrals-tertiary);
        overflow: hidden;
    }
    
    .progress-fill {
        background: var(--brand-primary);
        border-radius: 10rem;
    }

    .progress-collected {
        background: var(--background-neutrals-inverse);
        border-radius: 10rem;
    }

    .medal {
        height: 5rem;
        width: 5rem;
        z-index: 1;
    }
`

const GiftCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    
    &.right {
        margin-top: 9rem;

        @media (min-width: 1024px) {
            margin-top: 10rem;
        }
    };
`