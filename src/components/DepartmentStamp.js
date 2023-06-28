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
            <img src={icon}></img>
        </DepartmentWrapper>
    )
}

export default DepartmentStamp;


const DepartmentWrapper = styled.div`
    width: 14rem;
    height: 4.75rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-neutral-800);
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.3s all ease;

    p {
        font: 400 1rem/1.25rem 'Space_Mono_Bold';
        text-align: left;
    }

    img {
        width: 1.5rem;
    }

    @media (min-width: 840px) {

        p {
            font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
        }
    }
`