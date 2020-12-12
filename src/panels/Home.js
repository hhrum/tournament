import React from 'react';
import { Panel, PanelHeader, HorizontalScroll, Div, Header, Group, CardGrid, Card } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import TournamentItem from '../components/TournamentItem'
import MatchItem from '../components/MatchItem'

function Home(props) {

    return (
        <Panel id={props.id}>
            <PanelHeader>Турнир</PanelHeader>

            { /* Now */}
            <Group header={<Header>Прямо сейчас</Header>} separator="hide">
                <HorizontalScroll>
                    <Div>
                        <div className="events-scroll">
                            <div className="event" data-to="match" onClick={(e) => props.go(e)}>
                                <MatchItem bg={<TournamentItem />} />
                            </div>
                        </div>
                    </Div>
                </HorizontalScroll>
            </Group>

            { /* Soon */}
            <Group header={<Header>Скоро</Header>} separator="hide">
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
            <Group header={<Header>Было недавно</Header>} separator="hide">
                <Div>
                    <CardGrid>
                        <Card size="l">
                            <div className="event">
                                <MatchItem />
                            </div>
                        </Card>
                        <Card size="l">
                            <div className="event">
                                <MatchItem />
                            </div>
                        </Card>
                        <Card size="l">
                            <div className="event">
                                <MatchItem />
                            </div>
                        </Card>
                    </CardGrid>
                </Div>
            </Group>
        </Panel >
    );
}

export default Home;