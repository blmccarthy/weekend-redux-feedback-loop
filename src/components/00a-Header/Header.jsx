import { useHistory } from 'react-router-dom';

function Header() {
    
    const history = useHistory();

    const goHome = (e) => {
        e.preventDefault();
        history.push('/');
    }


    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
                <button onClick={goHome}>Go Home</button>
            </header>
        </div>
    )
}

export default Header;