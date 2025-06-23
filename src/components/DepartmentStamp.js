import styled, { css } from 'styled-components';

const DepartmentStamp = ( { name, itemColor, $active } ) => {

    return (
        <DepartmentWrapper name={name} itemColor={itemColor} $active={$active}>
            <p>{name}</p>
        </DepartmentWrapper>
    );
};

export default DepartmentStamp;

const DepartmentWrapper = styled.div`
    max-width: 21.3rem;   // "Infraestrutura"
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    transition: 0.15s;    

    ${props => props.$active === false && css`
        p {
            text-align: center;
            color: var(--background-neutrals-primary);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${props.itemColor};
            -webkit-line-clamp: 2;
            font: 400 3rem/3rem 'AT Aero Bold';
        }

        p:hover {
            color: ${props.itemColor};
        }
    `}

    ${props => (props.$active || props.$hover) === true && css`
        p {
            text-align: center;
            color: ${props.itemColor};
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${props.itemColor};
            -webkit-line-clamp: 2;
            font: 400 3rem/3rem 'AT Aero Bold';
        }
    `}

    @media (min-width:801px) {
    max-width: fit-content;

        p {
            -webkit-text-stroke-width: 2px;
            -webkit-line-clamp: 1;
            font: 400 6rem/6rem 'AT Aero Bold';
        }
    }
`;
