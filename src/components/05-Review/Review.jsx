import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
                <button 
                    className="" 
                    onClick={handleEdit}
                >Edit
                </button>
            </div>
            <div>
                Understanding: {feedback.understanding}
                <button 
                    className="Understanding" 
                    onClick={handleEdit}
                >Edit
                </button>
            </div>
            <div>
                Support: {feedback.support}
                <button 
                    className="Support" 
                    onClick={handleEdit}
                >Edit
                </button>
            </div>
            <div>
                Comments: {feedback.comments}
                <button 
                    className="Comments" 
                    onClick={handleEdit}
                >Edit
                </button>
            </div>
            <button onClick={submitFeedback}>SUBMIT</button>
        </>
    )
}

export default Review;