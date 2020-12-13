import React, { useContext } from 'react'
import { View } from '@vkontakte/vkui'

import UserInfoContext from '../contexts/UserInfoContext'

import Home from '../panels/Home'
import Match from '../panels/Match'
import Tournament from '../panels/Tournament'
import Achievements from '../panels/Achievements'

function HomeView({ id, activePanel, history, popout, go, goBack }) {
    const {user_achievements} = useContext(UserInfoContext)
    return (
        <View
            id={id}
            activePanel={activePanel} 
            history={history}
            popout={popout}
            onSwipeBack={goBack}>
            <Home id="home" view={id} go={go} />
            <Match id="match" view={id} go={go} goBack={goBack} />
            <Tournament id="tournament" view={id} go={go} goBack={goBack} />
            <Achievements id="achievements" user_achievements={user_achievements} view={id} goBack={goBack} />
        </View>
    )
}

export default HomeView