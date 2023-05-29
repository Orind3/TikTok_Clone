import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import HeaderOnly from '../components/GlobalStyles/Layouts/HeaderOnly';
import Search from '../pages/Search';
//Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/headeronly',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    }
];
//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
