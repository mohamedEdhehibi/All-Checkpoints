import React from 'react'
import Playerstab from './Players'
import Player from './Player'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const Playerlist = () => {
    console.log(Playerstab)

    return (



        <div style={{ display: "flex", justifyItems: 'space-between' }}>
            {Playerstab.map((ele, key) => (
                <Player props={ele.name} {...ele} key={ele.id} />

            ))}
        </div>
    )
}

export default Playerlist