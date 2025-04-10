import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import './css/style.css'

const dynamicImport = (componentName) => lazy(() =>
    import('./component').then((module) => ({ default: module[componentName] }))
);

const Auth = dynamicImport('Auth');
const Main = dynamicImport('Main');
const Lesson = dynamicImport('Lesson');
const News = dynamicImport('News');
const NewsCreate = dynamicImport('NewsCreate');
const NewsView = dynamicImport('NewsView');
const Courses = dynamicImport('Courses');
const CourseCreate = dynamicImport('CourseCreate');
const Students = dynamicImport('Students');
const Employees = dynamicImport('Employees');
const UserCreate = dynamicImport('UserCreate');
const UserProfile = dynamicImport('UserProfile');
const UserEdit = dynamicImport('UserEdit');
const Settings = dynamicImport('Settings');
const Test = dynamicImport('Test');

const routes = [
    { path: "/", element: <Auth /> },
    { path: "/main", element: <Main /> },
    { path: "/lesson", element: <Lesson /> },
    { path: "/news", element: <News /> },
    { path: "/news/create", element: <NewsCreate /> },
    { path: "/news/:news", element: <NewsView /> },
    { path: "/courses", element: <Courses /> },
    { path: "/courses/create", element: <CourseCreate /> },
    { path: "/students", element: <Students /> },
    { path: "/employees", element: <Employees /> },
    { path: "/settings", element: <Settings /> },
    { path: "/test", element: <Test /> },
]

const userRoutes = [
    { basePath: "/students" },
    { basePath: "/employees" },
]

const createUserRoutes = (basePath) => [
    <Route key={`${basePath}/create`} path={`${basePath}/create`} element={<UserCreate />} />,
    <Route key={`${basePath}/profile`} path={`${basePath}/profile`} element={<UserProfile />} />,
    <Route key={`${basePath}/edit`} path={`${basePath}/edit`} element={<UserEdit />} />
]

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={false} mode='wait'>
            <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                {userRoutes.map((userRoute) => (
                    createUserRoutes(userRoute.basePath)
                ))}
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {

    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}

export default App;