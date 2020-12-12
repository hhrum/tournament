import { Subhead, Text } from '@vkontakte/vkui';
import React from 'react'

import MatchItem from './MatchItem'

const image_url = "https://wallpaperaccess.com/full/1607428.jpg";

function TournamentItem({ events }) {

    var classes = ["tournament-item"]
    var eventsList

    if (events) {
        classes.push("tournament-item_events");
        eventsList = <div className="events"><MatchItem /><MatchItem /></div>
    } else {
        eventsList = null
    }

    return (
        <div className={classes.join(" ")}>
            <div className="tournament-item__info">
                <footer>
                    <div className="left">
                        <Text weight="semibold">Любительский матч</Text>
                        <Subhead weight="regular">FIFA 2020</Subhead>
                    </div>
                    <div className="right text_bold">
                        <Subhead weight="regular">XX/XX</Subhead>
                    </div>
                </footer>
                <div className="item__bg imem__bg_img">
                    <img src={image_url} alt="" />
                </div>
            </div>
            {eventsList}
        </div>
    )
}

export default TournamentItem