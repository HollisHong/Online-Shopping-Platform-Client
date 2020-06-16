import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {
    state = {
        editingTopic: {},
        highlightTopic: ''
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
        }
    }

    render() {
        return(
            <div>
                <h3>Topic Pills </h3>
                {/*{this.props.params.lessonId}*/}
                <ul className={'container'}>
                    {
                        this.props.topics.map(topic =>
                            <li className={`list-group-item ${(this.state.highlightTopic === topic._id
                                || this.state.editingTopic._id === topic._id) ? 'list-group-item-warning' : ''}`}
                                key={topic._id}>
                                {
                                    this.state.editingTopic._id === topic._id &&
                                    <span>
                                    <button onClick={() => this.props.deleteTopic(topic._id)}>
                                      <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                    <button onClick={() => {
                                        this.props.updateTopic(this.state.editingTopic._id, this.state.editingTopic)
                                        this.setState({editingTopic: {}})
                                    }}>
                                      <i className="fa fa-floppy-o" aria-hidden="true"></i>
                                    </button>
                                    <input onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            editingTopic: {
                                                ...prevState.editingTopic,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                           value={this.state.editingTopic.title}/>
                                    </span>
                                }
                                {
                                    this.state.editingTopic._id !== topic._id &&
                                    <span>
                                        <button onClick={() => this.setState({editingTopic: topic})}>
                                          <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                        <Link to={`/editor/course/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic._id}`}
                                            onClick={() => this.setState({highlightTopic: topic._id})}>
                                            {topic.title}
                                        </Link>
                                    </span>
                                }
                            </li>
                        )
                    }
                </ul>
                <button onClick={() => this.props.createTopic(
                    this.props.params.lessonId,
                    {
                        title: 'New Topic'
                    })}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default TopicPillsComponent