import React, { useState, useEffect } from 'react';
import api from '../services/api'
import DiaSemana from './DiaSemana'

// import imgClose from '../assets/close.svg'
// import imgEdit from '../assets/edit.svg'
// import imgAdd from '../assets/add.svg'
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
        <div className="agendamentos">
            <strong>
                Agendamento
            </strong>
            <ul className="list-agendamentos">
                {schedulings.map(scheduling => {
                    var dias, intevalos = ''
                    var dataEspecifica = moment(scheduling.specificDay, "YYYY-MM-DD").format('DD-MM-YY')

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
                        <li key={scheduling.id}>
                            {dias}
                            <div className="hora-agendamento">
                                {scheduling.startTime.substr(0, 5)} - {scheduling.endTime.substr(0, 5)}
                            </div>
                            {intevalos}
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default AgendamentoList