import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';
import useAuth from '../hooks/useAuth';

//components
import Working from '../src/components/Working'
import Button from '../src/components/Button';

const User = () => {

    const { user, signOut } = useAuth();

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getCatFact();
        setExample(res.fact);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    if (!document.cookie || !document.cookie.includes('ssi-site-auth')) {
                        window.location.href = "/"
                    }
                `
            }} />

            <Meta title='SSI 2022 | Seu Perfil' />
            <ExampleSection>
                <h1>Pág do usuário</h1>
                <p>{example}</p>

                { user ?
                    <img className='userPic' src={user.photoUrl} alt="user picture" />
                :
                    <h2>loading ...</h2>
                }

                <Button onClick={signOut}>Sair</Button>

                <Working />
            </ExampleSection>
        </>
    )
}

export default User;

const ExampleSection = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 100px;

    p {
        width: 80%;
        max-width: 500px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 80px;
    }

    .userPic {
        border-radius: 100%;
        min-width: 150px;
        width: 10%;
        margin-bottom: 50px;
    }
`