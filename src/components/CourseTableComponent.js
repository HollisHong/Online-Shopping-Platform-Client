import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {Link} from "react-router-dom";

export default class CourseTableComponent
    extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h3>Course Table {this.props.courses.length}</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="d-none d-md-table-cell">Owner</th>
                        <th className="d-none d-lg-table-cell">Last Modified</th>
                        <th>
                            <button><Link to="/grid/courses">
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                            </Link></button>
                            <button><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i></button>

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
