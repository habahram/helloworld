

function A(props) {

    let onButtonClicked = () => {
        let message = 'A sends Hello to Home';
        props.sendData(message);
    }

    return (
        <div>
            #######A############
            <br />This is A component<br />
            {props.data === '' ? '' : props.data}
            <br />
            <input type="button" value='Send Hello to Home' onClick={onButtonClicked} />
            <br />
            #######/A###########
        </div>
    );
}

export default A;