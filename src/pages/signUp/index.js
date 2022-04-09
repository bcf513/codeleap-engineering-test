import CustomButton from '../../components/customButton'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import store from '../../redux/store';
import { userLogin } from '../../actions/actions';

function SignUp() {

    const navigate = useNavigate()

    const [usernameString, setusernameString] = useState('');

    const handleLogin = () => {
        store.dispatch(userLogin(usernameString))
        navigate("/")
    }

    return (
        <div className='signUpExternalBox'>
            <h1>Welcome to CodeLeap network!</h1>
            <p>Please enter your username:</p>
            <input type="text" 
                placeholder='Your username here'
                onChange={e => setusernameString(e.target.value)}
            />
            <CustomButton text='ENTER'
                inputsToFill={[usernameString]}
                handleButtonClick={handleLogin}
            />
        </div>
    )
}

export default SignUp