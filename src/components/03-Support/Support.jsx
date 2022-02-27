import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Support() {

    const dispatch = useDispatch();
    const history = useHistory();
    const support = useSelector(store => store.feedback.support)

    const [userInput, setUserInput] = useState(support)

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: {
                support: userInput,
            }
        })
        history.push('/Comments')
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleClickNext}>
                <input
                    required
                    type='number'
                    label='Support'
                    placeholder='Value 1 - 5'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <input type="submit" value="NEXT" />
            </form>
        </>
    )
}

export default Support;