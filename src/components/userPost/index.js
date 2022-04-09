import moment from 'moment'

function UserPost({postkey, post, currentUserName, handleEditModal, handleDeleteModal}) {

    const {title, username, postDate, content} = post

    console.log('Post', title)

    return (
        <div id='userpost'>
            <div>
                <h1>{title}</h1>
                {(username === currentUserName) && 
                    <div>
                        <button onClick={() => handleEditModal(postkey)}>EDIT</button>
                        <button onClick={() => handleDeleteModal(postkey)}>DELETE</button>
                    </div>
                }
            </div>
            <div>
                <p>@{username}</p>
                <p>{moment(postDate).fromNow()}</p>
            </div>
            <p>{content}</p>
        </div>
    )
}

export default UserPost