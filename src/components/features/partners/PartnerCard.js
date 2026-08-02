import React from 'react';
import styled from 'styled-components';

/**
 * Componente de cartão para exibir logotipos de parceiros/patrocinadores.
 * Redireciona o usuário para o site do parceiro ao ser clicado e alterna 
 * automaticamente o logotipo dependendo do tema do navegador (Light/Dark).
 *
 * @param {Object} props
 * @param {string} props.imageDark - URL da imagem que será exibida no tema escuro.
 * @param {string} props.imageLight - URL da imagem que será exibida no tema claro.
 * @param {string} props.name - Nome do parceiro (utilizado para acessibilidade na tag alt).
 * @param {string} props.link - Link de destino para o qual o usuário será redirecionado ao clicar.
 */
const PartnerCard = ({ imageDark, imageLight, name, link }) => {
    return (
        <PartnerWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <div className='partner-image'>
                    <picture>
                        <source srcSet={imageLight} media="(prefers-color-scheme: light)" />
                        <img src={imageDark} alt={`Logo ${name}`}/>
                    </picture>
                </div>
            </a>
        </PartnerWrapper>
    );
};

export default PartnerCard;

const PartnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 27rem;
    height: 12.75rem;
    transition: all 0.2s ease-in-out;
    z-index: 2;
    border-radius: 1rem;

    border: 3px solid transparent;

    /* ====== TEMA DARK (Padrão) ====== */
    background: 
        /* 1. Fundo do card */
        linear-gradient(var(--background-neutrals-secondary, #333), var(--background-neutrals-secondary, #333)) padding-box,
        /* 2. Fundo da borda gradiente */
        linear-gradient(180deg, var(--purple-light-purple, #D0ACFF) 0%, var(--backup-primary-500, #AF52FF) 40.38%, var(--purple-purple, #9638FF) 100%) border-box; 


    /* ====== TEMA LIGHT ====== */
    @media (prefers-color-scheme: light) {
        background: 
            /* 1. Fundo do card light */
            linear-gradient(var(--background-neutrals-secondary, #CCC), var(--background-neutrals-secondary, #CCC)) padding-box,
            /* 2. Borda gradiente light */
            linear-gradient(180deg, var(--purple-purple, #9638FF) 0%, var(--backup-primary-800, #6618BB) 40.38%, var(--purple-dark-purple, #3E0672) 100%) border-box;
    }

    &:hover {
        transform: translateY(-4px);
        border-color: #8414FD;
        @media (prefers-color-scheme: light) {
            border-color: #AF52FF;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 1.5rem 2rem; 
    }

    .partner-image {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 23rem; 
        aspect-ratio: 368 / 272; 

        picture {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    @media (min-width: 800px) {
        height: auto;   
    }
`;