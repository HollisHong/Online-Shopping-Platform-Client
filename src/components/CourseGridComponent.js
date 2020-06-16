import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import {Link} from "react-router-dom";

export default class CourseGridComponent
  extends React.Component
{
  render() {
    return(
        <div>
            <br/>
            <h3>Course Grid -
                {this.props.courses.length}
                <button className={'float-right'}><Link to="/table/courses">
                    <i className="fa fa-list" aria-hidden="true"></i>
                </Link></button>
            </h3>

            <br/>

            <div className="card-group container row row-cols-1 row-cols-sm-2
                    row-cols-md-3 row-cols-lg-4 row-cols-xl-6" >

                {this.props.courses.map(course =>
                        <CourseCardComponent
                            deleteCourse={this.props.deleteCourse}
                            key={course._id}
                            course={course}/>
                    )}
            </div>
        </div>

    )
  }
}

