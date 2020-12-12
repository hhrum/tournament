import React from 'react'
import { Button, Div, Panel } from '@vkontakte/vkui'

import MatchItem from '../components/MatchItem'
import TournamentItem from '../components/TournamentItem'
import { Icon28ArrowLeftOutline, Icon28ChevronBack, Icon28StoryOutline, Icon36StoryOutline } from '@vkontakte/icons'


function Match({ id, go }) {
    return (
        <Panel id={id}>
            <header className="match-header">
                <MatchItem bg={<TournamentItem />} />
                <button className="back" data-to="home" onClick={(e) => go(e)}>
                    <Icon28ChevronBack />
                </button>
            </header>

            <Div>
                <div className="line-buttons">
                    <Button size="l" stretched>Смотреть</Button>
                    <div className="squar-button">
                        <Button size="l"><Icon36StoryOutline /></Button>
                    </div>
                </div>
            </Div>
        </Panel>
    )
}

export default Match