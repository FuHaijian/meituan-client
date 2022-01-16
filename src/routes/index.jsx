import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(()=> import('../pages/Main/Main'));
const Classify = lazy(() => import('../pages/Classify/Classify'))
const ShoppingCart = lazy(() => import('../pages/ShoppingCart/ShoppingCart'))
const My = lazy(() => import('../pages/My/My'))
const Search = lazy(() => import('../pages/Search/Search'))
const Detail = lazy(() => import('../pages/Detail/Deatil'))
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'))
import Tabbuttom from '../components/tabbuttom/Tabbuttom'

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/home" }/>,
        },
        {
            path:'/home',
            component: Tabbuttom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main)
                },
                {
                    path: '/home/classify',
                    component: SuspenseComponent(Classify)
                },
                {
                    path: '/home/shoppingCart',
                    component: SuspenseComponent(ShoppingCart)
                },
                {
                    path: '/home/my',
                    component: SuspenseComponent(My)
                }
            ]
        },
        {
            path: '/search',
            exact: true,
            component: SuspenseComponent(Search)
        },
        {
            path: '/detail',
            component: SuspenseComponent(Detail),
            // render: () => < Redirect to = { "/detail/error" }/>,
            routes: [
                {
                    path: '/detail/:type',
                    component: SuspenseComponent(Detail)
                },
               
            ]
        },
        // {
        //     path: '/error',
        //     component: SuspenseComponent(ErrorPage)
        // },
    ]
}]

