/**
 * Components
 */
import HomePage from './../components/pages/Home'
import Chat from './../components/chat/Chat'
import ChatRooms from './../components/pages/ChatRooms'

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
        path: '/chat/:id',
        component: Chat,
        navbarUse: false
    },
    {
        name: 'Rooms',
        path: '/rooms',
        component: ChatRooms,
        navbarUse: true
    }
];