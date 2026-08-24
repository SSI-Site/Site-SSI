import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Button from '../../ui/Button';
import ScheduleShift from './ScheduleItems';
import saphira from '../../../../services/saphira';
import filterTalks from '../../../../utils/filterTalks';
import { eventDetails } from '../../../../data/eventDetails';

const ScheduleSection = () => {
    const router = useRouter();
    const [schedule, setSchedule] = useState([]);

    const getSchedule = async() => {
        try {
            const { data } = await saphira.getTalks()
            if (data) {
                setSchedule(data)
            }
        } catch(err) {
            console.log('Houve um erro na hora de obter os dados', err)
        }
    }

    useEffect(() => {
        getSchedule()
    }, [])

    const current = new Date();
    const firstEventDay = eventDetails.logic.startJS; 
    const lastEventDay = eventDetails.logic.endJS; 
    lastEventDay.setHours(23, 59, 59, 999); 

    // Se o evento já acabou, não renderiza a seção
    if (current > lastEventDay) return null;

    const todayDate = current.toLocaleDateString('pt-br').split('/').reverse().join('-');
    const isEventDay = current >= firstEventDay && current <= lastEventDay;
    const formattedScheduleDate = isEventDay ? todayDate : eventDetails.logic.fallbackString;

    const currentTime = current.getHours().toString().padStart(2, '0') + ":" + current.getMinutes().toString().padStart(2, '0');

    const minutesAfterMidNight = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const currentTimeMinutes = minutesAfterMidNight(currentTime);

    // Filtra todas as palestras do dia selecionado
    const todaysTalks = filterTalks(schedule, formattedScheduleDate);
    // Lógica "Agora e a Seguir"
    let nowAndNextTalks = [];

    if (isEventDay) {
        // Durante o evento: filtra pelo horário atual
        nowAndNextTalks = todaysTalks.filter((talk) => {
            // Pega o horário da palestra (assumindo formato contendo "T14:30:00")
            const talkStartMinutes = minutesAfterMidNight(talk.start_time.split("T")[1]);
            
            // Mantém palestras que começaram nos últimos 60 minutos (estão rolando) ou no futuro
            return talkStartMinutes >= (currentTimeMinutes - 60);
        }).slice(0, 5); // Limita para mostrar apenas a atual e as próximas duas
    } else {
        // Antes do evento: mostra as 3 primeiras atividades do dia de fallback
        nowAndNextTalks = todaysTalks.slice(0, 3);
    }

    // Se não houver palestras para exibir, esconde a seção inteira
    if (nowAndNextTalks.length === 0) {
        return null;
    }

    return (
        <SectionWrapper>
            <div className='schedule-container'>
                <h3 className='title-mobile schedule-section-title'>Próximas atividades</h3>
                
                <div className='title-btn-desktop'>
                    <h3 className='schedule-section-title'>Próximas atividades</h3>
                </div>

                <ScheduleShift
                    schedule={nowAndNextTalks}
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
            width: fit-content;
            padding: 0.75rem 1rem;
            color: var(--content-neutrals-fixed-white);
            background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
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
                align-items: end;
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