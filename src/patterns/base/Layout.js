import {useState} from 'react';
import styled from 'styled-components';

import Meta from '../../infra/Meta';
import GlobalStyle from '../../../styles/global';

import NavBar from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <style jsx>
                {`
                  @font-face {
                    font-family: 'Space_Mono';
                    src: url('/fonts/space_mono-regular.ttf');
                  }
                  @font-face {
                    font-family: 'Space_Mono_Bold';
                    src: url('/fonts/space_mono-bold.ttf');
                  }
                `}
            </style>
            <GlobalStyle />
            <NavBar />
            <SiteWrapper>
                <main>
                    {children}
                </main>
                <Footer />
            </SiteWrapper>
        </>
    )
}

export default Layout;


const SiteWrapper = styled.div`
    min-height: 100vh;
    max-width: 1500px;
    margin: auto;
    position: relative;
    padding-bottom: 33.8rem; /* match footer height */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    main {
        padding-inline: 1rem;
        max-width: 1224px;
        align-self: center;
    }

    @media (min-width:600px) {
        padding-bottom: 13rem; /* match footer height */
    }

    @media (min-width:1365px) {
        padding-inline: 0;
    }
`