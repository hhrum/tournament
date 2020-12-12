import React, {useState} from 'react'
import { View } from '@vkontakte/vkui'

import Home from '../panels/Home'

function HomeView({ id }) {
    const [activePanel, setActivePanel] = useState("home")

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to)
    }
    
    return (
        <View id={id} activePanel={activePanel} >
            <Home id="home" go={go} />
        </View>
    )
}

export default HomeView