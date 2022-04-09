import CustomButton from '../../components/customButton';
import { useState } from 'react';
import store from '../../redux/store';
import { createPost } from "../../actions/actions"

function CreatePost({addPost}) {

    const [titleString, settitleString] = useState('');
    const [contentString, setcontentString] = useState('');

    const handleButtonClick = () => {
        store.dispatch(
            createPost({
                title: titleString,
                username: 'Bruno',
                postDate: Date.now(),
                content: contentString
            })
        )        
        addPost({
            title: titleString,
            username: 'Bruno',
            postDate: Date.now(),
            content: contentString
        })
        settitleString('')
        setcontentString('')
    }

    return (
        <div>
            <h1>CodeLeap Network</h1>
            <h2>What's on your mind?</h2>
            <p>Title</p>
            <input type="text" 
                placeholder='Hello World'
                onChange={e => settitleString(e.target.value)}
                value={titleString}
            />
            <p>Content</p>
            <input type="text" 
                placeholder='Content Here'
                onChange={e => setcontentString(e.target.value)}
                value={contentString}
            />
            <CustomButton text='CREATE'
                inputsToFill={[titleString, contentString]}
                handleButtonClick={handleButtonClick}
            />
        </div>
    )
}

export default CreatePost