import styled, { css } from 'styled-components';

const DepartmentStamp = ( { name, itemColor, $active } ) => {

    return (
        <DepartmentWrapper itemColor={itemColor} $active={$active}>
            <p>{name}</p>
        </DepartmentWrapper>
    );
};

export default DepartmentStamp;

const DepartmentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: 0.15s;

    ${props => props.$active === false && css`
        p {
            text-align: center;
            color: var(--background-neutrals-primary);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${props.itemColor};
            font: 300 4rem/3.5rem 'AT Aero Bold';
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
            font: 300 4rem/3.5rem 'AT Aero Bold';
        }
    `}

    @media (min-width:801px) {
        p {
            -webkit-text-stroke-width: 2px;
            font: 300 8rem/7rem 'AT Aero Bold';
        }
    }
`;
