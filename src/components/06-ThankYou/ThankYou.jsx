import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function ThankYou() {

    const dispatch = useDispatch();
    const history = useHistory();

    const goHome = (e) => {
        e.preventDefault();
        history.push('/');

        dispatch({
            type: 'RESET'
        })
    }

    return (
        <>
            <h1>Thank you for participating!</h1>
            {/* <button onClick={goHome}>Leave New Feedback</button> */}
            <Button
                onClick={goHome}
                variant="outlined"
                color="primary"
            >
                Leave New Feedback
            </Button>
        </>
    )
}

export default ThankYou;