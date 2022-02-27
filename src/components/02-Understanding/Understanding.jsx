import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const understanding = useSelector(store => store.feedback.understanding)

    const [userInput, setUserInput] = useState(understanding)

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: {
                understanding: userInput,
            }
        })
        history.push('/Support')
    }

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleClickNext}>
                <input
                    required
                    type='number'
                    label='Understanding'
                    placeholder='Value 1 - 5'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <input type="submit" value="NEXT" />
            </form>
        </>
    )
}

export default Understanding;