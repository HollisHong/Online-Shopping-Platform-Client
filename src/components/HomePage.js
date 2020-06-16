import React from 'react'
import logo from '../logo.svg';
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditorComponent from "./CourseEditorComponent";
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LogicComponent";

class HomePage extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <div>
            {/*<h1>TAOBAO</h1>*/}
              <img src={logo} className="App-logo" alt="logo" width={"300"}/>
            <Link to="/">
              <i className="fa fa-home float-right" aria-hidden="true"></i>
            </Link>
          </div>
          <Route path="/login" exact={true} component={LoginComponent}/>

          {/*TODO: port over registration, profile components*/}

          <Route
            path={['/', '/home']}
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor'
            exact={true}
            component={CourseEditorComponent}/>

          <Route
              path={['/editor/course/:courseId', '/editor/course/:courseId/modules/:moduleId',
                '/editor/course/:courseId/modules/:moduleId/lessons/:lessonId',
                '/editor/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId']}
              exact={true}
              component={CourseEditorComponent}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default HomePage
