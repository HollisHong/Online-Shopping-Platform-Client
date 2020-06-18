import React from 'react'
import logo from '../logo.svg';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import ProfileComponent from "./ProfileComponent";
import SearchTableComponent from "./SearchTableComponent";
import AmazonListContainer from "../containers/AmazonListContainer";
import RegisterComponent from "./RegisterComponent";

class HomePage extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div>
                        {/*<h1>TAOBAO</h1>*/}
                        {/*<br/>*/}
                        <Link to="/home">
                            <img src={logo} className="App-logo float-md-none" alt="logo" width={"300"}/>
                        </Link>
                        <br/>
                        <br/>
                    </div>

                    {/*TODO: port over registration, profile components*/}

                    <Route
                        path={['/', '/home']}
                        exact={true}
                        component={HomeComponent}
                    />

                    <Route
                        path='/login'
                        exact={true}
                        component={LoginComponent}
                    />
                    <Route
                        path='/search'
                        exact={true}
                        component={AmazonListContainer}
                    />

                    <Route
                        path='/register'
                        exact={true}
                        component={RegisterComponent}
                    />

                    <Route
                        path='/profile'
                        exact={true}
                        component={ProfileComponent}
                    />

                    {/*<Route*/}
                    {/*    path={['/editor/course/:courseId', '/editor/course/:courseId/modules/:moduleId',*/}
                    {/*        '/editor/course/:courseId/modules/:moduleId/lessons/:lessonId',*/}
                    {/*        '/editor/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId']}*/}
                    {/*    exact={true}*/}
                    {/*    component={CourseEditorComponent}/>*/}

                </div>
            </BrowserRouter>
        )
    }
}

export default HomePage
