import React, { useState, useId, useEffect } from 'react';
import styled from 'styled-components';

const Accordion = ({ title, children, invertGradient = false }) => {
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true); // Assume desktop por padrão
    const [isMounted, setIsMounted] = useState(false);
    
    const buttonId = useId();
    const contentId = `${buttonId}-content`;

    useEffect(() => {
        setIsMounted(true);
        
        const handleResize = () => setIsDesktop(window.innerWidth > 800);
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determina se o cabeçalho deve agir como um botão (apenas em mobile)
    const isInteractive = isMounted && !isDesktop;

    const toggleAccordion = () => {
        if (isInteractive) setOpen((prev) => !prev);
    };

    const handleKeyDown = (e) => {
        // Acessibilidade: Permite abrir/fechar com as teclas Enter ou Espaço
        if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault(); 
            setOpen((prev) => !prev);
        }
    };

    return (
        <AccordionItem 
            $invertGradient={invertGradient} 
            className={open ? 'is-open' : ''}
        >
            <div 
                id={buttonId} 
                role={isInteractive ? "button" : undefined} 
                tabIndex={isInteractive ? "0" : undefined}
                aria-expanded={isInteractive ? open : undefined}
                aria-controls={contentId}
                onClick={toggleAccordion}
                onKeyDown={handleKeyDown}
                className={`accordion-header ${isInteractive ? 'interactive' : ''}`}
            >
                <h6>{title}</h6>
                
                {isInteractive && (
                    <span className="accordion-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden="true">
                            <path d="M13.8188 0L8 5.81875L2.18125 0L0 2.18125L8 10.1813L16 2.18125L13.8188 0Z" fill="currentColor" />
                        </svg>
                    </span>
                )}
            </div>
            
            <div 
                id={contentId} 
                role="region" 
                aria-labelledby={buttonId} 
                className="accordion-content-wrapper"
            >
                <div className="accordion-content">
                    {children}
                </div>
            </div>
        </AccordionItem>
    );
};

export default Accordion;

const AccordionItem = styled.div`
    max-width: 34rem;
    padding: 1rem 0.75rem 0.75rem 0.75rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    
    background: 
        /* Fundo do card (camada de cima) */
        linear-gradient(var(--background-neutrals-primary), var(--background-neutrals-primary)) padding-box,
        /* Gradiente da borda (camada de baixo) */
        linear-gradient(90deg, #D0ADFF, #FFFFFF) border-box;

    @media (prefers-color-scheme: light) {
        background: 
            linear-gradient(var(--background-neutrals-primary), var(--background-neutrals-primary)) padding-box,
            linear-gradient(90deg, #6206bf, #2b054d) border-box;
    }

    .accordion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
        
        &.interactive {
            cursor: pointer;
        }
        
        &:focus-visible {
            outline: 2px solid var(--brand-primary, #9638FF);
            outline-offset: 4px;
            border-radius: 0.5rem;
        }
    }

    .accordion-icon {
        display: flex;
        align-items: center;
        
        svg {
            transition: transform 0.3s ease-in-out;
        }
    }

    /* Vira a setinha se o componente pai (AccordionItem) tiver a classe .is-open */
    &.is-open .accordion-icon svg {
        transform: rotate(-180deg);
    }

    .accordion-content-wrapper {
        display: grid;
        grid-template-rows: 0fr; /* Fechado por padrão no mobile */
        transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.is-open .accordion-content-wrapper {
        grid-template-rows: 1fr; /* Abre para o tamanho natural do conteúdo */
    }

    .accordion-content {
        overflow: hidden; /* Importante para o conteúdo não vazar durante a animação */
        
        p {
            margin-top: 0.5rem;
        }
    }

    /* Layout Desktop */
    @media screen and (min-width: 800px) {
        padding: 1rem 1.25rem;
        border: 2px solid transparent;
        
        background: 
            linear-gradient(var(--background-neutrals-primary), var(--background-neutrals-primary)) padding-box,
            linear-gradient(${({ $invertGradient }) => $invertGradient ? '-45deg' : '135deg'}, #fdeeff 0%, #d0acff 60%, #9638ff 95%) border-box;
        
        @media (prefers-color-scheme: light) {
            background: 
                linear-gradient(var(--background-neutrals-primary), var(--background-neutrals-primary)) padding-box,
                linear-gradient(${({ $invertGradient }) => $invertGradient ? '-45deg' : '135deg'}, #6206BF 0%, #6618BB 40%, #2B054D 100%) border-box;
        }

        .accordion-header {
            padding: 0 0 0.62rem 0;
            cursor: default; /* Remove o ponteiro de clique no desktop */
            
            h6 {
                font-size: 2rem;
            }
        }

        /* Garante que fique aberto no Desktop permanentemente */
        .accordion-content-wrapper {
            grid-template-rows: 1fr;
        }

        .accordion-content {
            overflow: visible;
        }
    }
`;