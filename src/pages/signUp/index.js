import './style.css'
import CustomButton from '../../components/customButton'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import store from '../../redux/store';
import { userLogin } from '../../actions/actions';

function SignUp() {

    const navigate = useNavigate()

    const [usernameString, setusernameString] = useState('');

    const handleSubmit = e => {
        
        e.preventDefault()
        handleLogin()

    }

    const handleLogin = () => {
        
        store.dispatch(userLogin(usernameString))
        navigate("/main")
    }

    return (
        <div className="signUpPage">
            <form onSubmit={handleSubmit}
                className='signUpExternalBox'>
                <h1>Welcome to CodeLeap network!</h1>
                <label htmlFor='username'>Please enter your username:</label>
                <input type="text"
                    id='username' 
                    placeholder='Your username here'
                    onChange={e => setusernameString(e.target.value)}
                    />
                <CustomButton text='ENTER'
                    inputsToFill={[usernameString]}
                    onClick={handleLogin}
                />
            </form>
        </div>
    )
}

export default SignUp