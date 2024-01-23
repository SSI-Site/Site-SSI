import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';

// components
import Working from '../src/components/Working';
import Example from '../src/components/Example';

const HackSSI = () => {

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getActivity();
        setExample(res.activity);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <Meta title='SSI 2024 | HackSSI' />
            
            <ExampleSection>
                <h1>HackSSI</h1>
                <p>
                    <b>Frase aleatória:</b> '{example}'
                </p>
                <Working />
                <Example />
            </ExampleSection>
        </>
    )
}

export default HackSSI;


const ExampleSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;

    p {
        margin-block: 3rem 0;
    }
`