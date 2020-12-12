import React, {useContext} from "react";
import { View } from "@vkontakte/vkui";

import Profile from "../panels/Profile";

import UserInfoContext from "../contexts/UserInfoContext";

function ProfileView({id}) {
    const user = useContext(UserInfoContext)

    return (
        <View id={id} activePanel="profile">
            <Profile id="profile" user={user} />
        </View>
    )
}

export default ProfileView