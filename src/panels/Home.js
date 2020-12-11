import React from 'react';
import { Panel, PanelHeader, HorizontalScroll, Div, Header, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import TournamentItem from '../components/TournamentItem'
import MatchItem from '../components/MatchItem'

function Home(props) {

    return (
        <Panel id={props.id}>
            <PanelHeader>Турнир</PanelHeader>

            { /* Now */}
            <Group header={<Header>Прямо сейчас</Header>} >
                <HorizontalScroll>
                    <Div>
                        <div className="events-scroll">
                            <div className="event">
                                <TournamentItem />
                            </div>
                        </div>
                    </Div>
                </HorizontalScroll>
            </Group>

            { /* Soon */}
            <Group header={<Header>Скоро</Header>}>
                <Div>
                    <div className="events-grid">
                        <div className="event">
                            <TournamentItem />
                        </div>
                        <div className="event">
                            <TournamentItem />
                        </div>
                        <div className="event right">
                            <TournamentItem />
                        </div>
                    </div>
                </Div>
            </Group>

            { /* Recently */}
            <Group header={<Header>Было недавно</Header>}>

                <Div>
                    <div className="events-list">
                        <div className="event">
                            <MatchItem />
                        </div>
                        <div className="event">
                            <MatchItem />
                        </div>
                        <div className="event">
                            <MatchItem />
                        </div>
                    </div>
                </Div>
            </Group>
        </Panel >
    );
}

export default Home;