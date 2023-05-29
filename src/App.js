import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/GlobalStyles/Layouts/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    var Layout = DefaultLayout;
                    if (route.layout === null) {
                        Layout = Fragment;
                    } else if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
