import React, { useState } from 'react';
import { View, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28HomeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import Home from './panels/Home';

function App() {
    const [activeStory, setActiveStory] = useState("home");

    bridge.send('VKWebAppInit');

    return (
        <Epic activeStory={activeStory} tabbar={
            <Tabbar>
                <TabbarItem
                    onClick={(e) => setActiveStory(e.currentTarget.dataset.story)}
                    selected={activeStory === 'home'}
                    data-story="home"
                ><Icon28HomeOutline /></TabbarItem>
                <TabbarItem
                    onClick={(e) => setActiveStory(e.currentTarget.dataset.story)}
                    selected={activeStory === 'profile'}
                    data-story="home"
                ><Icon28Profile /></TabbarItem>
            </Tabbar>
        }>
            <View id="home" activePanel="home">
                <Home id="home" />
            </View>
        </Epic>
    );
}

export default App;
