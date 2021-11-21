import React from 'react';

import Clear from '../assets/icons/Fontiso_Icons/Clear_Sky.svg'
import Clouds from '../assets/icons/Fontiso_Icons/Few_Clouds.svg'
import Thunderstorm from '../assets/icons/Fontiso_Icons/Thunderstorm.svg'
import Mist from '../assets/icons/Fontiso_Icons/Mist.svg'
import Snow from '../assets/icons/Fontiso_Icons/Snow.svg'
import Rain from '../assets/icons/Fontiso_Icons/Rain.svg'
import Drizzle from '../assets/icons/Fontiso_Icons/Shower_Rains.svg'


interface Props {
    iconCode: string
    width: number
    height: number
}

const WeatherIcon = (props: Props) => {
    switch(props.iconCode) {
        case '11d': return <Thunderstorm width = {props.width} height={props.height}/>
        case '09d': return <Drizzle width = {props.width} height={props.height}/>
        case '10d': return <Rain width = {props.width} height={props.height} />
        case '13d': return <Snow width = {props.width} height={props.height}/>
        case '50d': return <Mist width = {props.width} height={props.height}/>
        case '01n':
        case '01d': return <Clear width = {props.width} height={props.height}/>
        case '02d':
        case '02n': return <Clouds width = {props.width} height={props.height}/>
        default: return <Clouds width = {props.width} height={props.height}/>
    }
}

export default WeatherIcon;