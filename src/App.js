import React, { useState } from 'react';
import { View, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28GameOutline, Icon28HomeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import Home from './panels/Home';
import Profile from './panels/Profile';
import MyEvents from './panels/MyEvents';

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
                    selected={activeStory === 'my_events'}
                    data-story="my_events"
                ><Icon28GameOutline/></TabbarItem>
                <TabbarItem
                    onClick={(e) => setActiveStory(e.currentTarget.dataset.story)}
                    selected={activeStory === 'profile'}
                    data-story="profile"
                ><Icon28Profile /></TabbarItem>
            </Tabbar>
        }>
            <View id="home" activePanel="home">
                <Home id="home" />
            </View>
            <View id="my_events" activePanel="my_events">
                <MyEvents id="my_events" />
            </View>
            <View id="profile" activePanel="profile">
                <Profile id="profile" />
            </View>
        </Epic>
    );
}

export default App;
