import { useState } from 'react';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';
import saphira from '../../services/saphira';

// components
import Button from './Button';

// assets
import flecha from '../../public/images/flecha.svg';

const TOKEN_LENGTH = 5;

const ModalTokenComponent = ({ toggleVisibility }) => {

    const { user } = useAuth();
    
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const [isWritting, setIsWritting] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChangeToken = event => {
        setIsWritting(true);
        setIsInvalid(false);
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

    const getClassInvalidToken = () => isInvalid ? 'invalid-token' : 'valid-token';

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
                        <Button type="submit" className='invalid-token'>Token inválido...</Button>
                    }
                    {isRegistered &&
                        <Button className='valid-token'>Presença registrada!</Button>
                    }
                    {isWritting && token.length == TOKEN_LENGTH &&
                        <Button type="submit">Registrar presença</Button>
                    }
                    {isWritting && token.length != TOKEN_LENGTH &&
                        <div className={getClassActiveBtn()}>
                            <Button>Registrar presença</Button>
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
    width: 31rem;
    background-color: var(--color-neutral-50);
    border-radius: 16px;
    padding: 0.5rem;

    /* definir a borda segundo estado */
    border: 4px solid red;

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

    .invalid-token:not(input[type=text]) {
        background-color: var(--color-invalid);
        pointer-events: none;
    }

    .valid-token:not(input[type=text]) {
        background-color: var(--color-valid);
        pointer-events: none;
    }

    .disabled-btn {
        cursor: not-allowed;
        width: 100%;

        > button {
            pointer-events: none;
        }
    }

    @media (min-width:600px) {

    }
`