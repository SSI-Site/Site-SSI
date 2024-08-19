import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

// assets
import LogoPrincipal from "../../../public/images/logos/logo_principal.svg";
import Coffee from "../../../public/images/icons/coffee.svg";
import Code from "../../../public/images/icons/sites.svg";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrapper>
      <FooterLogo>
        <MobileBackToTop
          tabIndex={0}
          aria-label="Voltar para o Topo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Voltar ao topo
          <svg
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z"
              fill="white"
            />

            <rect id="arrow" width="100" height="100%" />
          </svg>
        </MobileBackToTop>
        <div className="logo-container">
          <img
            src={LogoPrincipal}
            alt="Logo da Semana de Sistemas de Informação"
            className="logo-image"
          />
        </div>

        <p>
          Semana de
          <br />
          Sistemas de Informação
        </p>
      </FooterLogo>

      <FooterLinks>
        <ul>
          <li>
            <Link legacyBehavior href="/" passHref>
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/schedule" passHref>
              <a className={router.pathname == "/schedule" ? "active" : ""}>
                Programação
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about" passHref>
              <a className={router.pathname == "/about" ? "active" : ""}>
                Evento
              </a>
            </Link>
          </li>
          {/* <li>
                        <Link legacyBehavior href = "/partnership" passHref>
                            <a className = {router.pathname == '/partnership' ? 'active' : ''}>
                                Parcerias
                            </a>
                        </Link>
                    </li> */}
          <li>
            <Link legacyBehavior href="/co" passHref>
              <a className={router.pathname == "/co" ? "active" : ""}>
                Comissão Organizadora
              </a>
            </Link>
          </li>
        </ul>

        <FooterEnding>
          <p>Made with</p>
          <img src={Code} alt="Ícone Programação" />
          <p>and</p>
          <img src={Coffee} alt="Ícone Café" />
        </FooterEnding>
      </FooterLinks>

      <FooterLogos>
        <DesktopBackToTop
          tabIndex={0}
          aria-label="Voltar para o Topo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z"
              fill="white"
            />

            <rect width="100" height="100%" fill="none" />
          </svg>
        </DesktopBackToTop>

        <div className="logosWrapper">
          <a
            href="https://www.instagram.com/semanadesi/"
            target="_blank"
            aria-label="Instagram da Semana de Sistemas de Informação"
          >
            {/*Instagram Logo*/}
            <svg
              className="animation"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Instagram da Semana de Sistemas de Informação"
            >
              <mask
                id="mask0_76_1315"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="34"
                height="34"
              >
                <path
                  d="M21.711 3.33213C22.9273 3.32746 24.1435 3.33969 25.3594 3.3688L25.6827 3.38046C26.0446 3.39339 26.4017 3.40944 26.8285 3.42863C26.8421 3.42923 26.8557 3.42985 26.8694 3.43046C28.6427 3.5138 29.8527 3.7938 30.9144 4.20546C32.0144 4.6288 32.941 5.20213 33.8677 6.1288C34.715 6.96147 35.3707 7.96871 35.7894 9.08046C36.201 10.1421 36.481 11.3538 36.5644 13.1271C36.5844 13.5705 36.601 13.9405 36.6144 14.3138L36.6244 14.6371C36.654 15.8524 36.6668 17.0681 36.6627 18.2838L36.6644 19.5271V21.7105C36.6654 22.0063 36.6654 22.3022 36.6644 22.5981C36.6613 23.5184 36.6485 24.4387 36.626 25.3588L36.616 25.6821C36.6031 26.044 36.5871 26.4012 36.5679 26.8281C36.5673 26.8416 36.5667 26.8552 36.566 26.8688C36.4827 28.6421 36.1994 29.8521 35.7894 30.9138C35.3721 32.0267 34.7162 33.0348 33.8677 33.8671C33.0343 34.7143 32.0266 35.37 30.9144 35.7888C29.8527 36.2005 28.6427 36.4805 26.8694 36.5638C26.8557 36.5644 26.8422 36.565 26.8287 36.5656C26.4018 36.5848 26.0446 36.6009 25.6827 36.6138L25.3594 36.6238C24.1435 36.6534 22.9273 36.6662 21.711 36.6621L20.4677 36.6638H18.286C17.9901 36.6648 17.6943 36.6648 17.3984 36.6638C16.4781 36.6607 15.5578 36.6479 14.6377 36.6255L14.3144 36.6155C13.9187 36.6011 13.5232 36.5844 13.1277 36.5655C11.3544 36.4821 10.1444 36.1988 9.08104 35.7888C7.96885 35.371 6.96144 34.7152 6.12937 33.8671C5.28112 33.0343 4.62475 32.0264 4.20604 30.9138C3.79437 29.8521 3.51437 28.6421 3.43104 26.8688C3.41248 26.4733 3.39581 26.0778 3.38104 25.6821L3.37271 25.3588C3.34736 24.356 3.33347 23.3529 3.33104 22.3498C3.33052 22.1367 3.33052 21.9236 3.33104 21.7105V18.2838C3.32976 17.9487 3.32976 17.6136 3.33104 17.2785C3.33441 16.3979 3.34663 15.5174 3.36771 14.6371L3.37937 14.3138C3.39271 13.9405 3.40937 13.5705 3.42937 13.1271C3.51271 11.3521 3.79271 10.1438 4.20437 9.08046C4.62333 7.96816 5.28098 6.9612 6.13104 6.13046C6.96253 5.28172 7.96931 4.62475 9.08104 4.20546C10.1444 3.7938 11.3527 3.5138 13.1277 3.43046L14.3144 3.38046L14.6377 3.37213C15.641 3.34678 16.6445 3.33289 17.6481 3.33046C17.8602 3.32995 18.0723 3.32995 18.2844 3.33046L21.711 3.33213ZM19.9977 11.6655C18.8935 11.6498 17.7973 11.8538 16.7727 12.2656C15.748 12.6773 14.8154 13.2886 14.0291 14.0639C13.2428 14.8392 12.6184 15.763 12.1922 16.7817C11.766 17.8004 11.5465 18.8937 11.5465 19.998C11.5465 21.1022 11.766 22.1955 12.1922 23.2142C12.6184 24.2329 13.2428 25.1567 14.0291 25.932C14.8154 26.7073 15.748 27.3186 16.7727 27.7303C17.7973 28.1421 18.8935 28.3461 19.9977 28.3305C22.2078 28.3305 24.3275 27.4525 25.8903 25.8897C27.4531 24.3269 28.331 22.2073 28.331 19.9971C28.331 17.787 27.4531 15.6674 25.8903 14.1046C24.3275 12.5418 22.2078 11.6655 19.9977 11.6655ZM19.9977 14.9988C20.6619 14.9866 21.3218 15.1068 21.939 15.3525C22.5562 15.5982 23.1183 15.9644 23.5923 16.4297C24.0664 16.895 24.443 17.4502 24.7001 18.0627C24.9572 18.6752 25.0897 19.3328 25.0898 19.9971C25.0899 20.6614 24.9577 21.3191 24.7008 21.9317C24.4438 22.5443 24.0674 23.0995 23.5935 23.565C23.1196 24.0305 22.5577 24.3969 21.9406 24.6428C21.3235 24.8887 20.6636 25.0091 19.9994 24.9971C18.6733 24.9971 17.4015 24.4703 16.4638 23.5327C15.5262 22.595 14.9994 21.3232 14.9994 19.9971C14.9994 18.671 15.5262 17.3993 16.4638 16.4616C17.4015 15.5239 18.6733 14.9971 19.9994 14.9971L19.9977 14.9988ZM28.7477 9.16546C28.21 9.18698 27.7015 9.41571 27.3287 9.80375C26.9559 10.1918 26.7477 10.709 26.7477 11.2471C26.7477 11.7852 26.9559 12.3025 27.3287 12.6905C27.7015 13.0785 28.21 13.3073 28.7477 13.3288C29.3002 13.3288 29.8301 13.1093 30.2208 12.7186C30.6115 12.3279 30.831 11.798 30.831 11.2455C30.831 10.6929 30.6115 10.163 30.2208 9.77232C29.8301 9.38162 29.3002 9.16213 28.7477 9.16213V9.16546Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M3.33104 17.2785C3.33441 16.3979 3.34663 15.5174 3.36771 14.6371L3.37937 14.3138C3.39271 13.9405 3.40937 13.5705 3.42937 13.1271C3.51271 11.3521 3.79271 10.1438 4.20437 9.08046C4.62333 7.96816 5.28098 6.9612 6.13104 6.13046C6.96253 5.28172 7.96931 4.62475 9.08104 4.20546C10.1444 3.7938 11.3527 3.5138 13.1277 3.43046L14.3144 3.38046L14.6377 3.37213C15.641 3.34678 16.6445 3.33289 17.6481 3.33046H3.33104V17.2785Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M36.6644 22.5981C36.6613 23.5184 36.6485 24.4387 36.626 25.3588L36.616 25.6821C36.6031 26.044 36.5871 26.4012 36.5679 26.8281L36.566 26.8688C36.4827 28.6421 36.1994 29.8521 35.7894 30.9138C35.3721 32.0267 34.7162 33.0348 33.8677 33.8671C33.0343 34.7143 32.0266 35.37 30.9144 35.7888C29.8527 36.2005 28.6427 36.4805 26.8694 36.5638L26.8287 36.5656C26.4018 36.5848 26.0446 36.6009 25.6827 36.6138L25.3594 36.6238C24.1435 36.6534 22.9273 36.6662 21.711 36.6621L20.4677 36.6638H36.6644V22.5981Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M21.711 3.33213C22.9273 3.32746 24.1435 3.33969 25.3594 3.3688L25.6827 3.38046C26.0446 3.39339 26.4017 3.40944 26.8285 3.42863L26.8694 3.43046C28.6427 3.5138 29.8527 3.7938 30.9144 4.20546C32.0144 4.6288 32.941 5.20213 33.8677 6.1288C34.715 6.96147 35.3707 7.96871 35.7894 9.08046C36.201 10.1421 36.481 11.3538 36.5644 13.1271C36.5844 13.5705 36.601 13.9405 36.6144 14.3138L36.6244 14.6371C36.654 15.8524 36.6668 17.0681 36.6627 18.2838L36.6644 19.5271V3.33046H18.2844L21.711 3.33213Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M17.3984 36.6638C16.4781 36.6607 15.5578 36.6479 14.6377 36.6255L14.3144 36.6155C13.9187 36.6011 13.5232 36.5844 13.1277 36.5655C11.3544 36.4821 10.1444 36.1988 9.08104 35.7888C7.96885 35.371 6.96144 34.7152 6.12937 33.8671C5.28112 33.0343 4.62475 32.0264 4.20604 30.9138C3.79437 29.8521 3.51437 28.6421 3.43104 26.8688C3.41248 26.4733 3.39581 26.0778 3.38104 25.6821L3.37271 25.3588C3.34736 24.356 3.33347 23.3529 3.33104 22.3498V36.6638H17.3984Z"
                  fill="#E8E8E8"
                />
              </mask>
              <g mask="url(#mask0_76_1315)">
                <rect
                  x="0.330078"
                  y="0.330078"
                  width="40"
                  height="40"
                  fill="white"
                />
              </g>
              {/*Mask utilizada para realizar a animação */}
              <g mask="url(#mask0_76_1315)">
                <rect
                  className="fillAnimation"
                  fill="#9638FF"
                  width="40"
                  height="40"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/comissão-organizadora-da-semana-de-sistemas-de-informação"
            target="_blank"
            aria-label="Linkedin da Semana de Sistemas de Informação"
          >
            {/*Linkedin Logo*/}
            <svg
              className="animation"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Linkedin da Semana de Sistemas de Informação"
            >
              <mask
                id="mask0_76_1341"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="34"
                height="34"
              >
                <path
                  d="M32.6356 3C33.618 3 34.5603 3.39017 35.255 4.08468C35.9497 4.77919 36.34 5.72115 36.34 6.70333V32.6267C36.34 33.6089 35.9497 34.5508 35.255 35.2453C34.5603 35.9398 33.618 36.33 32.6356 36.33H6.70444C5.72196 36.33 4.77972 35.9398 4.08501 35.2453C3.39029 34.5508 3 33.6089 3 32.6267V6.70333C3 5.72115 3.39029 4.77919 4.08501 4.08468C4.77972 3.39017 5.72196 3 6.70444 3H32.6356ZM31.7094 31.7008V21.887C31.7094 20.286 31.0733 18.7506 29.9409 17.6186C28.8085 16.4865 27.2726 15.8506 25.6712 15.8506C24.0968 15.8506 22.2631 16.8134 21.374 18.2577V16.2024H16.2063V31.7008H21.374V22.5721C21.374 21.1463 22.5224 19.9798 23.9486 19.9798C24.6364 19.9798 25.2959 20.2529 25.7822 20.7391C26.2685 21.2252 26.5417 21.8846 26.5417 22.5721V31.7008H31.7094ZM10.1866 13.2953C11.0119 13.2953 11.8034 12.9675 12.387 12.3841C12.9705 11.8007 13.2984 11.0095 13.2984 10.1845C13.2984 8.46242 11.9092 7.05515 10.1866 7.05515C9.35643 7.05515 8.56023 7.38484 7.9732 7.97171C7.38616 8.55857 7.05637 9.35452 7.05637 10.1845C7.05637 11.9065 8.46406 13.2953 10.1866 13.2953ZM12.7612 31.7008V16.2024H7.63056V31.7008H12.7612Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M3 6.70333C3 5.72115 3.39029 4.77919 4.08501 4.08468C4.77972 3.39017 5.72196 3 6.70444 3H3V6.70333Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M32.6356 3C33.618 3 34.5603 3.39017 35.255 4.08468C35.9497 4.77919 36.34 5.72115 36.34 6.70333V3H32.6356Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M36.34 32.6267C36.34 33.6089 35.9497 34.5508 35.255 35.2453C34.5603 35.9398 33.618 36.33 32.6356 36.33H36.34V32.6267Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M6.70444 36.33C5.72196 36.33 4.77972 35.9398 4.08501 35.2453C3.39029 34.5508 3 33.6089 3 32.6267V36.33H6.70444Z"
                  fill="#E8E8E8"
                />
              </mask>
              <g mask="url(#mask0_76_1341)">
                <rect width="40" height="40" fill="white" />
              </g>

              {/*Mask utilizada para realizar a animação */}
              <g mask="url(#mask0_76_1341)">
                <rect
                  className="fillAnimation"
                  fill="#9638FF"
                  width="40"
                  height="50"
                ></rect>
              </g>
            </svg>
          </a>

          <a
            href="https://www.twitch.tv/each_ssi"
            target="_blank"
            aria-label="Twitch da Semana de Sistemas de Informação"
          >
            <svg
              className="animation"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Twitch da Semana de Sistemas de Informação"
            >
              <mask
                id="mask0_76_1370"
                maskUnits="userSpaceOnUse"
                x="5"
                y="3"
                width="30"
                height="34"
              >
                <path
                  d="M19.4031 9.88008H21.7864V17.0134H19.4031M25.9531 9.88008H28.3364V17.0134H25.9531M11.6697 3.33008L5.71973 9.28008V30.7134H12.8531V36.6634L18.8197 30.7134H23.5697L34.2864 19.9967V3.33008M31.9031 18.8134L27.1531 23.5634H22.3864L18.2197 27.7301V23.5634H12.8531V5.71341H31.9031V18.8134Z"
                  fill="#E8E8E8"
                />
              </mask>
              <g mask="url(#mask0_76_1370)">
                <rect
                  x="-0.280273"
                  y="0.330078"
                  width="40"
                  height="40"
                  fill="white"
                />
              </g>

              <g mask="url(#mask0_76_1370)">
                <rect
                  className="fillAnimation"
                  fill="#9638FF"
                  width="40"
                  height="40"
                ></rect>
              </g>
            </svg>
          </a>
        </div>
      </FooterLogos>

      <FooterEnding>
        <p>Made with</p>
        <img src={Code} alt="Ícone Programação" />
        <p>and</p>
        <img src={Coffee} alt="Ícone Café" />
      </FooterEnding>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  border-top: 2px solid #4b4b4b;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem 3rem;
  width: 100%;
  max-width: 1232px;
  gap: 3rem;
  font-size: 100%;
  background-color: var(--color-neutral);

  //Animation
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  ul a {
    display: block;
    width: fit-content;
    padding: 0.125rem 0.5rem;
    background-color: transparent;
    white-space: nowrap;
    background-image: linear-gradient(
      var(--color-neutral-50),
      var(--color-neutral-50)
    ); /* Coloca um background branco em cima do botão */
    background-size: 200%; /* faz o background-position com porcentagem funcionar */
    background-position-x: 200%; /* Tira o background branco do lugar */
    background-repeat: no-repeat;
    transition: 100ms all ease-out;
    font-weight: 400;
    line-height: 1.5rem;
  }

  ul a:hover,
  ul a:focus-visible {
    background-position-x: 100%;
    color: var(--color-neutral);
  }

  ul a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  // Fim da animação

  // Rota ativada
  .active {
    background-color: var(--color-primary);
    transition: 100ms all ease-out;
    font-family: "AT Aero Bold";

    &:hover,
    &:focus-visible {
      color: var(--color-primary);
    }
  }

  // Desktop
  @media (min-width: 930px) {
    display: grid;
    padding: 4rem 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0rem;
  }
`;

const MobileBackToTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(
    to bottom,
    var(--color-primary) 50%,
    var(--color-neutral-50) 50%
  );
  background-size: 100% 200%;
  background-position: top;
  transition: all 100ms ease-out;
  cursor: pointer;
  margin-bottom: 3rem;

  rect {
    transform: translateY(100%);
  }

  &:hover,
  &:focus-visible {
    background-position: bottom;
    color: var(--color-primary);

    path {
      transition: all 100ms ease-out;
      fill: var(--color-primary);
      transform: translateY(0);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const DesktopBackToTop = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: block;
    padding: 1rem;
    background: linear-gradient(
      to bottom,
      var(--color-primary) 50%,
      var(--color-neutral-50) 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: all 100ms ease-out;
    cursor: pointer;

    rect {
      transform: translateY(100%);
    }

    &:hover,
    &:focus-visible {
      background-position: bottom;

      path {
        transition: all 100ms ease-out;
        fill: var(--color-primary);
        transform: translateY(0);
      }
    }

    &:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }
`;

const FooterLogo = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-container {
    width: 100%;
    max-width: 5rem;
  }

  .logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    text-align: center;
    line-height: 1.2;
  }

  // Desktop
  @media (min-width: 850px) {
    width: fit-content;
    height: 100%;
    justify-self: start;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  transition: 100ms all ease-out;

  div {
    display: none;
  }

  // Desktop
  @media (min-width: 850px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 5;

    div {
      display: flex;
    }

    ul {
      margin: auto;
      width: 65%;
      margin-bottom: 5.625rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      gap: 1.5rem 2.5rem;
    }
  }
`;

const FooterLogos = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .fillAnimation {
    transform: translateX(-100%);
    transition: all 100ms ease-out;
  }

  .animation:hover,
  a:focus-visible {
    cursor: pointer;
    transition: all 100ms ease-out;

    .fillAnimation {
      transform: translateX(0);
    }
  }

  a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .logosWrapper {
    display: flex;
    gap: 1.5rem;
  }

  @media (min-width: 850px) {
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    width: fit-content;
    justify-self: end;
  }
`;

const FooterEnding = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 850px) {
    display: none;
  }
`;
