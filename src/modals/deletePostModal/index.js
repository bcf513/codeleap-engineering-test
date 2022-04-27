
import Modal from 'react-modal/lib/components/Modal'
import './style.css'

const modalStyle = {
    content: { 
        height: 'fit-content',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        alignSelf: 'center'
    },
    overlay: {
        zIndex: 1000
    }

}

function DeletePostModal({isOpen, onRequestClose, onClickCancel, onClickConfirm}) {
  return (
    <Modal isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modalStyle}>
    <div className="modal">
        <h1>Delete item</h1>
        <p>Are you sure you want to delete this item?</p>
        <div className="buttons">
            <button onClick={onClickCancel}>CANCEL</button>
            <button onClick={onClickConfirm}>OK</button>
        </div>
    </div>
</Modal>
  )
}

export default DeletePostModal