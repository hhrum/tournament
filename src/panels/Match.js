import React from 'react'
import { Avatar, Button, Card, CardGrid, Div, Group, Header, Panel, Text } from '@vkontakte/vkui'

import MatchItem from '../components/MatchItem'
import TournamentItem from '../components/TournamentItem'
import { Icon28ChevronBack, Icon36StoryOutline } from '@vkontakte/icons'
import MatchEvent from '../components/MatchEvent'


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

            <Group header={<Header>События матча</Header>} separator="hide">
                <Div>
                    <CardGrid>
                        <Card size="l">
                            <div className="event">
                                <MatchEvent />
                            </div>
                        </Card>
                        <Card size="l">
                            <div className="event">
                                <MatchEvent />
                            </div>
                        </Card>
                    </CardGrid>
                </Div>
            </Group>

            <Group header={<Header>Состав команд</Header>}>
                <Div>
                    <div className="teams-info">
                        <div className="teams-info__teams">
                            <div className="teams-info__team">
                                <Avatar size={56} />
                                <Text>Игрок</Text>
                            </div>
                            <div className="teams-info__team">
                                <Avatar size={56} />
                                <Text>Игрок</Text>
                            </div>
                        </div>
                    </div>
                </Div>
            </Group>

            <Div>
                <Button size="xl" stretched>Перейти к турниру</Button>
            </Div>
        </Panel>
    )
}

export default Match