import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
//import {findLessonsForModule, createLesson} from "../services/LessonService";

class LessonTabsComponent extends React.Component {
    state = {
        editingLesson: {},
        highlightLesson: ''
    }

    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
    }

    render() {
        return(
            <div>
                <h3>Lesson Tabs </h3>
                {/*{this.props.params.moduleId}*/}
                <ul className={'container'}>
                    {
                        this.props.lessons.map(lesson =>
                            <li
                            className={`list-group-item ${(this.state.highlightLesson === lesson._id
                                || this.state.editingLesson._id === lesson._id) ? 'list-group-item-warning' : ''}`}
                                key={lesson._id}>
                                {
                                    this.state.editingLesson._id === lesson._id &&
                                    <span>
                                    <button onClick={() => this.props.deleteLesson(lesson._id)}>
                                      <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                    <button onClick={() => {
                                        this.props.updateLesson(this.state.editingLesson._id, this.state.editingLesson)
                                        this.setState({editingLesson: {}})
                                    }}>
                                      <i className="fa fa-floppy-o" aria-hidden="true"></i>
                                    </button>
                                    <input onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            editingLesson: {
                                                ...prevState.editingLesson,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                           value={this.state.editingLesson.title}/>
                                    </span>
                                }
                                {
                                    this.state.editingLesson._id !== lesson._id &&
                                    <span>
                                        <button onClick={() => this.setState({editingLesson: lesson})}>
                                          <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                        <Link onClick={() => this.setState({highlightLesson: lesson._id})}
                                            to={`/editor/course/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${lesson._id}`}>
                                          {lesson.title}
                                        </Link>
                                    </span>
                                }
                            </li>
                        )
                    }
                </ul>
                <button onClick={() => this.props.createLesson(
                    this.props.params.moduleId,
                    {
                        title: 'New Lesson'
                    })}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default LessonTabsComponent



