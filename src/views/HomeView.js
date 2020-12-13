import React from 'react'
import { View } from '@vkontakte/vkui'

import Home from '../panels/Home'
import Match from '../panels/Match'
import Tournament from '../panels/Tournament'

function HomeView({ id, activePanel, history, go, goBack }) {

    return (
        <View
            id={id}
            activePanel={activePanel} 
            history={history}
            onSwipeBack={goBack}>
            <Home id="home" view={id} go={go} />
            <Match id="match" view={id} go={go} goBack={goBack} />
            <Tournament id="tournament" view={id} go={go} goBack={goBack} />
        </View>
    )
}

export default HomeView