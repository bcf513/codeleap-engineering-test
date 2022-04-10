import './style.css'
import moment from 'moment'

function UserPost({post, currentUserName, handleEditModal, handleDeleteModal}) {

    const {id, title, username, created_datetime, content} = post

    return (
        <div className='userpost'>
            <div className='postTitle'>
                <h1>{title}</h1>
                {(username === currentUserName) && 
                    <div className='edit_delete_buttons'>
                        <button onClick={() => handleEditModal(id)}>EDIT</button>
                        <button onClick={() => handleDeleteModal(id)}>DELETE</button>
                    </div>
                }
            </div>
            <div className='post_content'>
                <div className='username_and_created_datetime'>
                    <p>@{username}</p>
                    <p>{moment(created_datetime).fromNow()}</p>
                </div>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default UserPost