import React, { useState, useEffect } from 'react';
import api from '../services/api'
// import imgClose from '../assets/close.svg'
// import imgEdit from '../assets/edit.svg'
// import imgAdd from '../assets/add.svg'
import { Card, Avatar } from 'antd';
const { Meta } = Card;


function ListVeiculos() {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        async function loadAll() {
            let resp = await api.get('/vehicle')
            // console.log(resp.data)
            setVehicles(resp.data)

        }
        loadAll()
    }, [])

    return (
        <Card className="veiculos" 
        title={"Veículos"}
        headStyle={{fontSize:20}} 
        style={{ backgroundColor: '#c0e8c0', borderRadius: 8 }}>
            {vehicles.map(vehicle => (
                    <Card key={vehicle.id} style={{marginBottom:10}}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={vehicle.name}
                            description={vehicle.description}
                        />
                    </Card>
            ))}
        </Card>

    )
}

export default ListVeiculos