import './style.css'
import CreatePost from '../../components/createPost';
import UserPost from '../../components/userPost';
import NavBar from '../../layout/navBar';
import { useState } from 'react';
import store from '../../redux/store';
import { editPost, deletePost } from '../../actions/actions';
import DeletePostModal from '../../modals/deletePostModal';
import EditPostModal from '../../modals/editPostModal';

function MainScreen() {

    const [visiblePosts, setvisiblePosts] = useState([...store.getState().postList]);
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
    const [currentPost, setcurrentPost] = useState(undefined);
    const [postToEdit, setpostToEdit] = useState({title: '', content: ''});

    const editUserpost = (postData) => {

        const { title, content } = postData

        const post = {
            id: currentPost,
            title: title,
            username: store.getState().loggedIn,
            created_datetime: Date.now(),
            content: content
        }
        store.dispatch(editPost(post))
        const storePostList = [...store.getState().postList]
        const postListSorted = [...storePostList.sort((a, b) => b.created_datetime - a.created_datetime)]
        setvisiblePosts(postListSorted)

        setisEditModalOpen(false)

    }

    const deleteUserpost = () => {

        store.dispatch(deletePost(currentPost))
        setvisiblePosts([...store.getState().postList])

        setisDeleteModalOpen(false)
        
    }

    const handleEditModal = id => {
        setisEditModalOpen(isEditModalOpen ? false : true)
        if (!isEditModalOpen) {
            const post = visiblePosts.find(post => post.id === id)
            const { title, content } = post
            setpostToEdit({ title, content })
            setcurrentPost(id)
        }
    }

    const handleDeleteModal = id => {

        setisDeleteModalOpen(isDeleteModalOpen ? false : true)
        if (!isDeleteModalOpen) setcurrentPost(id)

    }

    return (
        <main>
            <NavBar/>
            <div className='mainScreen'>
                <CreatePost currentUserName={store.getState().loggedIn} 
                    setvisiblePosts={setvisiblePosts}/>
                {
                    visiblePosts.map((post, key) => 
                        <UserPost key={key} post={post} 
                            currentUserName={store.getState().loggedIn}
                            handleEditModal={handleEditModal}
                            handleDeleteModal={handleDeleteModal}
                        />
                    )
                }
                <EditPostModal 
                    isOpen={isEditModalOpen}
                    onRequestClose={handleEditModal}
                    onClickCancel={handleEditModal}
                    onSubmit={editUserpost}
                    post={postToEdit}
                    setPost={setpostToEdit}
                />
                <DeletePostModal 
                    isOpen={isDeleteModalOpen}
                    onRequestClose={handleDeleteModal}
                    onClickCancel={handleDeleteModal}
                    onClickConfirm={deleteUserpost}
                />
            </div>
        </main>
    )
}

export default MainScreen