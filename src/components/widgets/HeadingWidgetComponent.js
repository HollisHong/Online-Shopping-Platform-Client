import React from "react";
import WidgetService from "../../services/WidgetService";

export default class HeadingWidgetComponent extends React.Component {
    state = {
        // size: this.props.widget.size,
        // text: this.props.widget.text,
        // name: this.props.widget.name,
        widget: this.props.widget,
        editing: false
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

    updateWidgetSize = (size) => {
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                size: size
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
                {/*{this.props.widget.widgetOrder}*/}
                {this.state.editing && <div>
                    <h3>Heading Widget</h3>

                    <input
                        className="form-control"
                        placeholder={"Heading Text"}
                        value={this.state.widget.text}
                        onChange={(event) => {
                            this.updateWidgetText(event.target.value)
                            // this.setState({text: event.target.value})
                            // this.props.widget.text = event.target.value
                        }}/>
                    <br/>
                    <select className="form-control"
                            onChange={(event) => {
                                this.updateWidgetSize(parseInt(event.target.value))
                                // this.setState({size: parseInt(event.target.value)})
                                // this.props.widget.name = event.target.value
                            }}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                    </select>
                    <br/>
                    <input
                        className="form-control"
                        placeholder={"Widget Name"}
                        onChange={(event) => {
                            this.updateWidgetName(event.target.value)
                        }}/>
                    <br/>
                </div> }
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
                <div>


                    <h2>Preview</h2>
                    {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                    {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                    {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                    {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                    {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                </div>

                <br/>

            </div>
        )
    }
}
