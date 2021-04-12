import React from 'react'
import { Icon } from "@material-ui/core";
import rocketImage from './../../images/start-up.svg'

export default function RocketIcon() {
    return (
        <Icon>
            <img src={rocketImage} height={25} width={25}/>
        </Icon>
    )
}