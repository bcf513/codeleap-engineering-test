import CreatePost from '../../components/createPost';
import UserPost from '../../components/userPost';
import NavBar from '../../layout/navBar';
import { useState } from 'react';
import Modal from 'react-modal';
import store from '../../redux/store';
import { editPost, deletePost } from '../../actions/actions';

function MainScreen() {

    const [visiblePosts, setvisiblePosts] = useState([
        {
            title: 'Postao',
            username: 'Bruno',
            postDate: 1649297166322,
            content: 'sdouasdo m oasdij dlaskld msakop dasm dasmk'
        },
        {
            title: 'Possdatao',
            username: 'Euzaoho',
            postDate: 1649265166322,
            content: 'Que post daora'
        }
    ]);
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
    const [currentPost, setcurrentPost] = useState(undefined);
    const [editTitle, seteditTitle] = useState('');
    const [editContent, seteditContent] = useState('');

    const addPost = (newPost) => {
        const posts = [...visiblePosts]
        posts.unshift(newPost)
        setvisiblePosts(posts)
    }

    const editPost = () => {
        const post = {
            id: currentPost,
            title: editTitle,
            username: 'Bruno',
            postDate: Date.now(),
            content: editContent
        }
        const posts = [...visiblePosts]
        posts.splice(currentPost, 1, post)
        setvisiblePosts(posts)
        setisEditModalOpen(false)
        store.dispatch(editPost(post))
    }

    const deletePost = () => {
        const posts = [...visiblePosts]
        posts.splice(currentPost, 1)
        setvisiblePosts(posts)
        setisDeleteModalOpen(false)
        store.dispatch(deletePost(currentPost))
    }

    const handleEditModal = (postKey) => {
        if (!isEditModalOpen) {
            console.log(visiblePosts[postKey])
            seteditTitle(visiblePosts[postKey].title)
            seteditContent(visiblePosts[postKey].content)
            setcurrentPost(postKey)
        }
        setisEditModalOpen(isEditModalOpen ? false : true)
    }

    const handleDeleteModal = (postKey) => {
        if (!isDeleteModalOpen) setcurrentPost(postKey)
        setisDeleteModalOpen(isDeleteModalOpen ? false : true)
    }

    return (
        <div>
            <NavBar />
            <CreatePost addPost={addPost}/>
            {
                visiblePosts.map((post, key) => 
                    <UserPost key={key} postkey={key} post={post} 
                        currentUserName={store.getState().userReducer.username}
                        handleEditModal={handleEditModal}
                        handleDeleteModal={handleDeleteModal}
                    />)
            }
            <Modal isOpen={isEditModalOpen}
                onRequestClose={handleEditModal}>
                <h1>Edit item</h1>
                <p>Title</p>
                <input type="text" 
                    placeholder='Hello World'
                    onChange={e => seteditTitle(e.target.value)}
                    defaultValue={editTitle}
                />
                <p>Content</p>
                <input type="text" 
                    placeholder='Content Here'
                    onChange={e => seteditContent(e.target.value)}
                    defaultValue={editContent}
                />
                <button onClick={handleEditModal}>CANCEL</button>
                <button onClick={editPost}>EDIT MODAL</button>
            </Modal>
            <Modal isOpen={isDeleteModalOpen}
                onRequestClose={handleDeleteModal}>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={handleDeleteModal}>CANCEL</button>
                <button onClick={deletePost}>DELETE MODAL</button>
            </Modal>
        </div>
    )
}

export default MainScreen