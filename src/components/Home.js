import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import A from './A';
import { useState, useEffect } from 'react';
import api from '../communication/api';

function Home() {
    const [message, setMessage] = useState('');
    const [data, setData] = useState('');
    const [places, setPlaces] = useState([]);
    
    let onDataReceivedFromA = (messageFromA) => {
        setMessage(messageFromA);
    }

    let onButtonClicked = () => {
        let data = 'Home sends Greetings to A';
        setData(data);
    }

    useEffect(() => {
        if(places.length === 0) {            
            api.getPlaces()
            .then(x => setPlaces(x))
            .catch(e => console.log(e));
        }
    });

    return (
        <Row><Col>
         
        </Col></Row>
    );
}

export default Home;