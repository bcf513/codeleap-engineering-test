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

    return (
        <nav>
            <p>Welcome, 'username'!</p>
            <button onClick={handleEditModal}>Logout</button>
            <Modal isOpen={isLogoutModalOpen}
                onRequestClose={handleEditModal}>
                <p>Are you sure you want to logout?</p>
                <button onClick={handleEditModal}>CANCEL</button>
                <button onClick={handleLogout}>LOGOUT</button>
            </Modal>
        </nav>
    )
}

export default NavBar