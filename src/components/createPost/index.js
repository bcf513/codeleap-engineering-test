import './style.css'
import CustomButton from '../../components/customButton';
import { useState } from 'react';
import store from '../../redux/store';
import { createPost } from "../../actions/actions"

function CreatePost({currentUserName, setvisiblePosts}) {

    const [titleString, settitleString] = useState('');
    const [contentString, setcontentString] = useState('');

    const handleButtonClick = () => {
        store.dispatch(
            createPost({
                title: titleString,
                username: currentUserName,
                created_datetime: Date.now(),
                content: contentString
            })
        )        
        const storePostList = [...store.getState().postList]
        const postListSorted = [...storePostList.sort((a, b) => b.created_datetime - a.created_datetime)]
        setvisiblePosts(postListSorted)
        settitleString('')
        setcontentString('')
    }

    return (
        <div className='createPost'>
            <h2>What's on your mind?</h2>
            <div className="textbox">
                <p>Title</p>
                <input type="text" 
                    placeholder='Hello World'
                    onChange={e => settitleString(e.target.value)}
                    value={titleString}
                />
            </div>
            <div className="textbox">
                <p>Content</p>
                <textarea placeholder='Content Here'
                    onChange={e => setcontentString(e.target.value)}
                    value={contentString}
                />
            </div>
            <CustomButton text='CREATE'
                inputsToFill={[titleString, contentString]}
                handleButtonClick={handleButtonClick}
            />
        </div>
    )
}

export default CreatePost