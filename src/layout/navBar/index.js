import './style.css'
import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import store from '../../redux/store';
import { userLogout } from '../../actions/actions';

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
    
    const modalStyle = {
        content: { 
            height: 'fit-content',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }

    return (
        <nav>
            <div id='navBarContent'>
                <h1>CodeLeap Network</h1>
                <div className="greetings_and_logout_button">
                    <p>Welcome, {store.getState().loggedIn}!</p>
                    <button onClick={handleEditModal}>Logout</button>
                </div>
            </div>
            <Modal isOpen={isLogoutModalOpen}
                onRequestClose={handleEditModal}
                style={modalStyle}>
                <div className="modal">
                    <h1>Logout</h1>
                    <p>Are you sure you want to logout?</p>
                    <div className="buttons">
                        <button onClick={handleEditModal}>CANCEL</button>
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>
            </Modal>
        </nav>
    )
}

export default NavBar