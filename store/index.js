import { createStore, applyMiddleware ,compose} from 'redux';
import devTools from 'remote-redux-devtools'
import reducers from '../reducers';
import thunk from 'redux-thunk'

export default function configureStore(navReducer,initialState = {}) {
    return createStore(
        reducers(navReducer),
        initialState,
        compose(
            applyMiddleware(thunk),
            devTools({
                hostname: 'localhost',
                port: 5678,
                secure: false
            })
        )
    );
}
// function configureStore(initialState = {}) {
//     return createStore(
//         reducers,
//         initialState,
//         compose(
//             applyMiddleware(thunk),
//             devTools({
//                 hostname: 'localhost',
//                 port: 5678,
//                 secure: false
//             })
//         )
//     );
// }
//
// module.exports = configureStore;
