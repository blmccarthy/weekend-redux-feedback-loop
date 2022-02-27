import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            <button onClick={goHome}>Leave New Feedback</button>
        </>
    )
}

export default ThankYou;