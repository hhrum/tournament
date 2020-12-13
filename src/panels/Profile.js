import React from 'react'
import { Panel, PanelHeader, Div, Group, Avatar, RichCell, Cell, Button, Header, HorizontalScroll } from '@vkontakte/vkui'
import { Icon28DiamondOutline, Icon28GhostOutline, Icon28LikeOutline, Icon28UserAddOutline } from '@vkontakte/icons'

function Profile({ id, user, count_of_achievements, view, go }) {

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>ID{user.id}</PanelHeader>
            <Group>
                <div className="profile-info">
                    <RichCell
                        before={<Avatar size={72} src={user.photo_100 ? user.photo_100 : ""} />}
                        text="Разработчик"
                        caption=""
                    >
                        {user.first_name} {user.last_name}
                    </RichCell>
                    <Div>
                        <Button size="xl" mode="secondary">
                            Редактировать
                        </Button>
                    </Div>
                </div>
            </Group>

            <Group>
                <Cell
                    before={<Icon28DiamondOutline />}
                    expandable 
                    data-view={view}
                    onClick={(e) => go("achievements")}> {count_of_achievements} достижений</Cell>
                <Cell before={<Icon28GhostOutline />}>1 звание</Cell>
                <Cell before={<Icon28LikeOutline />}>0 подписок</Cell>
            </Group>

            <Group header={<Header>Друзей в приложении: </Header>}>
                <HorizontalScroll>
                    <Div>
                        <div className="friends">
                            <div className="friends-item friends-item__add">
                                <Icon28UserAddOutline />
                            </div>
                        </div>
                    </Div>
                </HorizontalScroll>
            </Group>
        </Panel>
    )
}

export default Profile