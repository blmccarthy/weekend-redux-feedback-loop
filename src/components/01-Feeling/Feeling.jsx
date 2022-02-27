import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TextField, Rating, Button } from '@mui/material';
import Swal from 'sweetalert2/dist/sweetalert2.js';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feedback.feeling)

    const [userInput, setUserInput] = useState(feeling)
    // const [rating, setRating] = useState(null)


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
            type: 'SET_FEELING',
            payload: {
                feeling: userInput,
            }
        })
        history.push('/Understanding')
    }

    // console.log('rating', rating);

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleClickNext}>
                <TextField
                    required
                    value={userInput}
                    type='number'
                    // label='Feeling'
                    variant="standard"
                    placeholder="Enter a value 1 - 5"
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <br />
                {/* <Rating 
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    size='large'
                /> */}
                <br />
                {/* <input type="submit" value="NEXT" /> */}
                <Button variant="contained" color="primary" type="submit">
                    Next
                </Button>
            </form>
        </>
    )
}

export default Feeling;