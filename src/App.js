import React, { useState, useEffect } from 'react';
import { ConfigProvider, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28GameOutline, Icon28HomeOutline, Icon28LikeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import UserInfoContext from './contexts/UserInfoContext';

import HomeView from './views/HomeView'
import FavoriteEventsView from './views/FavoriteEventsView';
import ProfileView from './views/ProfileView';

function App() {

    const [userInfoContext, setUserInfoContext] = useState({});

    const [activeStory, setActiveStory] = useState("home");

    const [panelsStory, setPanelsStory] = useState({
        home: ["home"],
        favorite_events: ["favorite"],
        profile: ["profile"]
    })
    const [activePanel, setActivePanel] = useState(panelsStory.home[panelsStory.home.length - 1])

    /// Обновляет историю панель через callback
    const updatePanelsStory = (view, editor) => {
        var newPanelsStory = panelsStory

        var newLineStory = newPanelsStory[view]
        newLineStory = editor(newLineStory)
        newPanelsStory[view] = newLineStory

        setPanelsStory(newPanelsStory)

        setActivePanel(newLineStory[newLineStory.length - 1])
    }

    /// Переход на другую панель
    const go = (e) => {
        updatePanelsStory(e.currentTarget.dataset.view, (line) => {
            window.history.pushState({ panel: e.currentTarget.dataset.to }, e.currentTarget.dataset.to)
            line.push(e.currentTarget.dataset.to)
            return line
        })
    }

    /// Возврат к прошлой
    const goBack = (e) => {
        const view = e ? e.currentTarget.dataset.view : activeStory
        updatePanelsStory(view, (line) => {
            if (line.length !== 0) line.pop()
            else bridge.send("VKWebAppClose", { "status": "success" });

            return line
        })
    }

    /// Меняем view
    const changeActiveTabbar = (e) => {
        const story = e.currentTarget.dataset.story
        if (story === activeStory) {
            updatePanelsStory(story, (line) => {
                return [line[0]]
            })
        }

        setActivePanel(panelsStory[story][panelsStory[story].length - 1])
        setActiveStory(story)
    }

    useEffect(() => {
        window.addEventListener('popstate', () => goBack());
        bridge.send('VKWebAppInit');
        bridge.send("VKWebAppGetUserInfo");
    }, [])

    // async function postData(url = '', data = {}) {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     });
    //     return await response.json();
    // }

    useEffect(() => {
        bridge.send('VKWebAppInit');
        bridge.send("VKWebAppGetUserInfo");

        fetch("")
            .then((response) => {
                console.log(response)
            })
    }, [])

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
        <ConfigProvider isWebView={true}>
            <UserInfoContext.Provider value={userInfoContext}>
                <Epic activeStory={activeStory} tabbar={
                    <Tabbar>
                        <TabbarItem
                            onClick={(e) => changeActiveTabbar(e)}
                            selected={activeStory === 'home'}
                            data-story="home"
                        >
                            <Icon28HomeOutline />
                        </TabbarItem>

                        <TabbarItem
                            onClick={(e) => changeActiveTabbar(e)}
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
                            onClick={(e) => changeActiveTabbar(e)}
                            selected={activeStory === 'profile'}
                            data-story="profile"
                        >
                            <Icon28Profile />
                        </TabbarItem>
                    </Tabbar>
                }>

                    <HomeView
                        id="home"
                        activePanel={activePanel}
                        history={panelsStory.home}
                        go={go}
                        goBack={goBack} />
                    <FavoriteEventsView
                        id="favorite_events"
                        activePanel={activePanel}
                        history={panelsStory.favorite_events}
                        go={go}
                        goBack={goBack} />
                    <ProfileView
                        id="profile"
                        activePanel={activePanel}
                        history={panelsStory.profile}
                        go={go}
                        goBack={goBack} />

                </Epic>
            </UserInfoContext.Provider>
        </ConfigProvider>
    );
}

export default App;
