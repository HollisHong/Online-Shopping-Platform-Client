import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseRowComponent extends React.Component {
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

  render = () => (
      <tr className={this.state.editing ? 'table-primary' : ''}>
        <td>
          {
            !this.state.editing &&
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
        </td>
        <td className="d-none d-md-table-cell">{this.state.course.owner}</td>
        <td className="d-none d-lg-table-cell">{this.state.course.modified}</td>
        <td>
          {
            !this.state.editing &&
            <span>
                <button
                  className="btn btn-primary"
                  onClick={() => this.setEditing(true)}>
                  <i className="fa fa-pencil-square" aria-hidden="true"></i>
                </button>
                  <button
                  className="btn btn-danger"
                  onClick={
                  () => this.props.deleteCourse(this.props.course)}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
            </span>
          }
          {
            this.state.editing &&
            <button
                  className="btn btn-success"
                  onClick={this.ok}>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
          }
        </td>
      </tr>
    )
}
