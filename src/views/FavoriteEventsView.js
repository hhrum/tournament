import React from "react";
import { View } from "@vkontakte/vkui";

import Favorite from "../panels/Favorite";
import Match from "../panels/Match"
import Tournament from "../panels/Tournament";

function FavoriteEventsView({ id, activePanel, history,  go, goBack }) {

    return (
        <View
            id={id}
            activePanel={activePanel}
            history={history}
            onSwipeBack={goBack}>
            <Favorite id="favorite" view={id} go={go} />
            <Match id="match" view={id} go={go} goBack={goBack} />
            <Tournament id="tournament" view={id} go={go} goBack={goBack} />
        </View>
    )
}

export default FavoriteEventsView