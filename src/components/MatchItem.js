import React from 'react'
import { Avatar } from '@vkontakte/vkui'


function MatchItem() {
    return (
        <div className="match-item">
            <div className="left">
                <Avatar size={48} src="https://sun9-71.userapi.com/impg/nGHDkKAvXnf5vIGeVHxMc-S4i_i7ACaIjX7rDw/yUjydg7M64Y.jpg?size=1600x1600&quality=96&proxy=1&sign=a8e2dbc91a610d8c2039a74ec00ba7d6&type=album"/>
                <div className="name">Team Name</div>
            </div>
            <div className="center">
                1:1
            </div>
            <div className="right">
                <div className="name">Team Name</div>
                <Avatar size={48} src="https://sun9-71.userapi.com/impg/nGHDkKAvXnf5vIGeVHxMc-S4i_i7ACaIjX7rDw/yUjydg7M64Y.jpg?size=1600x1600&quality=96&proxy=1&sign=a8e2dbc91a610d8c2039a74ec00ba7d6&type=album"/>
            </div>
        </div>
    )
}

export default MatchItem