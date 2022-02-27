import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feedback.feeling)

    const [userInput, setUserInput] = useState(feeling)

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: {
                feeling: userInput,
            }
        })
        history.push('/Understanding')
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleClickNext}>
                <input
                    required
                    type='number'
                    label='Feeling'
                    placeholder='Value 1 - 5'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <input type="submit" value="NEXT" />
            </form>
        </>
    )
}

export default Feeling;