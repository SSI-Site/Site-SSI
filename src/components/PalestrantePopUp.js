import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import SecondaryButton from './SecondaryButton';

const PopUpOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
`;

const PopUpContainer = styled.div`
    background-color: var(--background-neutrals-secondary);
    width: 90%;
    max-width: 1000px;
    //height: 750px;

    padding: 32px;
    border-radius: 8px;
    border: 1px solid #444;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);

    color: #f0f0f0;

`;

const PopUpHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--outline-neutrals-secondary);

    h5{
        color: var(--content-neutrals-primary, #FFF);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        flex: 1 0 0;
    }
`;

const SecondaryButtonEsticado = styled(SecondaryButton)`
  flex-grow: 1;
`;

const ButtonEsticado = styled(Button)`
  flex-grow: 1;
`;

const PopUpFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    width: 100%;
    margin-top: 15px;
`;

const MainPopUp = styled.main`
    padding-bottom: 16px;
    border-bottom: 1px solid var(--outline-neutrals-secondary);
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 16px;
    margin-top: 16px;
`;

const FormRow = styled.div`
  display: grid;
  gap: 16px; 
  grid-template-columns: ${(props) => props.columns || '1fr'};
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column; 
`;

const StyledLabel = styled.label`
    color: var(--content-neutrals-primary, #FFF);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

const InputStyle = css`
    background-color: var(--background-neutrals-secondary);
    border: 2px solid #FFFFFF !important;
    padding: 12px 16px;
    color: var(--content-neutrals-primary);
    font-size: 1rem;
    width: 100%;
`;

const StyledInput = styled.input`
  ${InputStyle}
`;

const TextInput = styled.textarea`
    ${InputStyle}
    resize: vertical;
    min-height: 300px;
    max-width: 936px;

    @media (max-width: 768px){
        min-height: 100px;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;


export default function PalestrantePopUp ({isOpen, onClose}){
    if (!isOpen){
        return null;
    }

    return (
        <PopUpOverlay onClick={onClose}>
            <PopUpContainer onClick={(e) => e.stopPropagation()}>
                <PopUpHeader>
                    <h5>Adicionar Palestrante</h5>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </PopUpHeader>
                <MainPopUp>
                    <FormContainer>
                        <FormRow columns="1fr 1fr">
                            <FormGroup>
                                <StyledLabel>Nome</StyledLabel>
                                <StyledInput id="nome" type="text" placeholder="Insira o nome do Palestrante"/>
                            </FormGroup>
                            <FormGroup>
                                <StyledLabel>Cargo</StyledLabel>
                                <StyledInput id="cargo" type="text" placeholder="Insira o cargo do Palestrante"/>
                            </FormGroup>
                        </FormRow>

                        <FormRow columns="auto 1fr 1fr">
                            <FormGroup>
                                <StyledLabel>Pronomes</StyledLabel>
                                <StyledInput id="pronomes" type="text" placeholder="Elu/Delu"/>
                            </FormGroup>
                            <FormGroup>
                                <StyledLabel>instagram</StyledLabel>
                                <StyledInput id="instagram" type="text" placeholder="Insira o @ do Palestrante"/>
                            </FormGroup>
                            <FormGroup>
                                <StyledLabel>Linkedin</StyledLabel>
                                <StyledInput id="linkedin" type="text" placeholder="Insira o @ do palestrante"/>
                            </FormGroup>
                        </FormRow>
                    </FormContainer>

                    
                    <FormGroup>
                        <StyledLabel>Sobre</StyledLabel>
                        <TextInput id="sobre" placeholder="Escreva sobre quem é o palestrante"/>
                    </FormGroup>
                    
                </MainPopUp>

                <PopUpFooter>
                    <SecondaryButtonEsticado onClick={onClose}>Cancelar</SecondaryButtonEsticado>
                    <ButtonEsticado>Adicionar</ButtonEsticado>
                </PopUpFooter>

            </PopUpContainer>
        </PopUpOverlay>
    );
}

