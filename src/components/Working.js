import styled from 'styled-components';
import working from '../../public/images/working.gif'

const WorkingWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 50px 0 50px 0;
    width: 80%;
    padding-top: 100px;

    img{
        width: 100%;
    }
`

const Working = () =>{
    return(
        <>
            <WorkingWrapper>
                <h1>We r still working on it!! ¯\_(ツ)_/¯</h1>
                <figure>
                    <img src={working} alt="tartarugas Mario" />
                </figure>
            </WorkingWrapper >
        </>
    )
}

export default Working;
