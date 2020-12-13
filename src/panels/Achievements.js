import { Div, Group, Panel, PanelHeader, PanelHeaderBack, Text, Title } from '@vkontakte/vkui'
import React from 'react'

import observation from '../img/observation.svg'
import explorer from '../img/explorer.svg'
import gamepad from '../img/gamepad.svg'
import AchievementItem from '../components/AchievementItem'

const achievements_list = [
    {
        title: "Изучатель",
        subtitle: "Перейти на страницу турнира",
        img: explorer,
        name: "explorer"
    },
    {
        title: "Игрок",
        subtitle: "Принять участие в своей первой игре",
        img: gamepad,
        name: "gamer"
    },
    {
        title: "Наблюдатель",
        subtitle: "Зайти на текущий матч",
        img: observation,
        name: "observer"
    }
]

function Achievements({ id, user_achievements, view, goBack }) {

    var leftColumn = [];
    var rightColumn = [];
    console.log(user_achievements)
    achievements_list.map((element, index) => {
        element.isReceived = user_achievements.includes(element.name)

        if (index % 2 == 0) leftColumn.push(element)
        else rightColumn.push(element)
    })

    return (
        <Panel id={id}>

            <PanelHeader left=
                {<PanelHeaderBack data-view={view} onClick={() => goBack()} />}
                separator={false} >
                Ваши достижения
            </PanelHeader>
            <Group>
                <Div>
                    <div className="achievement-grid">
                        <div className="achievement-column">
                            {leftColumn.map((element, i) => {
                                return <AchievementItem key={i} achievement={element} />
                            })}
                        </div>
                        <div className="achievement-column">
                            {rightColumn.map((element, i) => {
                                return <AchievementItem key={i} achievement={element} />
                            })}
                        </div>
                    </div>
                </Div>
            </Group>

        </Panel>
    )
}

export default Achievements