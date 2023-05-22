import styled from 'styled-components';
import { useRouter } from 'next/router';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg';
import InstagramLogo from '../../../public/images/social_media/InstagramLogo.svg';
import FacebookLogo from '../../../public/images/social_media/FacebookLogo.svg';
import LinktreeLogo from '../../../public/images/social_media/LinktreeLogo.svg';
import  Link  from 'next/link';

const Footer = () => {
    
    const router = useRouter();

    return (
        <>
            <FooterWrapper>
                <div className='ssi'>
                    <div onClick={() => router.push('/')} className="logo-box">
                        <img src={LogoPrincipal} alt="logo" />
                        <h6>
                            Semana de Sistemas de <br />Informação 2023
                        </h6>
                    </div>
                
                </div>
                <div className='redes'>
                    <div className='links'>
                        <h3 className='links_header'>
                            Links rápidos
                        </h3>
                        <div className='links-container'>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/schedule"><a>Programação</a></Link>
                            <Link href="/about"><a>Evento</a></Link>
                            <Link href="/partnerships"><a>Parcerias</a></Link>
                        </div>
                        <div className='links-container'>
                            <Link href="/co"><a>Comissão Organizadora</a></Link>
                            <Link href="https://ctfssi.intheshell.page"><a>CTF</a></Link>
                            <Link href="/hackssi"><a>HackSSI</a></Link>
                        </div>
                    </div>
                    <div className='logos'>
                        <h3 className='logos_header'>Redes sociais</h3>
                        <div className='logos_midia'>
                            <a href='https://www.instagram.com/semanadesi/' target="_blank" rel="noreferrer">
                                {/*<img src={InstagramLogo} alt="Instagram"></img>*/}
                                <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1447 0H31.051C37.8725 0 43.4149 5.2 43.4149 11.6V28.4C43.4149 31.4765 42.1123 34.427 39.7936 36.6024C37.4749 38.7779 34.3301 40 31.051 40H13.1447C6.3232 40 0.780762 34.8 0.780762 28.4V11.6C0.780762 8.52349 2.08338 5.57298 4.40207 3.39756C6.72075 1.22214 9.86555 0 13.1447 0ZM12.7183 4C10.683 4 8.73106 4.75857 7.29188 6.10883C5.8527 7.45909 5.04418 9.29044 5.04418 11.2V28.8C5.04418 32.78 8.47623 36 12.7183 36H31.4773C33.5127 36 35.4646 35.2414 36.9038 33.8912C38.343 32.5409 39.1515 30.7096 39.1515 28.8V11.2C39.1515 7.22 35.7194 4 31.4773 4H12.7183ZM33.2893 7C33.996 7 34.6738 7.26339 35.1735 7.73223C35.6732 8.20107 35.9539 8.83696 35.9539 9.5C35.9539 10.163 35.6732 10.7989 35.1735 11.2678C34.6738 11.7366 33.996 12 33.2893 12C32.5826 12 31.9048 11.7366 31.4051 11.2678C30.9054 10.7989 30.6247 10.163 30.6247 9.5C30.6247 8.83696 30.9054 8.20107 31.4051 7.73223C31.9048 7.26339 32.5826 7 33.2893 7ZM22.0978 10C24.9247 10 27.6357 11.0536 29.6346 12.9289C31.6334 14.8043 32.7564 17.3478 32.7564 20C32.7564 22.6522 31.6334 25.1957 29.6346 27.0711C27.6357 28.9464 24.9247 30 22.0978 30C19.271 30 16.56 28.9464 14.5611 27.0711C12.5622 25.1957 11.4393 22.6522 11.4393 20C11.4393 17.3478 12.5622 14.8043 14.5611 12.9289C16.56 11.0536 19.271 10 22.0978 10ZM22.0978 14C20.4017 14 18.7751 14.6321 17.5758 15.7574C16.3765 16.8826 15.7027 18.4087 15.7027 20C15.7027 21.5913 16.3765 23.1174 17.5758 24.2426C18.7751 25.3679 20.4017 26 22.0978 26C23.7939 26 25.4206 25.3679 26.6199 24.2426C27.8192 23.1174 28.493 21.5913 28.493 20C28.493 18.4087 27.8192 16.8826 26.6199 15.7574C25.4206 14.6321 23.7939 14 22.0978 14Z" fill="#63358D"/>
                                </svg>
                            </a>
                            <a href='https://linktr.ee/SemanaDeSI' target="_blank" rel="noreferrer">
                                {/*<img src={LinktreeLogo} alt="Linktree"></img>*/}
                                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 0.0624437C13.8152 0.114222 13.5207 0.286635 13.3457 0.445807C12.9575 0.798486 0.207795 22.6375 0.052003 23.2164C-0.153194 23.9791 0.267884 24.8986 0.980274 25.2435C1.35113 25.423 1.52847 25.4372 3.40629 25.4372H5.43214L5.43415 29.2498C5.43598 32.7401 5.45022 33.0934 5.60245 33.4285C5.81158 33.8889 6.32772 34.3478 6.77665 34.4724C6.9971 34.5336 8.85592 34.5684 11.9283 34.5687L16.735 34.5692C17.1438 34.5692 18.217 34.5692 18.217 33.0873V28.1635C18.217 23.9258 18.1973 23.1925 18.0756 22.9014C17.7919 22.2223 17.2931 21.8774 16.471 21.792L15.958 21.7387L17.9778 18.2053C19.8227 14.9781 20.0072 14.6892 20.1074 14.8721C20.1677 14.9822 21.0766 16.5722 22.1272 18.4055L24.0373 21.7387L23.5127 21.7923C22.8611 21.8588 22.3557 21.994 22 22.5C22 22.5 21.8241 22.7849 21.8241 22.9872C21.8241 24.0992 21.8241 28.1697 21.8241 28.1697C21.8241 28.1697 21.8241 32 21.8241 33.352C21.8241 34.5 23.1026 34.5235 23.1026 34.5235L27.9672 34.5494C31.2307 34.5668 32.9518 34.543 33.1964 34.4771C33.6616 34.3519 34.1799 33.8977 34.393 33.4285C34.5453 33.0934 34.5595 32.7401 34.5613 29.2498L34.5633 25.4372H36.6328C38.6813 25.4372 38.7064 25.4348 39.0961 25.2064C39.751 24.8227 40.1288 23.9568 39.9597 23.2277C39.8863 22.9113 27.1363 0.932453 26.8133 0.565528C26.3139 -0.00193691 25.2308 -0.160926 24.5373 0.231478C24.0695 0.496124 24.0534 0.520051 21.7778 4.32263C20.8075 5.9443 19.9849 7.23876 19.9501 7.19922C19.9153 7.15977 18.9955 5.63846 17.9062 3.81854C16.1131 0.822686 15.8887 0.487905 15.5344 0.280243C15.08 0.0139528 14.4782 -0.0714319 13.9999 0.0624437ZM17.6756 11.2319C17.3059 11.8428 11.2898 22.4032 11.1071 22.7624C10.8922 23.1846 10.8475 23.886 11.0083 24.3126C11.1398 24.6612 11.6233 25.1575 11.9815 25.3111C12.1772 25.3951 12.6423 25.4372 13.3741 25.4372H14.4729V28.1311V30.8251H11.8283H9.18376L9.15719 26.9668C9.15719 26.9668 9.13062 24.5 9.13062 23.1085C9.13062 21.9297 8 21.7387 8 21.7387H5.10028L9.73433 13.7938C12.2831 9.42415 14.4159 5.77207 14.4739 5.6781C14.566 5.52906 14.7882 5.85535 16.212 8.23013L17.8445 10.9529L17.6756 11.2319ZM30.211 13.7094L34.8948 21.7387L32 21.7844C32 21.7844 30.8649 21.7844 30.8649 23.1085C30.8649 24.5 30.8383 26.9668 30.8383 26.9668L30.8117 30.8251H28.1672H25.5226V28.1311V25.4372H26.6214C27.3531 25.4372 27.8183 25.3951 28.014 25.3111C28.3722 25.1575 28.8557 24.6612 28.9872 24.3126C29.1558 23.8654 29.1035 23.1859 28.8643 22.7174C28.7434 22.4805 27.1972 19.7593 25.4282 16.6704C23.6592 13.5815 22.2102 11.0109 22.2082 10.9581C22.2017 10.7818 25.3844 5.54377 25.4564 5.61244C25.4954 5.6497 27.6349 9.29329 30.211 13.7094Z" fill="#63358D"/>
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/SSIUSP' target="_blank" rel="noreferrer">
                                {/*<img src={FacebookLogo} alt="Facebook"></img>*/}
                                <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4197 0.750977C18.1509 0.750977 13.9779 1.93862 10.4286 4.16372C6.87916 6.38882 4.11275 9.55143 2.47914 13.2516C0.845533 16.9518 0.418107 21.0234 1.25091 24.9516C2.08372 28.8797 4.13935 32.4879 7.15786 35.3199C10.1764 38.1519 14.0222 40.0805 18.209 40.8619C22.3958 41.6432 26.7355 41.2422 30.6794 39.7095C34.6233 38.1769 37.9941 35.5814 40.3658 32.2513C42.7374 28.9212 44.0033 25.006 44.0033 21.001C43.9969 15.6322 41.7209 10.485 37.6746 6.68864C33.6283 2.89232 28.1421 0.756932 22.4197 0.750977ZM24.8179 36.5879V26.251H28.8148C29.4509 26.251 30.0609 26.0139 30.5106 25.592C30.9603 25.17 31.213 24.5977 31.213 24.001C31.213 23.4042 30.9603 22.8319 30.5106 22.41C30.0609 21.988 29.4509 21.751 28.8148 21.751H24.8179V18.001C24.8179 17.4042 25.0706 16.8319 25.5203 16.41C25.97 15.988 26.58 15.751 27.2161 15.751H30.4136C31.0497 15.751 31.6596 15.5139 32.1094 15.092C32.5591 14.67 32.8118 14.0977 32.8118 13.501C32.8118 12.9042 32.5591 12.3319 32.1094 11.91C31.6596 11.488 31.0497 11.251 30.4136 11.251H27.2161C25.308 11.251 23.478 11.9621 22.1288 13.228C20.7795 14.4939 20.0216 16.2108 20.0216 18.001V21.751H16.0246C15.3886 21.751 14.7786 21.988 14.3288 22.41C13.8791 22.8319 13.6264 23.4042 13.6264 24.001C13.6264 24.5977 13.8791 25.17 14.3288 25.592C14.7786 26.0139 15.3886 26.251 16.0246 26.251H20.0216V36.5879C15.8209 36.019 12.0059 33.9785 9.34419 30.877C6.68249 27.7755 5.3717 23.8432 5.67563 19.8715C5.97957 15.8998 7.87566 12.1835 10.9823 9.47059C14.089 6.75764 18.1756 5.24939 22.4197 5.24939C26.6639 5.24939 30.7505 6.75764 33.8571 9.47059C36.9638 12.1835 38.8599 15.8998 39.1638 19.8715C39.4677 23.8432 38.157 27.7755 35.4953 30.877C32.8335 33.9785 29.0185 36.019 24.8179 36.5879Z" fill="#63358D"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </FooterWrapper >
        </>
    )
}

export default Footer;


const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    text-align: center;
    padding-block: 3.5rem;

    background: var(--color-neutral-900);
    border-top: 8px solid var(--color-primary-800);

    h6 {
        margin-top: 2rem;
    }

    h3 {
        margin-top:3.5rem;
        font-size:1.24rem;
        text-align: center;
    }

    .ssi {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo-box {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
    }

    .logo-box:hover {
        cursor: pointer;
    }

    .ssi a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }

    .links {
        display:flex;
        flex-direction:column;
        justify-content: center;
        gap: 1rem;
    }

    .links-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;
        width: fit-content;
    }
    
    .links a {
        font-weight:400;
        white-space: nowrap;
    }

    .ssi img {
        width: 7.325rem;
        align-self: center;
       
    }

    .redes img {
        height: 4.5rem;
        margin: 0 1.06rem;
    }

    .logos_midia {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logos_midia svg {
        width:42.63px;
        height:40px;
        margin-left:4px;
        margin-right:4px;
    }

    .logos_midia a {
        height:3rem;
    }

    .logos_header {
        margin-top:2rem;
        white-space: nowrap;
    }

    .logos_midia svg path {
        transition: 0.3s all ease;
    }

    .logos_midia svg:hover {
        path{
            fill:var(--color-primary-700);
        }
    }

    .logos_midia svg:active {
        path{
            fill:var(--color-primary-600);
        }
    }

    .redes{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:480px) {}

    @media (min-width:600px) {}

    @media (min-width:960px) { /** mudar para horizontal */
        height:26.75rem;
        flex-direction: row;
        align-items: center;

        .ssi {
            height: 50%;
        }

        .ssi p {
            width:10rem; 
        }

        .logo-box {
            margin-left:5vw;
        }

        .ssi img {
            width: 7.3rem;
            height:8.25rem;
        }

        .redes {
            display:flex;
            flex-direction:row;
            align-items: flex-start;
            margin-left:10vw;
            padding-bottom:0px;
        }

        .redes img {
            height: 3rem;
            margin: 0 0.9rem;
        }

        .links {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            text-align:left;
            margin-left:0px;
            margin-bottom:0px;
        }

        .links_header {
            position:absolute;
            top:1.75rem;
            margin-left:0vw;
            margin-right:5vw;
        }

        .logos{
            margin-top:-5.6rem;
            margin-left:5vw;
            margin-right:1vw;
        }
    }

    @media (min-width:1230px) {
        .logos{
            margin-top:-6.3rem;
        }
    }

    @media (min-width:1400px) {

        .logo-box {
            margin-left:7.5vw;
        }

        .logos{
            margin-left:15.226vw;
            margin-right:7.778vw;
        }

        .logos a {
            margin-right:1vw;
        }

        .logos_header{
            margin-left:-2vw;
        }
    }

    @media (min-width:1600px) {
        /* width: calc(100vw - 10px);
        margin-left: calc( (1500px - 100vw - 10px) / 2 ); */
    }

    @media (min-width:2200px) {
        /* padding: 0 20rem; */
        /* 4k */
    }
`