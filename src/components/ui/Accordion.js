import React, { useState, useRef, useId, useEffect } from 'react';
import styled from 'styled-components';

const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false); // Inicia como false para evitar erro no servidor (SSR)
    const contentRef = useRef(null);
    
    const buttonId = useId();
    const contentId = `${buttonId}-content`;

    useEffect(() => {
        // Checa o tamanho da tela logo que monta o componente no cliente
        const handleResize = () => setIsDesktop(window.innerWidth > 800);
        
        handleResize(); // Chamada inicial segura

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleAccordion = () => {
        if (!isDesktop) setOpen((prev) => !prev);
    };

    const handleKeyDown = (e) => {
        if (!isDesktop && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault(); // Evita a rolagem da página ao apertar Espaço
            setOpen((prev) => !prev);
        }
    };

    const contentStyle = {
        maxHeight: isDesktop 
            ? "none" 
            : (open ? (contentRef.current ? `${contentRef.current.scrollHeight}px` : "1000px") : "0px")
    };

    return (
        <AccordionItem $isDesktop={isDesktop} $isOpen={open}>
            <div 
                id={buttonId} 
                role={isDesktop ? "presentation" : "button"} 
                tabIndex={isDesktop ? undefined : "0"}
                aria-expanded={isDesktop ? undefined : open}
                aria-controls={contentId}
                onClick={toggleAccordion}
                onKeyDown={handleKeyDown}
                className="accordion-header"
            >
                <h6>{title}</h6>
                
                {!isDesktop && (
                    <span className="accordion-icon">
                        {/* Apenas 1 SVG. A rotação é controlada via CSS usando a classe isOpen no componente pai */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path d="M13.8188 0L8 5.81875L2.18125 0L0 2.18125L8 10.1813L16 2.18125L13.8188 0Z" fill="white" />
                        </svg>
                    </span>
                )}
            </div>
            
            <div 
                id={contentId} 
                role="region" 
                aria-labelledby={buttonId} 
                ref={contentRef} 
                className="accordion-content"
                style={contentStyle}
            >
                {children}
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
        linear-gradient(270deg, #9638FF, #D0ADFF, #FFFFFF) border-box;

    .accordion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 0.5rem 0rem 0.5rem;
        cursor: ${({ $isDesktop }) => ($isDesktop ? 'default' : 'pointer')};
        
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
            transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-180deg)' : 'rotate(0)')};
        }
    }

    .accordion-content { 
        p {
            margin-top: 0.5rem;
        }
        
        overflow: ${({ $isDesktop }) => ($isDesktop ? 'visible' : 'hidden')};
        transition: ${({ $isDesktop }) => ($isDesktop ? 'none' : 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)')};
    }

    @media screen and (min-width: 800px) {
        padding: 1rem 1.25rem;

        .accordion-header {
            padding: 0rem 0rem 0.62rem 0rem;
            h6 {
                font-size: 2rem;
            }
        }
    }
`;