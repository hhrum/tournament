import { Text, Title } from "@vkontakte/vkui"
import React from "react"

function AchievementItem({achievement}) {

    const classes = ['achievement-item'] //

    if (achievement.isReceived) classes.push("achievement-item_received")

    return (
        <div className={classes.join(" ")}>
            <div className="achievement-item__img">
                <img src={achievement.img} alt="icon" />
            </div>
            <div className="achievement-item__title">
                <Title level="3">{achievement.title}</Title>
            </div>
            <div className="achievement-item__text ">
                <Text   >{achievement.subtitle}</Text>
            </div>
        </div>
    )
}

export default AchievementItem