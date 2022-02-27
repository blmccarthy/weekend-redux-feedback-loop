import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.feedback.comments)

    const [userInput, setUserInput] = useState(comments)

    const handleClickNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: {
                comments: userInput,
            }
        })
        history.push('/Review')
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleClickNext}>
                <input
                    type='text'
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

export default Comments;