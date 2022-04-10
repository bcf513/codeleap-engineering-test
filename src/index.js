import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import { createPost, userLogin } from "./actions/actions"
import store from './redux/store';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState())
})
store.dispatch(createPost({
    title: 'Possdatao',
    username: 'Brunin',
    created_datetime: 1649265166322,
    content: 'Que post daora'
}))
store.dispatch(createPost({
    title: 'Postao',
    username: 'Bruno',
    created_datetime: 1649297166322,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error animi facere officia iste consectetur nesciunt, doloremque rem voluptatibus sit tempora dolores, impedit ipsa nisi!'
}))
store.dispatch(userLogin("Brunin"))

const root = createRoot(document.getElementById('root'))
root.render(<App />)
