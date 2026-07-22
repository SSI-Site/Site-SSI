import { useEffect, useState } from 'react';
import styled from 'styled-components';

import saphira from '../services/saphira';
import Meta from '../src/infra/seo/Meta';

// components
import Example from '../src/components/features/example/Example';
import Working from '../src/components/features/example/Working';

const ExamplePage = () => {

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getActivity();
        setExample(res);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <Meta title='SSI 2024 | Exemplo' />
            
            <ExampleSection>
                <h1>Exemplo</h1>
                <p className='random-phrase'>
                    <b>Frase aleatória:</b> '{example}'
                </p>
                <Working />
                <Example />
            </ExampleSection>
        </>
    )
}

export default ExamplePage;


const ExampleSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;

    .random-phrase {
        margin-block: 3rem 0;
    }
`
