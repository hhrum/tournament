import React, {useContext, useState} from "react";
import { View } from "@vkontakte/vkui";

import Profile from "../panels/Profile";

import UserInfoContext from "../contexts/UserInfoContext";
import Achievements from "../panels/Achievements";

function ProfileView({id}) {
    const user = useContext(UserInfoContext)

    const [panelsStory, setPanelsStory] = useState(["profile"])
    const [activePanel, setActivePanel] = useState("profile")

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
        <View id={id} activePanel={ activePanel }>
            <Profile id="profile" go={go} user={user} />
            <Achievements id="achievements" goBack={goBack} />
        </View>
    )
}

export default ProfileView