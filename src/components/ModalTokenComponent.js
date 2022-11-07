import { useState } from 'react';
import styled from 'styled-components';

import saphira from '../../services/saphira';
import flecha from '../../public/images/flecha.svg';

const TOKEN_LENGTH = 5;

const ModalTokenComponent = ({ toggleVisibility, userEmail }) => {
    const [token, setToken] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeToken = event => {
        const { value } = event.target
        if (value.length > TOKEN_LENGTH) return
        setToken(value)
    }

    const handleSendToken = async event => {
        event.preventDefault()

        if (token.length < TOKEN_LENGTH) {
            setIsInvalid(true)
            return
        }

        setIsLoading(true)
        console.log('BANANAAA')

        await saphira.registerPresence(userEmail, token)
            .then(() => {
                setIsInvalid(false);
            })
            .catch(() => {
                setIsInvalid(true);
            });

        setIsLoading(false)
    }

    const closeModalToken = () => {
        toggleVisibility();
    }

    const getClassActiveBtn = () => token.length == TOKEN_LENGTH ? 'active-btn' : ''

    const getClassInvalidToken = () => isInvalid ? 'invalid-token' : ''

    return (
        <ModalTokenWrapper>
            <h3>Insira o Token</h3>
            <div className="close-container" onClick={closeModalToken}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
            </div>

            {!isLoading ?
                <form onSubmit={handleSendToken}>
                    <input
                        type="text"
                        className={getClassInvalidToken()}
                        onChange={handleChangeToken}
                        value={token}
                    />
                    {isInvalid && <span>Token Inválido!</span>}
                    <button type="submit" className={getClassActiveBtn()}>
                        <img src={flecha}></img>
                    </button>

                </form>
                :
                <Loading>
                    <img src='./loading.svg' alt='SSI 2022 - Loading' />
                </Loading>
            }

            <span className='modal-token corner-1' />
            <span className='modal-token corner-2' />
            <span className='modal-token corner-3' />
            <span className='modal-token corner-4' />
            <span className='modal-token corner-5' />
            <span className='modal-token corner-6' />
            <span className='modal-token corner-7' />
            <span className='modal-token corner-8' />
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
    background-color: #151023;
    border: 1px solid white;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 32px 32px 32px 32px;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;

    margin-top: 10px;

    position: relative;

    --glow-btn: 0px 0px 16px 12px rgba(121, 61, 174, 0.5);

    .active-btn {
        box-shadow: var(--glow-btn);
    }

    .close-container {
        position: absolute;
        display: flex;
        align-items: top;
        justify-content: center;
        right: 0.5rem;
        top: 0.5rem;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 2;
    }

    .leftright{
        height: 4px;
        width: 2rem;
        position: absolute;
        margin-top: 24px;
        background-color: #fff;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }

    .rightleft{
        height: 4px;
        width: 2rem;
        position: absolute;
        margin-top: 24px;
        background-color: #fff;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }

    .close-container:hover .leftright {
        transform: rotate(-45deg);
        background-color: #8744C2;
    }
    .close-container:hover .rightleft {
        transform: rotate(45deg);
        background-color: #8744C2;
    }

    .modal-token {
        width: 50px;
        height: 50px;
        margin: 4px;
        border-style: solid;
        border-color: white;
        position: absolute;
    }

    .modal-token.corner-1 {
        border-width: 1px 0 0 1px;
        top: 0;
        left: 0;
    }

    .modal-token.corner-2 {
        border-width: 1px 1px 0 0;
        top: 0;
        right: 0;
    }

    .modal-token.corner-3 {
        border-width: 0 1px 1px 0;
        bottom: 0;
        right: 0;
    }

    .modal-token.corner-4 {
        border-width: 0 0 1px 1px;
        bottom: 0;
        left: 0;
    }

    .modal-token.corner-5 {
        border-width: 1px 0 0 1px;
        top: 5px;
        left: 5px;
    }

    .modal-token.corner-6 {
        border-width: 1px 1px 0 0;
        top: 5px;
        right: 5px;
    }

    .modal-token.corner-7 {
        border-width: 0 1px 1px 0;
        bottom: 5px;
        right: 5px;
    }

    .modal-token.corner-8 {
        border-width: 0 0 1px 1px;
        bottom: 5px;
        left: 5px;
    }

    &:before {
        width: 90px;
        height: calc(100% - 10px);
        position: absolute;
        margin: 4px 0;
        border-style: solid;
        border-width: 1px 0;
        border-color: white;
        top: 0;
        content: '';
    }

    h3 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 2.25rem;
        letter-spacing: 0.05em;
        color: white;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

        span {
            margin-top: 4px;
            color: #FF4D4D;
        }
    }

    input[type=text] {
        text-align: center;

        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 2rem;
        letter-spacing: 0.05em;
        color: white;

        z-index: 1;

        width: 100%;
        padding: 8px 16px;

        background-color: #392055;
        border: 1px solid white;

    }

    input[type=text].invalid-token {
        border-color: #FF4D4D;
    }

    button {
        display: flex;
        align-self: flex-end;
        padding: 19px 9px;
        padding: 1.3rem 1rem;
        background-color: #151023;
        border: 1px solid #8744C2;
        border-radius: 0;
        transform-style: preserve-3d;
        transition: 0.3s;
        z-index: 2;

        margin: 24px 0 0 0;
        position: relative;
        img {
            align-self: center;
            width: 36px;
        }
        &:before {
            --var-width: calc(100% - 14px);
            background-color: rgba(121, 61, 174, 0.5);

            transform: translateZ(-1px);
            position: absolute;
            width: var(--var-width);
            height: calc(100% + 14px);
            border: 1px solid #8744C2;

            left: calc(49% - var(--var-width) / 2);
            top: -8px;

            text-align: center;
            content: '';
        }

        &:hover {
            box-shadow: var(--glow-btn);
        }
    }

    @media (min-width:600px) {
        padding: 32px 10% 64px 10%;
        width: 90%;
        max-width: 650px;

        form {
            flex-direction: row;
            align-items: center;

            position: relative;
            span {
                position: absolute;
                left: 0;
                bottom: -1.5em;
            }
        }

        button {
            margin-top: 0;
            margin-left: 16px;
            align-self: center;
        }
    }
`
