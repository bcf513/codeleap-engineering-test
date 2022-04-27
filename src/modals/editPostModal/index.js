import Modal from 'react-modal/lib/components/Modal'
import CustomTextArea from '../../components/customTextArea'
import { useState, useEffect } from 'react';
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

function EditPostModal({isOpen, onRequestClose, onClickCancel, onSubmit, post}) {

    const [inputs, setinputs] = useState(post);

    useEffect(() => setinputs(post), [post])

    const handleInputChange = e => {

        const { name, value } = e.target
        setinputs(values => ({...values, [name]: value}))
        
    }
    
    const handleSubmit = e => {
        
        if (e !== undefined) e.preventDefault()

        console.log({inputs})
        onSubmit(inputs)

    }

    return (
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={modalStyle}>
            <div className="modal">
                <h1>Edit item</h1>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <label htmlFor="modalTitle">Title</label>
                        <input type="text" 
                            id='modalTitle'
                            name='title'
                            placeholder='Hello World'
                            onChange={handleInputChange}
                            value={inputs.title}
                        />
                    </div>
                    <div className="textbox">
                        <label htmlFor="modalContent">Content</label>
                        <CustomTextArea 
                            id='modalContent'
                            name='content'
                            placeholder='Content Here'
                            onChange={handleInputChange}
                            onSubmit={handleSubmit}
                            value={inputs.content}
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={onClickCancel} type='button'>CANCEL</button>
                        <button onClick={handleSubmit} type='button'>OK</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default EditPostModal