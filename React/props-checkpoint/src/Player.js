import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player(props, key) {
    const { name, team, nationality, jerseyNumber, age, imageUrl } = props;
    return (<>
        <Card style={{ width: '18rem', marginLeft: 50 }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Team : {team} </Card.Text>
                <Card.Text> {nationality}</Card.Text>
                <Card.Text>{jerseyNumber} </Card.Text>
                <Card.Text>{age} </Card.Text>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>{props.children}
        </Card>

    </>
    );
}

export default Player;