import React from 'react'
import { Avatar } from '@vkontakte/vkui'

const image_url = "https://sun9-71.userapi.com/impg/nGHDkKAvXnf5vIGeVHxMc-S4i_i7ACaIjX7rDw/yUjydg7M64Y.jpg?size=1600x1600&quality=96&proxy=1&sign=a8e2dbc91a610d8c2039a74ec00ba7d6&type=album"

function MatchItem({ bg }) {
    var background;
    var classes = ["match-item"]

    if (bg) {
        background = <div className="item__bg">{bg}</div>
        classes.push("match-item_big");
    } else {
        background = null
    }


    return (
        <div className={classes.join(" ")} >
            <div className="left">
                <Avatar size={48} src={image_url} />
                <div className="name">Team Name</div>
            </div>
            <div className="center">
                <div className="match-item__info">
                    1:1
                </div>
            </div>
            <div className="right">
                <Avatar size={48} src={image_url} />
                <div className="name">Team Name</div>
            </div>

            {background}
        </div>
    )
}

export default MatchItem