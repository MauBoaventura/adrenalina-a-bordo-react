import React, { useState, useEffect } from 'react';
import api from '../services/api'
import DiaSemana from './DiaSemana'

import { Card } from 'antd';
import { black } from 'material-ui/styles/colors';
const { Meta } = Card;
const moment = require('moment')

function AgendamentoList() {
    const [schedulings, setSchedulings] = useState([]);
    useEffect(() => {
        async function loadAll() {
            let resp = await api.get('/scheduling')
            // console.log(resp.data)
            setSchedulings(resp.data)
        }
        loadAll()
    }, [])

    return (
        <Card className="agendamentos"
            title={"Agendamentos"}
            headStyle={{ fontSize: 20 }}
            extra={<a href="/Home" style={
                { fontSize: 25, color: black, borderStyle: 'solid', borderWidth: 1, borderRadius: 15, paddingLeft: 10, paddingRight: 10, backgroundColor: '#93e893' }
            }>+</a>}
            style={{ backgroundColor: '#c0e8c0', borderRadius: 15 }}>

            {schedulings.map(scheduling => {

                var dias, intevalos = ''
                var dataEspecifica = moment(scheduling.specificDay, "YYYY-MM-DD").format('DD-MM-YY').replace('-','/')

                //Dia especifico ou dias da semana 
                if (scheduling.weekDays == null) {
                    if (scheduling.specificDay) {
                        dias = <div className="dia-especifico">
                            <label>
                                Dia especifico: {dataEspecifica}
                            </label>
                        </div>
                    } else {
                        dias = <div className="todos-dias">
                            <label>
                                Todos os dias.
                            </label>
                        </div>
                    }
                } else {
                    var allWeekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
                    dias = <div className="dia-da-semana">
                        {allWeekDays.map((dia, indice) => {
                            return <DiaSemana name={dia} value={scheduling.weekDays.includes(indice) ? "on" : "off"} ></DiaSemana>
                        })}
                    </div>
                }

                //Intervalo de dias
                if (scheduling.startDay) {
                    intevalos =
                        <div className="dia-agendamento">
                            {moment(scheduling.startDay, "YYYY-MM-DD").format('DD-MM-YY')} - {moment(scheduling.endDay, "YYYY-MM-DD").format('DD-MM-YY')}
                        </div>
                }
                return (
                    <Card key={scheduling.id}
                        style={{ marginBottom: 10 }}
                        hoverable={true}
                    >
                        <Meta
                            title={dias}
                            description={<div className="hora-agendamento">
                                {scheduling.startTime.substr(0, 5)} - {scheduling.endTime.substr(0, 5)}
                            </div>}
                        />
                        <Meta
                            description={intevalos}
                        />
                    </Card>
                )
            }
            )}
        </Card>
    )
}

export default AgendamentoList