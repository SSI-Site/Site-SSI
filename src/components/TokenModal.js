import { useState } from 'react';
import styled from 'styled-components';

import saphira from '../../services/saphira';

// components
import Button from './Button';

const TOKEN_LENGTH = 5;

const ModalTokenComponent = ({ toggleVisibility, onSuccess }) => {
    
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    // Estados: escrevendo, inválido e registrado
    const [isWriting, setIsWriting] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [hasPresence, setHasPresence] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChangeToken = event => {
        setIsWriting(true);
        setIsInvalid(false);
        setHasPresence(false);
        setIsRegistered(false);
        const { value } = event.target;

        if (value.length > TOKEN_LENGTH) return;
        setToken(value);
    }

    const handleSendToken = async event => {
        event.preventDefault();
        setIsWriting(false);

        if (token.length < TOKEN_LENGTH) {
            setIsInvalid(true);
            return;
        }

        setIsLoading(true);

        await saphira.registerOnlinePresence(token)
            .then(() => {
                setIsRegistered(true);
                setIsInvalid(false);
                // alert(`Presença Registrada!`);
                setToken('');
                if (onSuccess) onSuccess();
                toggleVisibility();
            })
            .catch((err) => {
                console.error(err);
                if (err.response && err.response.data && err.response.data.error) {
                    const errorMessage = err.response.data.error;
                    if (errorMessage.startsWith("Presença já registrada")) {
                        setHasPresence(true);
                    }
                    else {
                        setIsInvalid(true);
                    }
                } 
                else {
                    setIsInvalid(true);
                }
            });

        setIsLoading(false);
    }

    const getClassActiveBtn = () => token.length == TOKEN_LENGTH ? 'active-btn' : 'disabled-btn';

    const getClassInvalidToken = () => isInvalid ? 'invalid-token' : '';

    return (
        <>
            {!isLoading ?
                <ModalTokenWrapper>
                    {/* Botões para Mobile */}
                    <div className='btns-mobile'>
                        <form onSubmit={handleSendToken}>
                            <input
                                type="text"
                                className={getClassInvalidToken()}
                                onChange={handleChangeToken}
                                value={token}
                                placeholder='Token...'
                            />
                            
                            {hasPresence && !isRegistered &&
                                <Button type="submit" className='invalid-token'>Já registrada</Button>
                            }                            
                            {isInvalid && !isRegistered &&
                                <Button type="submit" className='invalid-token'>Inválido...</Button>
                            }
                            {isRegistered &&
                                <Button className='token-registered'>Registrada!</Button>
                            }
                            {isWriting && token.length == TOKEN_LENGTH &&
                                <Button type="submit">Registrar</Button>
                            }
                            {isWriting && token.length != TOKEN_LENGTH &&
                                <div className={getClassActiveBtn()}>
                                    <Button disabled>Registrar</Button>
                                </div>
                            }
                        </form>
                    </div>

                    {/* Botões para Desktop */}
                    <div className='btns-desktop'>
                        <form onSubmit={handleSendToken}>
                            <input
                                type="text"
                                className={getClassInvalidToken()}
                                onChange={handleChangeToken}
                                value={token}
                                placeholder='Digite o token...'
                            />
                    
                            {hasPresence && !isRegistered &&
                                <Button type="submit" className='invalid-token'>Já registrada...</Button>
                            }                    
                            {isInvalid && !isRegistered &&
                                <Button type="submit" className='invalid-token'>Token inválido...</Button>
                            }
                            {isRegistered &&
                                <Button className='token-registered'>Presença registrada!</Button>
                            }
                            {isWriting && token.length == TOKEN_LENGTH &&
                                <Button type="submit">Registrar presença</Button>
                            }
                            {isWriting && token.length != TOKEN_LENGTH &&
                                <div className={getClassActiveBtn()}>
                                    <Button disabled>Registrar presença</Button>
                                </div>
                            }
                        </form>
                    </div>
                </ModalTokenWrapper >
                :
                <Loading>
                    <img src='./loading.svg' alt='SSI 2024 - Loading' />
                </Loading>
            }
        </>
    )
}

export default ModalTokenComponent;


const Loading = styled.figure`
    width: 100%;
    text-align: center;

    img {
        width: 50px;
    }
`

const ModalTokenWrapper = styled.div`
    --color-invalid: #FF8980;
    --color-valid: #52C84D;
    width: 100%;
    background-color: var(--background-neutrals-primary-800);
    padding: 0.5rem;
    margin-left: -4px;

    border: 4px solid transparent;
    background-clip: padding-box;

    .btns-desktop {
        display: none;
    }

    &:has(input[type=text]:focus):not(:has(.invalid-token)):not(:has(.token-registered)) {
        border-color: var(--brand-primary);
    }

    &:has(.invalid-token) {
        border-color: var(--color-invalid);
    }

    &:has(.token-registered) {
        border-color: var(--color-valid);
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    input[type=text] {
        color: var(--color-content-neutrals-tertiary);
        background-color: var(--background-neutrals-primary-800);
        text-transform: uppercase;
        margin-left: 1rem;
        width: 9rem;
    }


    button {
        width: fit-content;
    }

    .invalid-token:not(input[type=text]) {
        background-color: var(--color-invalid);
        pointer-events: none;
    }

    .token-registered:not(input[type=text]) {
        background-color: var(--color-valid);
        pointer-events: none;
    }

    .disabled-btn {
        cursor: not-allowed;
        width: fit-content;

        button {
            background-color: var(--background-neutrals-secondary);
            color: var(--background-neutrals-primary);
        }
    }

    @media (min-width:560px) {
        width: 26.9rem;

        input[type=text] {
            width: 10rem;
        }

        .btns-desktop {
            display: block;
        }

        .btns-mobile {
            display: none;
        }
    }
`