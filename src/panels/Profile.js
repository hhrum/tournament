import React from 'react'
import { Panel, PanelHeader, Div, Group, Avatar, RichCell, Button } from '@vkontakte/vkui'

const image_url = "https://sun9-71.userapi.com/impg/nGHDkKAvXnf5vIGeVHxMc-S4i_i7ACaIjX7rDw/yUjydg7M64Y.jpg?size=1600x1600&quality=96&proxy=1&sign=a8e2dbc91a610d8c2039a74ec00ba7d6&type=album"

function Profile(props) {
    return (
        <Panel id={props.id}>
            <PanelHeader>user id</PanelHeader>
            <Group>
                <Div>
                    <div className="profile-info">
                        <RichCell
                            before={<Avatar size={72} src={image_url} />}
                            text="Разработчик"
                            caption=""
                        >
                            Денис Джабаров
                        </RichCell>
                        <Div>
                            <Button size="xl">
                                Редактировать
                            </Button>   
                        </Div>
                    </div>
                </Div>
            </Group>
        </Panel>
    )
}

export default Profile