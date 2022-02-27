import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';



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
                <TextField
                    id="outlined-textarea"
                    // label="Comments"
                    placeholder="Leave us a comment!"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    multiline
                    rows={4}
                    style={{
                        width: 500
                    }}
                />
                <br/><br/>
                {/* <input type="submit" value="NEXT" /> */}
                <Button variant="contained" color="primary" type="submit">
                    Next
                </Button>
            </form>
        </>
    )
}

export default Comments;