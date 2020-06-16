import React from "react";
import WidgetService from "../../services/WidgetService";

export default class ParagraphWidgetComponent extends React.Component {
    state = {
        editing: false,
        widget: this.props.widget
    }

    updateWidget = () => {
        WidgetService.updateWidget(this.state.widget.id, this.state.widget)
    }

    updateWidgetText = (text) => {
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                text: text
            }
        }))
    }

    updateWidgetName = (name) => {
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                name: name
            }
        }))
    }

    render() {
        return (
            <div>
                {this.state.editing && <div>
                    <h3>Paragraph Widget</h3>
                    <input
                        className="form-control"
                        placeholder={"Paragraph Text"}
                        value={this.state.widget.text}
                        onChange={(event) => {
                            this.updateWidgetText(event.target.value)
                        }}/>


                    <input
                        className="form-control"
                        placeholder={"Widget Name"}
                        onChange={(event) => {
                            this.updateWidgetName(event.target.value)
                        }}/>
                </div>}


                {!this.state.editing &&
                <button onClick={() => this.setState(prevState => ({
                    editing: true
                }))}
                        className= "float-right">Edit</button>}

                {this.state.editing &&
                <button className= "float-right"
                        onClick={() => {
                            this.updateWidget()
                            this.setState(prevState => ({
                                editing: false
                            }))}}
                >Save</button>}

                <br/>
                <h3>Preview</h3>
                <p>{this.state.widget.text}</p>
            </div>
        )
    }
}
