import React from 'react'
import { Panel, PanelHeader, Div, Group, Avatar, RichCell, Cell, Button, Header, HorizontalScroll } from '@vkontakte/vkui'
import { Icon28DiamondOutline, Icon28GhostOutline, Icon28LikeOutline, Icon28UserAddedOutline, Icon28UserAddOutline, Icon56UserAddOutline } from '@vkontakte/icons'

function Profile({ id, user }) {

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>ID{user.id}</PanelHeader>
            <Group>
                <div className="profile-info">
                    <RichCell
                        before={<Avatar size={72} src={user.photo_100} />}
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
                <Div>
                    <Cell before={<Icon28DiamondOutline />}> 0 достижений</Cell>
                    <Cell before={<Icon28GhostOutline />}>1 звание</Cell>
                    <Cell before={<Icon28LikeOutline />}>0 подписок</Cell>
                </Div>
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