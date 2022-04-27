
import Modal from 'react-modal/lib/components/Modal'
import './style.css'
    
const modalStyle = {
    content: { 
        height: 'fit-content',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

function LogoutModal({isOpen, onRequestClose, onClickCancel, onClickConfirm}) {
  return (
    <Modal isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modalStyle}>
    <div className="modal">
        <h1>Logout</h1>
        <p>Are you sure you want to logout?</p>
        <div className="buttons">
            <button onClick={onClickCancel}>CANCEL</button>
            <button onClick={onClickConfirm}>LOGOUT</button>
        </div>
    </div>
</Modal>
  )
}

export default LogoutModal