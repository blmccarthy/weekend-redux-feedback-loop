import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';



function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const understanding = useSelector(store => store.feedback.understanding)

    const [userInput, setUserInput] = useState(understanding)

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
            <TextField
                    required
                    value={userInput}
                    type='number'
                    // label='Understanding'
                    variant="standard"
                    placeholder="Enter a value 1 - 5"
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

export default Understanding;