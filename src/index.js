import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import { createPost, editPost, deletePost, userLogin } from "./actions/actions"
import store from './redux/store';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState())
    //console.log("Store changed!", store.getState().userReducer.username)
})

store.dispatch(
    createPost({
        title: 'titleString',
        username: 'Bruno',
        postDate: Date.now(),
        content: 'contentString'
    })
)

store.dispatch(
    editPost({
        id: 1,
        title: 'PRO',
        username: 'Bruno',
        postDate: Date.now(),
        content: 'BOSTA'
    })
)

store.dispatch(deletePost(1))

store.dispatch(userLogin("Brunin"))

const root = createRoot(document.getElementById('root'))
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
