import React, { useState } from 'react';
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28GameOutline, Icon28HomeOutline, Icon28LikeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import HomeView from './views/HomeView'
import FavoriteEventsView from './views/FavoriteEventsView';
import ProfileView from './views/ProfileView';

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
                >
                    <Icon28HomeOutline />
                </TabbarItem>

                <TabbarItem
                    onClick={(e) => setActiveStory(e.currentTarget.dataset.story)}
                    selected={activeStory === 'favorite_events'}
                    data-story="favorite_events"
                >
                    <Icon28LikeOutline />
                </TabbarItem>

                <TabbarItem
                    selected={activeStory === 'game'}
                    data-story="game"
                >
                    <Icon28GameOutline />
                </TabbarItem>

                <TabbarItem
                    onClick={(e) => setActiveStory(e.currentTarget.dataset.story)}
                    selected={activeStory === 'profile'}
                    data-story="profile"
                >
                    <Icon28Profile />
                </TabbarItem>
            </Tabbar>
        }>
            <HomeView id="home" />
            <FavoriteEventsView id="favorite_events" />
            <ProfileView id="profile" />
        </Epic>
    );
}

export default App;
