
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    createWidget: (tid, widget) =>
        WidgetService.createWidget(tid, widget)
            .then(actualNewWidgetFromServer =>
                dispatcher({
                    type: "CREATE_WIDGET",
                    widget: actualNewWidgetFromServer
                })
            ),

    deleteWidget: (wid) =>
        WidgetService.deleteWidget(wid)
            .then(status =>
                dispatcher({
                    type: "DELETE_WIDGET",
                    widgetId: wid
                })),

    findWidgetsForTopic: (tid) =>
        WidgetService.findWidgetsForTopic(tid)
            .then(actualWidgetsFromServer =>
                dispatcher({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgetsFromServer: actualWidgetsFromServer
                })),
    updateWidget: (wid, widget) => {
        WidgetService.updateWidget(wid, widget)
            .then(status => dispatcher({
                type: 'UPDATE_WIDGET',
                updatedWidget: widget
            }))
    }
})
const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)

export default WidgetListContainer