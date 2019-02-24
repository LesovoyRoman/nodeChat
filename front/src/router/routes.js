/**
 * Components
 */
import HomePage from './../components/pages/Home'
import Chat from './../components/chat/Chat'

/**
 * Option "navbarUse" - uses in navbar as links
 * 
 * @type {*[]}
 */

export const routes = [
    {
        name: 'Home Page',
        path: '/',
        component: HomePage,
        navbarUse: true
    },
    {
        name: 'Chat',
        path: '/chat',
        component: Chat,
        navbarUse: true
    }
];