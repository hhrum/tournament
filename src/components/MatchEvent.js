import { Avatar, Headline, RichCell, Subhead, Text, Title } from "@vkontakte/vkui";
import React from "react";

function MatchEvent() {
    return (
        <div className="match-event">
            <RichCell
                before={<Avatar size={56} />}
                text="Забивает мяч"
            >
                <div className="match-event__user-info">Обла <Subhead weight="regular">Игрок</Subhead></div>
            </RichCell>
        </div>
    )
}

export default MatchEvent