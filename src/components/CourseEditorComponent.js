import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabComponent from "./LessonTabsComponent";
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import CourseListContainer from "../containers/CourseListContainer";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import CourseService from "../services/CourseService";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import WidgetListContainer from "../containers/WidgetListContainer";

class CourseEditorComponent extends React.Component {
    state = {
        course: {}
    }

    componentDidMount() {
        CourseService.findCourseById(this.props.match.params.courseId)
            .then(response => this.setState({
                course:response
            }))
    }


    render() {
        return (
            <div>
                <h2>Course Editor</h2>
                <div className="row container">
                    <h2>{this.state.course.title}</h2>
                        <Link
                            to="/courses">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </Link>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ModuleListContainer {...this.props.match}/>
                    </div>
                    <div className="col-6">
                        {(this.props.match.params.moduleId !== undefined) &&
                            <LessonTabsContainer {...this.props.match}/>}
                        {(this.props.match.params.moduleId === undefined) &&
                        <h4>Click a module to see tabs</h4>}
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-6">
                        {(this.props.match.params.lessonId !== undefined) &&
                        <TopicPillsContainer {...this.props.match}/>}
                        {(this.props.match.params.lessonId === undefined) &&
                        <h4>Click a tab to see topics</h4>}
                    </div>
                    <div className="col-6">
                        {(this.props.match.params.topicId !== undefined) &&
                        <WidgetListContainer {...this.props.match}/>}
                        {(this.props.match.params.topicId === undefined) &&
                        <h4>Click a topic to see widgets</h4>}
                    </div>
                </div>
            </div>

        )
    }
}
export default CourseEditorComponent

