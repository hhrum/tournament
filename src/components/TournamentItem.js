import React from 'react'

import MatchItem from './MatchItem'

const image_url = "https://media.kg-portal.ru/games/v/valorant/posters/valorant_3.jpg";

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
                        <div className="tournament-name text_bold">FTP</div>
                        <div className="text text_tine">Valorant</div>
                    </div>
                    <div className="right text_bold">
                        Text
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