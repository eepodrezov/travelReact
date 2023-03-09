import { roads } from '../../data'

export function isCityInRoad(city, road) {
    return city.toLowerCase() === road.a.toLowerCase()
    || city.toLowerCase() === road.b.toLowerCase()
}

export function getRoadFromList(cityA, cityB) {
    let result = 'noCity'
    roads.forEach(road => {
        if (isCityInRoad(cityA, road) && isCityInRoad(cityB, road)) result = road
    })
    return result
}

export function formatTime(time) {
    if (time) {
        const splitedTime = time.split(':')
        const hours = splitedTime[0]
        const minutes = splitedTime[1]
        const minutesWithSuffix = minutes ? minutes + ' минут' : ''
        return hours + getHoursSuffix(+hours) + ' ' + minutesWithSuffix
    }
}

function getHoursSuffix(hours) {
    if (hours % 10 === 1) return ' час'
    if (+hours >= 5 && +hours < 20) return ' часов'
    const chasaArr = [2,3,4]
    if (chasaArr.includes(+hours % 10)) return ' часa'
    const chasovArr = [5,6,7,8,9,0]
    if (chasovArr.includes(+hours % 10)) return ' часов'

}