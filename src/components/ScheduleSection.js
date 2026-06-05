import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Button from './Button';
import ScheduleShift from './ScheduleItems';
import saphira from '../../services/saphira';
import filterTalks from '../../utils/filterTalks';
import { eventDetails } from '../../data/eventDetails';

const ScheduleSection = () => {
    const router = useRouter();
    const [schedule, setSchedule] = useState([]);

    const getSchedule = async() => {
        try{
            const { data } = await saphira.getTalks()
            if (data) {
                setSchedule(data)
            }
        }
        catch(err){
            console.log('Houve um erro na hora de obter os dados', err)
        }
    }

    useEffect(() => {
        getSchedule()
    }, [])

    const firstEventDay = new Date(2025, 7, 18);
    const lastEventDay = new Date(2025, 7, 22);
    lastEventDay.setHours(23, 59, 59, 999);  // define para o final do dia (23:59:59.999)

    // MOCK DE DATA PARA TESTES LOCAIS:
    //const current = new Date(2025, 7, 21); 
    const current = new Date(); 

    const currentTime = current.getHours().toString().padStart(2, '0') + ":" + current.getMinutes().toString().padStart(2, '0')

    const day = `${current.getDate()}`;

    const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? day : '18');
    const todayDate = current.toLocaleDateString('pt-br').split('/').reverse().join('-');
    // se a data atual estiver entre o primeiro e o ultimo dia do evento, use a data atual, caso contrario, use a data do primeiro dia do evento (fallback)
    const formattedScheduleDate = current >= firstEventDay && current <= lastEventDay ? todayDate : eventDetails.logic.fallbackString;

    const filterEventDays = eventDetails.logic.filterEventDays;
    const filterEventDaysId = scheduleDay - firstEventDay.getDate();

    // transforma 00:00 em minutos depois da meia noite para fazer calculos
    const minutesAfterMidNight = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const currentTimeMinutes = minutesAfterMidNight(currentTime); // horario atual
    const morningEnd = minutesAfterMidNight("12:00"); 
    const eveningEnd = minutesAfterMidNight("18:00"); 

    let shift = "Manhã"; 
    if (current >= firstEventDay) {
        if (currentTimeMinutes >= morningEnd && currentTimeMinutes < eveningEnd) {
            shift = "Tarde";
        } else if (currentTimeMinutes >= eveningEnd) {
            shift = "Noite";
        }
    }

    // Array intermediario com de horario e atividades
    const filteredArray = schedule.filter((array) => {
        const scheduleStartTimeMinutes = minutesAfterMidNight(array.start_time.split("T")[1]); // Horário de cada atividade
        switch (shift) {
            case "Manhã":
                return scheduleStartTimeMinutes < morningEnd;
            case "Tarde":
                return scheduleStartTimeMinutes > morningEnd && scheduleStartTimeMinutes < eveningEnd;
            case "Noite":
                return scheduleStartTimeMinutes > eveningEnd;
            default:
                return false;
        }
    })

    const filteredSchedule = filterTalks(filteredArray, formattedScheduleDate)

    if (current > lastEventDay) return null;

    return (
        <SectionWrapper>
            <div className='schedule-container'>
                <h3 className='title-mobile schedule-section-title'>Próximas atividades</h3>
                <div className='title-btn-desktop'>
                    <h3 className='schedule-section-title'>Próximas atividades</h3>
                    <Button type="button" aria-label="Ver programação completa" onClick={() => router.push('/schedule')}>Ver programação completa</Button>
                </div>
                <div className='filter-bar-container filter-bar-mobile'>
                    <p>Dia {filterEventDaysId + 1} - {filterEventDays[filterEventDaysId]}</p>
                    <p>{shift}</p>
                </div>

                <div className='filter-bar-container filter-bar-desktop'>
                    <div className='subtitle'>
                        <p>Horário</p>
                        <p>Atividade</p>
                    </div>

                    <div>
                        <p>Dia {filterEventDaysId + 1} - {filterEventDays[filterEventDaysId]}</p>
                    </div>

                    <div>
                        <p>{shift}</p>
                    </div>
                </div>

                <ScheduleShift
                    schedule={filteredSchedule}
                />
                <div className='btn-mobile'>
                    <Button onClick={() => router.push('/schedule')}>Ver programação completa</Button>
                </div>
            </div>
            </SectionWrapper>
    );
};

export default ScheduleSection;

const SectionWrapper = styled.section`
    padding-block: 2rem;
    border-top: 1px solid var(--outline-neutrals-secondary);
    
    .schedule-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .schedule-section-title {
            background-color: var(--brand-primary);
            padding: 0.75rem 1.5rem 0.75rem 1.5rem;
            color: var(--content-neutrals-fixed-white);
        }

        .title-mobile {
            display: flex;
            flex-direction: row;
            background-color: var(--brand-primary);
            padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        }

        .title-btn-desktop {
            display: none;
        }

        .filter-bar-container {
            height: fit-content;
            padding-block: 1rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            box-shadow: 0 -0.0625rem 0 0 var(--background-neutrals-secondary);
            border-bottom: 0.0625rem solid var(--outline-neutrals-secondary);

            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
            }
        }

        .filter-bar-mobile {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: -1rem;

            @media (min-width: 1024px) {
                display: none;
            }
        }

        .filter-bar-desktop {
            margin-bottom: -2rem;

            @media (max-width: 1023px) {
                display: none;
            }

            justify-content: space-between;
            
            .subtitle {
                display: flex;
                gap: 6.31rem;
            }
        }

        .date-stamp {
            > div {
                background-color: var(--brand-primary);
            }
        }

        .btn-mobile {
            width: 100%;
        }
    }

    @media (min-width:1021px) {
        padding-block: 4.5rem 2rem;

        .schedule-container {
            gap: 1.5rem;
            align-items: flex-start;

            .title-mobile {
                display: none;
            }

            .title-btn-desktop {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                button {
                    width: fit-content;
                }
            }

            .btn-mobile {
                display: none;
            }
        }
    }
`;