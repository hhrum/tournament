import React, {useState} from 'react'
import { View } from '@vkontakte/vkui'

import Home from '../panels/Home'
import Match from '../panels/Match'
import Tournament from '../panels/Tournament'

function HomeView({ id }) {
    const [activePanel, setActivePanel] = useState("home")
    const [popout, setPopout] = useState(null)

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to)
    }
    
    return (
        <View popout={popout} id={id} activePanel={activePanel} >
            <Home id="home" go={go} />
            <Match id="match" go={go} setPopout={setPopout} />
            <Tournament id="tournament" go={go} />
        </View>
    )
}

export default HomeView