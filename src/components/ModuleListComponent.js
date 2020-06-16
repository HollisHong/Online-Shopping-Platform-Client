import React from "react";
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
    state = {
        editingModule: {},
        highlightModule: ''
    }

    componentDidMount() {
        // this.props.findAllModules()
        this.props.findModuleForCourse(this.props.params.courseId)
    }

    render() {
        return (
            <div>
                <h3>Modules ({this.props.modules.length})</h3>
                {/*({this.props.params.courseId})*/}
                <ul className={'container'}>
                    {
                        this.props.modules.map(module =>
                        <li className={`list-group-item ${(this.state.highlightModule === module._id
                            || this.state.editingModule._id === module._id) ? 'list-group-item-warning' : ''}`}
                            key={module._id}>

                            {this.state.editingModule._id === module._id &&
                                <span>
                    <button onClick={() => this.props.deleteModule(module._id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button onClick={() => {
                        this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                        this.setState({editingModule: {}})
                    }}>
                      <i className="fa fa-floppy-o" aria-hidden="true"></i>
                    </button>
                    <input onChange={(e) => {
                        const newTitle = e.target.value
                        this.setState(prevState => ({
                            editingModule: {
                                ...prevState.editingModule,
                                title: newTitle
                            }
                        }))
                    }}
                           value={this.state.editingModule.title}/>
                    </span>
                                    }
                                    {
                                        this.state.editingModule._id !== module._id &&
                                        <span>
                    <button onClick={() => this.setState({editingModule: module})}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <Link onClick={() => this.setState({highlightModule: module._id})}
                          to={`/editor/course/${this.props.params.courseId}/modules/${module._id}`}>
                      {module.title}
                    </Link>
                  </span>
                                    }
                                </li>
                        )
                    }
                </ul>

                <button onClick={() => this.props.createModule(
                    this.props.params.courseId,
                    {
                        title: 'New Module'
                    })}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default ModuleListComponent
