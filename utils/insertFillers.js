export const insertBetween = (talks) => {
    const result = [];
    for (let i = 0; i < talks.length; i++){
        result.push(talks[i]);
        if (i < talks.length - 1){
            result.push({
                title: "Intervalo", 
                speakers: null,
                start_time: talks[i].end_time,
                end_time: talks[i + 1].start_time
            })
        }
    }

    return result;
}

