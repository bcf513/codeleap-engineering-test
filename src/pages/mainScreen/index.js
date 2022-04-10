import './style.css'
import CreatePost from '../../components/createPost';
import UserPost from '../../components/userPost';
import NavBar from '../../layout/navBar';
import { useState } from 'react';
import Modal from 'react-modal';
import store from '../../redux/store';
import { editPost, deletePost } from '../../actions/actions';

function MainScreen() {

    const [visiblePosts, setvisiblePosts] = useState([...store.getState().postList]);
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
    const [currentPost, setcurrentPost] = useState(undefined);
    const [editTitle, seteditTitle] = useState('');
    const [editContent, seteditContent] = useState('');

    const handleEditPost = () => {
        const post = {
            id: currentPost,
            title: editTitle,
            username: 'Bruno',
            created_datetime: Date.now(),
            content: editContent
        }
        store.dispatch(editPost(post))
        setvisiblePosts([...store.getState().postList])
        setisEditModalOpen(false)
    }

    const handleDeletePost = () => {
        store.dispatch(deletePost(currentPost))
        setvisiblePosts([...store.getState().postList])
        setisDeleteModalOpen(false)
    }

    const handleEditModal = (id) => {
        setisEditModalOpen(isEditModalOpen ? false : true)
        if (!isEditModalOpen) {
            const post = visiblePosts.find(post => post.id === id)
            console.log(post)
            seteditTitle(post.title)
            seteditContent(post.content)
            setcurrentPost(id)
        }
    }

    const handleDeleteModal = (id) => {
        setisDeleteModalOpen(isDeleteModalOpen ? false : true)
        if (!isDeleteModalOpen) setcurrentPost(id)
    }

    const modalStyle = {
        content: { 
            height: 'fit-content',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '10px'
        }
    }

    return (
        <main>
            <NavBar />
            <div className='mainScreen'>
                <CreatePost currentUserName={store.getState().loggedIn} 
                    setvisiblePosts={setvisiblePosts}/>
                {
                    visiblePosts.map((post, key) => 
                        <UserPost key={key} post={post} 
                            currentUserName={store.getState().loggedIn}
                            handleEditModal={handleEditModal}
                            handleDeleteModal={handleDeleteModal}
                        />)
                }
                <Modal isOpen={isEditModalOpen}
                    onRequestClose={handleEditModal}
                    style={modalStyle}>
                    <div className="modal">
                        <h1>Edit item</h1>
                        <div className="textbox">
                            <p>Title</p>
                            <input type="text" 
                                placeholder='Hello World'
                                onChange={e => seteditTitle(e.target.value)}
                                defaultValue={editTitle}
                            />
                        </div>
                        <div className="textbox">
                            <p>Content</p> 
                            <textarea
                                placeholder='Content Here'
                                onChange={e => seteditContent(e.target.value)}
                                defaultValue={editContent}
                            />
                        </div>
                        <div className="buttons">
                            <button onClick={handleEditModal}>CANCEL</button>
                            <button onClick={handleEditPost}>OK</button>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={isDeleteModalOpen}
                    onRequestClose={handleDeleteModal}
                    style={modalStyle}>
                    <div className="modal">
                        <h1>Delete item</h1>
                        <p>Are you sure you want to delete this item?</p>
                        <div className="buttons">
                            <button onClick={handleDeleteModal}>CANCEL</button>
                            <button onClick={handleDeletePost}>OK</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </main>
    )
}

export default MainScreen