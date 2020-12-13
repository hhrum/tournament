import React, { useState } from 'react'
import { View } from '@vkontakte/vkui'

import Home from '../panels/Home'
import Match from '../panels/Match'
import Tournament from '../panels/Tournament'

function HomeView({ id }) {

    const [panelsStory, setPanelsStory] = useState(["home"])
    const [activePanel, setActivePanel] = useState("home")

    const go = (e) => {
        var newPanelsStory = panelsStory
        newPanelsStory.push(e.currentTarget.dataset.to);
        setPanelsStory(newPanelsStory)

        setActivePanel(newPanelsStory[newPanelsStory.length - 1])
    }

    const goBack = () => {
        var newPanelsStory = panelsStory
        newPanelsStory.pop()
        setPanelsStory(newPanelsStory)

        setActivePanel(newPanelsStory[newPanelsStory.length - 1])
    }

    return (
        <View id={id} activePanel={activePanel} >
            <Home id="home" go={go} />
            <Match id="match" go={go} goBack={goBack} />
            <Tournament id="tournament" go={go} goBack={goBack}  />
        </View>
    )
}

export default HomeView