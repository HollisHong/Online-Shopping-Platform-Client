import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () =>
        courseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))


// {/*<div className="col mb-4">*/}
// {/*    <div className="card ">*/}
// {/*        <img src="..." className="card-img-top" alt="..."/>*/}
// {/*            <div className="card-body">*/}
//     {/*                <h5 className="card-title">Card title</h5>*/}
//     {/*                <p className="card-text">a</p>*/}
//     {/*            </div>*/}
// {/*            <div className="card-footer">*/}
// {/*                <small className="text-muted">Last updated 3 mins ago</small>*/}
// {/*            </div>*/}
// {/*    </div>*/}
// {/*</div>*/}

    render = () => (
        <div className="col mb-4">
            <div className="card">
                <div className={this.state.editing ? 'bg-warning' : ''}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {
                                !this.state.editing &&
                                // <Link to={`/editor/${this.state.course._id}`}>
                                <Link to={`/editor/course/${this.state.course._id}`}>
                                    {this.state.course.title}
                                </Link>
                            }
                            {
                                this.state.editing &&
                                <input
                                    className="form-control"
                                    onChange={(event) => this.updateCourseTitle(event.target.value)}
                                    value={this.state.course.title}/>
                            }
                        </h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            {this.state.course.owner}
                            {
                                !this.state.editing &&
                                <span>
                                    <button
                                        className="btn-sm btn-danger float-right"
                                        onClick={
                                            () => this.props.deleteCourse(this.props.course)}>
                                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                    <button
                                        className="btn-sm btn-primary float-sm-right"
                                        onClick={() => this.setEditing(true)}>
                                        <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                    </button>
                                </span>
                            }

                            {
                                this.state.editing &&


                                <button
                                    className="btn-sm btn-success float-right"
                                    onClick={this.ok}>
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                </button>


                            }
                            <br/>
                            {this.state.course.modified}
                        </small>
                    </div>
                </div>

            </div>
        </div>
    )
}
