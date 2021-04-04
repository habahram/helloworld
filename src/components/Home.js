import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import A from './A';
import { useState } from 'react';

function Home() {
    const [message, setMessage] = useState('');
    const [data, setData] = useState('');
    
    let onDataReceivedFromA = (messageFromA) => {
        setMessage(messageFromA);
    }

    let onButtonClicked = () => {
        let data = 'Home sends Greetings to A';
        setData(data);
    }

    return (
        <Row><Col>
            *******Home***********
            <br /> My home page! <br />
            <input type="button" value='Send Greetings to A' onClick={onButtonClicked} />
            <br />
            {message === '' ? '' : message}
            <br />
            <A sendData={onDataReceivedFromA} data={data}/>
            <br />
            *******/Home**********
    </Col></Row>
    );
}

export default Home;