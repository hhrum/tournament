import React from 'react'

const image_url = "https://media.kg-portal.ru/games/v/valorant/posters/valorant_3.jpg";

function TournamentItem() {
    return (
        <div className="tournament-item">
            <footer>
                <div className="left">
                    Text
                </div>
                <div className="right">
                    Text
                </div>
            </footer>
            <div className="item__bg imem__bg_img">
                <img src={image_url}/>
            </div>
        </div>
    )
}

export default TournamentItem