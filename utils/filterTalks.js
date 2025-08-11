export default function filterTalks(talks, activeItem){
    const byDay = talks.filter((talk) => talk.start_time.includes(activeItem))
    const byHours = byDay.sort((a, b) => {
        const [hourA, minuteA] = a.start_time.split("T")[1].split(":").map(Number)
        const [hourB, minuteB] = b.start_time.split("T")[1].split(":").map(Number)

        return hourA * 60 + minuteA - (hourB * 60 + minuteB)
    })

    return byHours
}
