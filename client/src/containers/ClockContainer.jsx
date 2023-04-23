import React from 'react'
import { ClockComponent } from '../components'

const ClockContainer = ({time}) => {
    return (
        <div>
            <ClockComponent time={time}/>
        </div>
    )
}

export default ClockContainer
