import React, { useContext } from "react";
import { View } from "@vkontakte/vkui";

import Profile from "../panels/Profile";

import UserInfoContext from "../contexts/UserInfoContext";
import Achievements from "../panels/Achievements";

function ProfileView({ id, activePanel, history, go, goBack }) {
    const user = useContext(UserInfoContext)

    return (
        <View
            id={id}
            activePanel={activePanel}
            history={history}
            onSwipeBack={goBack}>
            <Profile id="profile" view={id} go={go} user={user} />
            <Achievements id="achievements" view={id} goBack={goBack} />
        </View>
    )
}

export default ProfileView