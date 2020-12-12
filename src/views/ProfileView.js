import React from "react";
import { View } from "@vkontakte/vkui";

import Profile from "../panels/Profile";

function ProfileView({id}) {
    return (
        <View id={id} activePanel="profile">
            <Profile id="profile" />
        </View>
    )
}

export default ProfileView