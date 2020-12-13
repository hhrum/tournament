import React, {useContext, useState} from "react";
import { View } from "@vkontakte/vkui";

import Profile from "../panels/Profile";

import UserInfoContext from "../contexts/UserInfoContext";
import Achievements from "../panels/Achievements";

function ProfileView({id}) {
    const user = useContext(UserInfoContext)

    const [activePanel, setActivePanel] = useState("profile")

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to)
    }

    return (
        <View id={id} activePanel={activePanel}>
            <Profile id="profile" go={go} user={user} />
            <Achievements id="achievements" />
        </View>
    )
}

export default ProfileView