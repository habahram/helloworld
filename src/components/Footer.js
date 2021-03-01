import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Row><Col>
           &copy; Copyright {new Date().getFullYear()}, All right reserved.
        </Col></Row>

    );
}

export default Footer;