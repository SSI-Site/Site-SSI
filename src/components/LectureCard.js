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
                        <PalestraTag>
                            Presencial
                        </PalestraTag>
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

const PalestraTag = styled.span`
    font-weight: 400;
    color: var(--color-neutral-50);
    background: var(--background-badge-brand-purple-500, #9638FF);
    padding: 0.25rem 0.5rem;
    // ALREADY EXISTS
`;