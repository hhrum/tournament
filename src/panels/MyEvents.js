import React from 'react'
import { Avatar, Card, CardGrid, Group, Header, HorizontalScroll, Panel, PanelHeader } from '@vkontakte/vkui'
import MatchItem from '../components/MatchItem'
import TournamentItem from '../components/TournamentItem'

const image_url = "https://sun9-71.userapi.com/impg/nGHDkKAvXnf5vIGeVHxMc-S4i_i7ACaIjX7rDw/yUjydg7M64Y.jpg?size=1600x1600&quality=96&proxy=1&sign=a8e2dbc91a610d8c2039a74ec00ba7d6&type=album"

function MyEvents(props) {
    return (
        <Panel id={props.id} >
            <PanelHeader>События</PanelHeader>

            {/* Горизонтальный скролл всех подписок */}
            <Group header={<Header>Ваши подписки</Header>}>
                <HorizontalScroll>
                    <div className="subs">
                        <div className="subs-item">
                            <Avatar size={64} src={image_url} />
                        </div>
                        <div className="subs-item">
                            <Avatar size={64} src={image_url} />
                        </div>
                        <div className="subs-item">
                            <Avatar size={64} src={image_url} />
                        </div>
                    </div>
                </HorizontalScroll>
            </Group>

            {/* События, которые происходят сейчас */}
            <Group header={<Header>Прямо сейчас</Header>}>
                <CardGrid>
                    <Card size="l">
                        <div className="event">
                            <MatchItem  bg={<TournamentItem />}/>
                        </div>
                    </Card>
                </CardGrid>
            </Group>

            {/* События, которые были недавно */}
            <Group header={<Header>Последние события</Header>}>
                <CardGrid>
                    <Card size="l">
                        <div className="event">
                            <TournamentItem events={{}} />
                        </div>
                    </Card>
                    <Card size="l">
                        <div className="event">
                            <MatchItem />
                        </div>
                    </Card>
                </CardGrid>
            </Group>

        </Panel>
    )
}

export default MyEvents