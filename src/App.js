import React, { useState, useEffect } from 'react';
import { Alert, ConfigProvider, Epic, ScreenSpinner, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28GameOutline, Icon28HomeOutline, Icon28LikeOutline, Icon28Profile } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import UserInfoContext from './contexts/UserInfoContext';

import HomeView from './views/HomeView'
import FavoriteEventsView from './views/FavoriteEventsView';
import ProfileView from './views/ProfileView';
import ControllerView from './views/ControllerView';

function App() {
    const apiUrl = "https://laravel-tournament-backend.herokuapp.com/"

    const [user, setUser] = useState({})
    const [userAchievements, setUserAchievements] = useState([])

    const [activeStory, setActiveStory] = useState("home");
    const [popout, setPopout] = useState(null)
    const [panelsStory, setPanelsStory] = useState({
        home: ["home"],
        favorite_events: ["favorite"],
        controller: ["controller"],
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
    const go = (panel) => {
        const view = activeStory
        updatePanelsStory(view, (line) => {
            window.history.pushState({ panel: panel }, panel)
            line.push(panel)
            return line
        })
    }

    /// Возврат к прошлой
    const goBack = () => {
        const view = activeStory
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

        //test
        getData(`${apiUrl}/user${window.location.search}`)
            .then((response) => response.json())
            .then((response) => setUserAchievements(response.user.achievements))
    }, [])

    const postData = (url = '', data = {}) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    const getData = (url = '', data = {}) => {
        return fetch(url, {
            method: 'GET',
        });
    }

    bridge.subscribe((e) => {
        switch (e.detail.type) {
            case "VKWebAppGetUserInfoResult":
                setUser(e.detail.data)
                break;
            default:
                console.log(e)
                break;
        }
    });

    const addAchievement = (achievement) => {
        if (userAchievements.includes(achievement)) return
        setPopout(<ScreenSpinner />)

        postData(`${apiUrl}/achievement${window.location.search}`, {
            achievement_name: achievement
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                userAchievements.push(achievement)
                setUserAchievements(userAchievements)

                setPopout(
                    <Alert
                        actions={[{
                            title: 'Закрыть',
                            autoclose: true,
                            mode: 'cancel'
                        }, {
                            title: 'Посмотреть',
                            autoclose: true,
                            action: () => go("achievements"),
                        }]}
                        onClose={() => setPopout(null)}
                    >
                        <h2>У вас новое достижение!</h2>
                        <p>Вы можете посмотреть свои достижения в окне профиля</p>
                    </Alert>
                )
            })
    }

    const userInfoContext = {
        addAchievement: addAchievement,
        user: user,
        user_achievements: userAchievements
    }

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
                            onClick={(e) => changeActiveTabbar(e)}
                            selected={activeStory === 'controller'}
                            data-story="controller"
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
                        popout={popout}
                        go={go}
                        goBack={goBack} />
                    <FavoriteEventsView
                        id="favorite_events"
                        activePanel={activePanel}
                        history={panelsStory.favorite_events}
                        popout={popout}
                        go={go}
                        goBack={goBack} />
                    <ControllerView
                        id="controller"
                        activePanel={activePanel} />
                    <ProfileView
                        id="profile"
                        activePanel={activePanel}
                        history={panelsStory.profile}
                        popout={popout}
                        go={go}
                        goBack={goBack} />

                </Epic>
            </UserInfoContext.Provider>
        </ConfigProvider>
    );
}

export default App;
