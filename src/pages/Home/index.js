import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './styles.css'
const moment = require('moment')


export default function Home() {
    const [vehicles, setVehicles] = useState([]);
    const [trips, setTrips] = useState([]);
    const [schedulings, setSchedulings] = useState([]);

    useEffect(() => {
        async function loadAll() {
            let resp = await api.get('/trip')
            console.log(resp.data)
            setTrips(resp.data)

            resp = await api.get('/scheduling')
            console.log(resp.data)
            setSchedulings(resp.data)

            resp = await api.get('/vehicle')
            console.log(resp.data)
            setVehicles(resp.data)

        }
        loadAll()
    }, [])

    return (
        <div className="main" >
            <div className="passeios">
                <strong>
                    Viagens/Passeios
                </strong>
                <ul className="list-passeios">
                    <li>
                        <header>
                            EMOJI - Nome do Veiculo
                        </header>
                        <label>
                            HI:HI - HF:HF
                        </label>
                        <span>
                            06/15
                        </span>
                    </li>
                </ul>
            </div>
            <div className="agendamentos">
                <strong>
                    Agendamento
                </strong>
                <ul className="list-agendamentos">
                    {schedulings.map(scheduling => {
                        var dias = ''
                        var intevalos = ''
                        var dataEspecifica = moment(scheduling.specificDay, "YYYY-MM-DD").format('DD-MM-YY')

                        //Dia especifico ou dias da semana 
                        if (scheduling.weekDays == null) {
                            // if (scheduling.specificDay) {
                            dias = <div className="dia-especifico">
                                <label>
                                    Dia especifico: {dataEspecifica}
                                </label>
                            </div>
                            // }
                        } else {
                            dias = <div className="dia-da-semana">
                                <div>Seg</div>
                                <div>Ter</div>
                                <div>Qua</div>
                                <div>Qui</div>
                                <div>Sex</div>
                                <div>Sab</div>
                                <div>Dom</div>
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
            <div className="veiculos">
                <strong>
                    Veiculos
                </strong>
                <ul className="list-veiculos">
                    {vehicles.map(vehicle => (
                        <li key={vehicle.id}>
                            <header>
                                <label>
                                    {vehicle.name}
                                </label>
                                <div>
                                    <a>O</a>
                                    <a>X</a>
                                </div>
                            </header>
                            <label>
                                Descricao:
                                {vehicle.description}
                            </label>
                            <div>
                                Capacidade: {vehicle.capacity}
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="proximos">
                <strong>
                    Prox. Passeios
                </strong>
                <ul className="list-proximas-viagens">

                </ul>
            </div>

        </div>
    )
}