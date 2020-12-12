import React from 'react'
import { Card, CardGrid, Div, Group, Header, Panel, Text } from '@vkontakte/vkui'
import TournamentItem from '../components/TournamentItem'
import { Icon28ChevronBack } from '@vkontakte/icons'
import MatchItem from '../components/MatchItem'

function Tournament({ id, go }) {
    return (
        <Panel id={id}>
            <header className="tournament-header">
                <TournamentItem />
                <button className="back" data-to="match" onClick={(e) => go(e)}>
                    <Icon28ChevronBack />
                </button>
            </header>

            <Group separator="hide">
                <Div>
                    <div className="tournament-info">
                        <div className="tournament-info__description">
                            <Text>
                                Любительские матчи это отдельная категория турниров, у которых нет турнирной сетки и единого списка команд. В любительские матчи может играть любой игрок или геймер.
                            </Text>
                        </div>
                    </div>
                </Div>
            </Group>

            <Group header={<Header>Последние события</Header>}>
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
                    </CardGrid>
                </Div>
            </Group>
        </Panel>
    )
}

export default Tournament