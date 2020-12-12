import React, { useState, useEffect } from 'react';
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28GameOutline, Icon28HomeOutline, Icon28LikeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import UserInfoContext from './contexts/UserInfoContext';

import HomeView from './views/HomeView'
import FavoriteEventsView from './views/FavoriteEventsView';
import ProfileView from './views/ProfileView';

function App() {
    const [activeStory, setActiveStory] = useState("home");
    const [userInfoContext, setUserInfoContext] = useState({});

    useEffect(() => {
        bridge.send('VKWebAppInit');
        bridge.send("VKWebAppGetUserInfo");

        fetch("")
            .then((response) => {
                console.log(response)
            })
    }, [])

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    bridge.subscribe((e) => {
        switch (e.detail.type) {
            case "VKWebAppGetUserInfoResult":
                setUserInfoContext(e.detail.data)
                break;
            default:
                console.log(e)
                break;
        }
    });


    return (
        <UserInfoContext.Provider value={userInfoContext}>
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
        </UserInfoContext.Provider>
    );
}

export default App;
