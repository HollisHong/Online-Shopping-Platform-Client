import React from "react";
import {connect} from "react-redux";
import {findWidgetsForTopic, deleteWidget, createWidget} from '../services/WidgetService'
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import widgetReducer from "../reducers/widgetReducer";


class WidgetListComponent extends React.Component {
    state = {
        //TODO
        editingWidget: {},
        highlightWidget: '',
    }

    componentDidMount() {
        // TODO: read topicId from match.params.topicId, i.e., from the Route
        this.props.findWidgetsForTopic(this.props.params.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId)
        }
    }




    render() {
        return (
            <div>
                <h2>Widget List</h2>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <li key={widget.id}>
                                {console.log(widget)}
                                {
                                    widget.type === 'HEADING' &&
                                    <HeadingWidgetComponent widget={widget}/>
                                }
                                {
                                    widget.type === 'PARAGRAPH' &&
                                    <ParagraphWidgetComponent widget={widget}/>
                                }

                                <div>
                                    <select defaultValue={widget.type}
                                            onChange={(event) => {
                                                this.props.updateWidget(widget.id, {
                                                    ...widget,
                                                    type: event.target.value
                                                })
                                            }}>
                                        <option value="HEADING">Heading</option>
                                        <option value='PARAGRAPH'>Paragraph</option>
                                    </select>
                                    <button onClick={() => this.props.deleteWidget(widget.id)}>
                                        Delete
                                    </button>
                                    {!widget.head && <button
                                        onClick={() => this.props.moveUp(widget.id)}
                                    >Move Up</button>}

                                    {!widget.tail && <button
                                        onClick={() => this.props.moveDown(widget.id)}
                                    >Move Down</button>}

                                </div>
                                <br/>
                            </li>


                        )
                    }
                </ul>
                <button onClick={() =>
                    this.props.createWidget(this.props.params.topicId, {
                    type: 'HEADING', name: 'New Widget', topicId: this.props.params.topicId, size: 1, text: 'Heading text'})
                        .then(this.props.findWidgetsForTopic(this.props.params.topicId))

                }>
                    Create Widget
                </button>
            </div>
        )
    }
}

export default WidgetListComponent

