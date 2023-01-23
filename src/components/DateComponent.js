import styled from 'styled-components';

/*
A variável 'size' representa uma String que descreve o tamanho do DateComponent.
Pode ser "small", "medium" ou "large".
Quando o DateComponent especificado for "large", o tamanho varia de acordo com medidas pré-definidas.
ex de uso: <DateComponent size="large" day="01" weekDay="Domingo" />
*/
const DateComponent = ({ day, weekDay, size }) => {

    return (

        <DateWrapper>
            <DateStyle className={`date-style-${size}`}>
                <h2 className='day'>{day}</h2>
                <div className='week-day'>{weekDay}</div>
            </DateStyle>
        </DateWrapper>

    )

}

export default DateComponent;


const DateStyle = styled.div`

    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1.34146px solid #8744C2;
    box-sizing: border-box;
    margin-bottom: 50px;
    background-color: #151023;

    :before {
        width: 110px;
        height: 110px;
        content: '';
        position: absolute;
        border: 1.34146px solid #8744C2;
        box-sizing: border-box;
        transform: rotate(-45deg);
        transition: transform 0.5s;
    }

    .day {
        font-family: 'Plaza';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;

        color: #FFFFFF;
    }

    .week-day {
        position: absolute;
        width: 146px;
        height: 23.38px;
        display: flex;
        justify-content:center;
        align-items: center;
        background: rgba(135, 68, 194, 0.4);
        border: 2px solid #8744C2;
        box-sizing: border-box;
        transform: translateY(40px);
        font-family: 'Plaza';
        font-style: normal;
        font-size: 16.2241px;

        text-align: center;

        color: #FFFFFF;
    }

    :hover::before {
        transform: rotate(0deg);
        transition: transform 0.5s;
    }


`

const DateWrapper = styled.div`

    .date-style-medium {
        width: 185px;
        height: 185px;

        :before {
            width: 170px;
            height: 170px;
        }

        .day {
            font-size: 80px;
        }

        .week-day {
            width: 216px;
            height: 34.59px;
            transform: translateY(60px);
            font-size: 19px;
        }
    }

    .date-style-large {
        width: 300px;
        height: 300px;

        :before {
            width: 280px;
            height: 280px;
        }

        .day {
            font-size: 120px;
        }

        .week-day {
            width: 332px;
            height: 50px;
            transform: translateY(105px);
            font-size: 24px;
        }
    }
`