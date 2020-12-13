import { Icon48Game } from '@vkontakte/icons'
import { Panel, Placeholder, Title } from '@vkontakte/vkui'
import React from 'react'

import Gamepad from '../img/gamepad.svg'

function Controller({ id }) {
    return (
        <Panel id={id}>

            <Placeholder
                icon={<img src={Gamepad} style={{width: "30vw", marginBottom: 56}} />}
                stretched
            >
                <Title>Раздел находится в разработке</Title>
        </Placeholder>
        </Panel>
    )
}

export default Controller