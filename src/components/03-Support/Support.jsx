import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();
    const support = useSelector(store => store.feedback.support)

    const [userInput, setUserInput] = useState(support)

    const handleClickNext = (e) => {
        e.preventDefault();
        if (userInput < 1 || userInput > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid number between 1 - 5',
                confirmButtonColor: '#3085d6',
            });
            return;
        }
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
            <TextField
                    required
                    value={userInput}
                    type='number'
                    // label='Support'
                    variant="standard"
                    onChange={(e) => setUserInput(e.target.value)}
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

export default Support;