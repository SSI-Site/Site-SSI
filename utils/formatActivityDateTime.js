import { formatTime } from "./format-time";
import meses from "./meses";
import semana from "./semana";

// Função que recebe os dateTime de início e fim e retorna a string no formato 'Sexta-feira, 22 de Agosto, 11h00-11h50'
const formatActivityDateTime = ({ start_time, end_time }) => {
    const startDate = new Date(start_time);

    const weekDay = semana[startDate.getDay()];
    const day = startDate.getDate();
    const month = meses[startDate.getMonth()];

    return `${weekDay}, ${day} de ${month}, ${formatTime(start_time)}-${formatTime(end_time)}`;
};

export default formatActivityDateTime;