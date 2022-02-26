import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [userInput, setUserInput] = useState('')

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: {
                feeling: userInput,
            }
        })
        // history.push('/Understanding')
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <input 
                type='text'
                label='Feeling'
                placeholder='Value 1 - 10'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleClickNext}>NEXT</button>
        </>
    )
}

export default Feeling;