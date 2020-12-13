import React, { useContext, useEffect } from 'react'
import { Card, CardGrid, Div, Group, Header, Panel, Text } from '@vkontakte/vkui'
import { Icon28ChevronBack } from '@vkontakte/icons'

import UserInfoContext from '../contexts/UserInfoContext'

import TournamentItem from '../components/TournamentItem'
import MatchItem from '../components/MatchItem'

function Tournament({ id, view, go, goBack }) {
    const {addAchievement} = useContext(UserInfoContext)

    useEffect(() => {
        addAchievement("explorer")
    }, [])

    return (
        <Panel id={id}>
            <header className="tournament-header">
                <TournamentItem />
                <button className="back" onClick={() => goBack()}>
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