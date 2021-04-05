
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import api from '../communication/api';

function A(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');


    let nameChanged = (event) => {
        setName(event.target.value);
    }

    let addressChanged = (event) => {
        setAddress(event.target.value);
    }

    let submit = () => {
       let place = {name: name, address: address};
       api.addPlace(place)
       .then(() => {
           setMessage(`The place ${name} was added successfully.`);
           setName('');
           setAddress('');
        })
        .catch(e => setMessage(`There was an error in adding the place ${name}`));
    }
   

    return (
        <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" value={name} onChange={nameChanged}/>
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" value={address} onChange={addressChanged} placeholder="Enter address" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default A;