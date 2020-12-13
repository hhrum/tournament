import { Div, Group, Panel, PanelHeader, PanelHeaderBack, Text, Title } from '@vkontakte/vkui'
import React from 'react'

import observation from '../img/observation.svg'
import explorer from '../img/explorer.svg'
import gamepad from '../img/gamepad.svg'

function Achievements({ id, goBack }) {
    return (
        <Panel id={id}>

            <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />} separator={false} >Ваши достижения</PanelHeader>
            <Group>
                <Div>
                    <div className="achievement-grid">
                        <div className="achievement-column">
                            <div className="achievement-item">
                                <div className="achievement-item__img">
                                    <img src={explorer} alt="icon" />
                                </div>
                                <div className="achievement-item__title">
                                    <Title level="3">Изучатель</Title>
                                </div>
                                <div className="achievement-item__text">
                                    <Text>Перейти на страницу турнира</Text>
                                </div>
                            </div>
                            <div className="achievement-item">
                                <div className="achievement-item__img">
                                    <img src={gamepad} alt="icon" />
                                </div>
                                <div className="achievement-item__title">
                                    <Title level="3">Игрок</Title>
                                </div>
                                <div className="achievement-item__text">
                                    <Text>Принять участие в своей первой игре</Text>
                                </div>
                            </div>
                        </div>
                        <div className="achievement-column">
                            <div className="achievement-item">
                                <div className="achievement-item__img">
                                    <img src={observation} alt="icon" />
                                </div>
                                <div className="achievement-item__title">
                                    <Title level="3">Наблюдатель</Title>
                                </div>
                                <div className="achievement-item__text">
                                    <Text>Зайти на текущий матч</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </Group>

        </Panel>
    )
}

export default Achievements