import './style.css'
import CustomButton from '../../components/customButton';
import { useState } from 'react';
import store from '../../redux/store';
import { createPost } from "../../actions/actions"
import CustomTextArea from '../customTextArea';

const initialInput = {
    title: '',
    content: ''
}

function CreatePost({currentUserName, setvisiblePosts}) {

    const [inputs, setinputs] = useState(initialInput);

    const handleSubmit = e => {
        
        if (e !== undefined) e.preventDefault()
        
        const { title, content } = inputs
        if (title.length !== 0 && content.length !== 0) handleCreatePost()

    }

    const handleCreatePost = () => {

        const { title, content } = inputs   
        store.dispatch(
            createPost({
                title: title,
                username: currentUserName,
                created_datetime: Date.now(),
                content: content
            })
        )        
        const storePostList = [...store.getState().postList]
        const postListSorted = [...storePostList.sort((a, b) => b.created_datetime - a.created_datetime)]
        setvisiblePosts(postListSorted)

        setinputs(initialInput)
    }

    const handleInputChange = e => {

        const { name, value } = e.target
        setinputs(values => ({...values, [name]: value}))

    }

    return (
        <form 
         className='createPost'
         onSubmit={handleSubmit}>
            <h2>What's on your mind?</h2>
            <div className="textbox">
                <label htmlFor="title">Title</label>
                <input type="text" 
                    id='title'
                    name='title'
                    placeholder='Hello World'
                    onChange={handleInputChange}
                    value={inputs.title}
                />
            </div>
            <div className="textbox">
                <label htmlFor="content">Content</label>
                <CustomTextArea placeholder='Content Here'
                    id='content'
                    name='content'
                    value={inputs.content}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </div>
            <CustomButton text='CREATE'
                inputsToFill={[inputs.title, inputs.content]}
                onClick={handleSubmit}
            />
        </form>
    )
}

export default CreatePost