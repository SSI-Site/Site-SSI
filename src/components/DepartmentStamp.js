import styled from 'styled-components';
import semana from '../../utils/semana';

/**
 * A estilização nos estados de hover e active devem ser estabelecidos no arquivo 
 * que chama o componente, pois há seções em que esta componente é estático
 */

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
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-neutral-800);
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    gap: 1rem;
    transition: 0.3s all ease;

    p {
        font: 700 1rem/1.25rem 'AT Aero Bold';
        text-align: left;
    }

    img {
        width: 1.5rem;
        width: 20px;
    }

    @media (min-width: 840px) {

        p {
            font: 700 1.125rem/1.5rem 'AT Aero Bold';
        }
    }
`