import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import VeiculoList from '../../components/VeiculoList'
import './styles.css'
const moment = require('moment')


export default function Home() {
    // const [vehicles, setVehicles] = useState([]);
    const [trips, setTrips] = useState([]);
    const [schedulings, setSchedulings] = useState([]);

    useEffect(() => {
        async function loadAll() {
            let resp = await api.get('/trip')
            // console.log(resp.data)
            setTrips(resp.data)

            resp = await api.get('/scheduling')
            // console.log(resp.data)
            setSchedulings(resp.data)

            // resp = await api.get('/vehicle')
            // console.log(resp.data)
            // setVehicles(resp.data)

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
            <VeiculoList />
            <div className="agendamentos">
                <strong>
                    Agendamento
                </strong>
                <ul className="list-agendamentos">
                    {schedulings.map(scheduling => {
                        var dias = ''
                        var intevalos = ''
                        // console.log(Array.from(scheduling.weekDays.replace(',', '')))
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
                            console.log(typeof (dias))
                            console.log((dias))

                            // if (scheduling.weekDays.indexOf("0") !== -1)
                            //     dias.replace('<div>Dom', '<div className="on">Dom')
                            // if (scheduling.weekDays.indexOf("1") !== -1)
                            //     dias.replace('<div>Seg', '<div className="on">Seg')
                            // if (scheduling.weekDays.indexOf("2") !== -1)
                            //     dias.replace('<div>Ter', '<div className="on">Ter')
                            // if (scheduling.weekDays.indexOf("3") !== -1)
                            //     dias.replace('<div>Qua', '<div className="on">Qua')
                            // if (scheduling.weekDays.indexOf("4") !== -1)
                            //     dias.replace('<div>Qui', '<div className="on">Qui')
                            // if (scheduling.weekDays.indexOf("5") !== -1)
                            //     dias.replace('<div>Sex', '<div className="on">Sex')
                            // if (scheduling.weekDays.indexOf("6") !== -1)
                            //     dias.replace('<div>Sab', '<div className="on">Sab')

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