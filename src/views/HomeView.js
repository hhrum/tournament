import React, {useState} from 'react'
import { View } from '@vkontakte/vkui'

import Home from '../panels/Home'
import Match from '../panels/Match'

function HomeView({ id }) {
    const [activePanel, setActivePanel] = useState("match")

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to)
    }
    
    return (
        <View id={id} activePanel={activePanel} >
            <Home id="home" go={go} />
            <Match id="match" go={go} />
        </View>
    )
}

export default HomeView