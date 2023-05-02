import { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';
import saphira from '../../services/saphira';

// components
import Button from './Button';


const TOKEN_LENGTH = 5;

const ModalTokenComponent = ({ toggleVisibility }) => {

    const { user } = useAuth();
    
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    // Estados: escrevendo, inválido e registrado
    const [isWritting, setIsWritting] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChangeToken = event => {
        setIsWritting(true);
        setIsInvalid(false);
        setIsRegistered(false);
        const { value } = event.target;

        if (value.length > TOKEN_LENGTH) return;
        setToken(value);
    }

    const handleSendToken = async event => {
        event.preventDefault();
        setIsWritting(false);

        if (token.length < TOKEN_LENGTH) {
            setIsInvalid(true);
            return;
        }

        setIsLoading(true);

        await saphira.registerPresence(user.email, token)
            .then(() => {
                setIsInvalid(false);
                setIsRegistered(true);
                alert(`Presença Registrada!`);
                setToken('');
                toggleVisibility();
            })
            .catch(() => {
                setIsInvalid(true);
            });

        setIsLoading(false);
    }

    const getClassActiveBtn = () => token.length == TOKEN_LENGTH ? 'active-btn' : 'disabled-btn';

    const getClassInvalidToken = () => isInvalid ? 'invalid-token' : '';

    // Para obter a largura da tela
    const useWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined"

        function getWindowDimensions() {
            const width = hasWindow ? window.innerWidth : null
            const height = hasWindow ? window.innerHeight : null
            return {
                width,
                height,
            }
        }

        const [windowDimensions, setWindowDimensions] = useState(
            getWindowDimensions()
        );

        useEffect(() => {
            if (hasWindow) {
                function handleResize() {
                    setWindowDimensions(getWindowDimensions());
                }

                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }
        }, [hasWindow]);

        return windowDimensions;
    }

    const { height, width } = useWindowDimensions();
    const breakpoint = 560;

    return (
        <ModalTokenWrapper>

            {!isLoading ?
                <form onSubmit={handleSendToken}>
                    <input
                        type="text"
                        className={getClassInvalidToken()}
                        onChange={handleChangeToken}
                        value={token}
                        placeholder='Digite o token...'
                    />
                    {isInvalid && 
                        <Button type="submit" className='invalid-token'>{width > breakpoint ? 'Token inválido...' : 'Inválido...'}</Button>
                    }
                    {isRegistered &&
                        <Button className='token-registered'>{width > breakpoint ? 'Presença registrada!' : 'Registrada!'}</Button>
                    }
                    {isWritting && token.length == TOKEN_LENGTH &&
                        <Button type="submit">{width > breakpoint ? 'Registrar presença' : 'Registrar'}</Button>
                    }
                    {isWritting && token.length != TOKEN_LENGTH &&
                        <div className={getClassActiveBtn()}>
                            {/* <Button disabled>Registrar</Button> */}
                            <Button disabled>{width > breakpoint ? 'Registrar presença' : 'Registrar'}</Button>
                        </div>
                    }

                </form>
                :
                <Loading>
                    <img src='./loading.svg' alt='SSI 2023 - Loading' />
                </Loading>
            }
        </ModalTokenWrapper >
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
    --color-invalid: #F24822;
    --color-valid: #14AE5C;
    width: 24.85rem;
    background-color: var(--color-neutral-50);
    border-radius: 16px;
    padding: 0.5rem;

    border: 4px solid var(--color-neutral-800);

    &:has(input[type=text]:focus):not(:has(.invalid-token)):not(:has(.token-registered)) {
        border-color: var(--color-primary);
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
        margin-left: 1rem;
        width: auto;
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
    }

    @media (min-width:560px) {
        width: 33.5rem;
    }
`