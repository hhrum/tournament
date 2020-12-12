import React from "react";
import { View } from "@vkontakte/vkui";

import Favorite from "../panels/Favorite";

function FavoriteEventsView({id}) {
    return (
        <View id={id} activePanel="favorite">
            <Favorite id="favorite"/>
        </View>
    )
}

export default FavoriteEventsView