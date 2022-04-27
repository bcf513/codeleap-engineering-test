import './style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import store from '../../redux/store';
import { userLogout } from '../../actions/actions';
import LogoutModal from '../../modals/logoutModal';

function NavBar() {

    const navigate = useNavigate()

    const [isLogoutModalOpen, setisLogoutModalOpen] = useState(false);

    const handleEditModal = () => {
        setisLogoutModalOpen(isLogoutModalOpen ? false : true)
    }

    const handleLogout = () => {
        store.dispatch(userLogout())
        navigate("/signup")
    }

    return (
        <nav>
            <div className="usernameLogin">
                <p>Welcome, {store.getState().loggedIn}!</p>
            </div>
            <h1>CodeLeap Network</h1>
            <div className="logoutButton">
                <button onClick={handleEditModal}>Logout</button>
            </div>
            <LogoutModal 
                isOpen={isLogoutModalOpen}
                onRequestClose={handleEditModal}
                onClickCancel={handleEditModal}
                onClickConfirm={handleLogout}
            />
        </nav>
    )
}

export default NavBar