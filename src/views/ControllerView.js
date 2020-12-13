import { View } from '@vkontakte/vkui'
import React from 'react'
import Controller from '../panels/Controller'

function ControllerView({id, activePanel}) {
    return (
        <View
            id={id}
            activePanel={activePanel}>
            <Controller id="controller" />
        </View>
    )
}

export default ControllerView