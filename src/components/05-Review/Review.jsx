import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Review() {

    const history = useHistory();

    const feedback = useSelector((store) => store.feedback);

    const submitFeedback = () => {
        console.log('in submitFeedback POST', feedback);
        axios.post('/feedback', feedback)
            .then((result) => {
                console.log('in submitFeedback .then');
            }).catch((err) => {
                console.log('ERROR', err);
            })
        history.push('/ThankYou')
    }

    const handleEdit = (e) => {
        e.preventDefault();
        console.log('in handleEdit', e.target.className);
        const page = e.target.className;
        history.push(`/${page}`)
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                Feelings: {feedback.feeling}
                <Button
                    className=""
                    onClick={handleEdit}
                    variant="outlined"
                >Edit
                </Button>
            </div>
            <div>
                Understanding: {feedback.understanding}
                <Button
                    className="Understanding"
                    onClick={handleEdit}
                    variant="outlined"
                >Edit
                </Button>
            </div>
            <div>
                Support: {feedback.support}
                <Button
                    className="Support"
                    onClick={handleEdit}
                    variant="outlined"
                >Edit
                </Button>
            </div>
            <div>
                Comments: {feedback.comments}
                <Button
                    className="Comments"
                    onClick={handleEdit}
                    variant="outlined"
                >Edit
                </Button>
            </div>
            {/* <button onClick={submitFeedback}>SUBMIT</button> */}

            <br /><br />

            <div
                style={{
                    maxWidth: '70%',
                    margin: 'auto',
                    minWidth: '300px',
                }}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Feedback</TableCell>
                                <TableCell align="right">Score</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell align="right">{feedback.feeling}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        className=""
                                        onClick={handleEdit}
                                        variant="outlined"
                                    >Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Understanding</TableCell>
                                <TableCell align="right">{feedback.understanding}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        className="Understanding"
                                        onClick={handleEdit}
                                        variant="outlined"
                                    >Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Support</TableCell>
                                <TableCell align="right">{feedback.support}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        className="Support"
                                        onClick={handleEdit}
                                        variant="outlined"
                                    >Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Comments</TableCell>
                                <TableCell align="right">{feedback.comments}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        className="Comments"
                                        onClick={handleEdit}
                                        variant="outlined"
                                    >Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <br /><br />
            <Button
                onClick={submitFeedback}
                variant="contained"
                color="primary"
            >
                SUBMIT
            </Button>
        </>
    )
}

export default Review;