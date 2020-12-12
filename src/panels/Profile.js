import React, { useContext } from 'react'
import { Panel, PanelHeader, Div, Group, Avatar, RichCell, Button } from '@vkontakte/vkui'

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
        </Panel>
    )
}

export default Profile