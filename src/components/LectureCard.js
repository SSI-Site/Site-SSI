import styled from "styled-components";
import BadgeCO from './BadgeCO'

const LectureCard = ({ dataPalestra, tituloPalestra, metadata }) => {
    return (
        <PalestraContainer>
            <PalestraData>
                {dataPalestra}
            </PalestraData>

            <PalestraTitulo>
                {tituloPalestra}
            </PalestraTitulo>

            <PalestraTags>
                {
                    metadata.presencial && (
                        <BadgeCO text={"Presencial"} themeIndex={6}/>
                    )
                }
            </PalestraTags>
        </PalestraContainer>
    )
}

export default LectureCard;

const PalestraContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: 1px solid var(--outline-neutrals-primary, #808080);
    transition: all 0.2 ease-in-out;

&:hover{
    background-color: var(--color-primary)
}
`;

const PalestraData = styled.p`
    font-weight: 500;
`;

const PalestraTitulo = styled.h5`
    font-weight: 500;
    margin-top: 0;
`;

const PalestraTags = styled.div`
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
`;