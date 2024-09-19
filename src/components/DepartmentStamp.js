import styled from 'styled-components';

const DepartmentStamp = ({ name, icon }) => {

    return (
        <DepartmentWrapper>
            <p>{name}</p>
            {icon &&
                <img src={icon}></img>
            }
        </DepartmentWrapper>
    )
}

export default DepartmentStamp;


const DepartmentWrapper = styled.div`
    width: 14rem;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-neutral-800);
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 100ms;

    background-size: 200%;
    background-position-x: 200%;
    background-repeat: no-repeat;

    p {
        font: 700 1rem/1.25rem 'AT Aero Bold';
        text-align: left;
    }

    img {
        width: 1.5rem;
    }
`