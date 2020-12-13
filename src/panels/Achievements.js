import { Div, Group, Panel, PanelHeader, Title } from '@vkontakte/vkui'
import React from 'react'

function Achievements({ id }) {
    return (
        <Panel id={id}>

            <PanelHeader separator={false}>Ваши достижения</PanelHeader>
            <Group>
                <Div>
                    <div className="achievement-grid">
                        <div className="achievement-column">
                            <div className="achievement-item">
                                <div className="achievement-item__emoji">
                                    😲
                                </div>
                                <div className="echievement-item__title">
                                    <Title level="2">Первооткрыватель</Title>
                                </div>
                            </div>
                            <div className="achievement-item">
                                
                            </div>
                        </div>
                        <div className="achievement-column">
                            <div className="achievement-item">
                                
                            </div>
                        </div>
                    </div>
                </Div>
            </Group>

        </Panel>
    )
}

export default Achievements