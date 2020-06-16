import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";
import TopicService from "../services/TopicService";
import topicReducer from "../reducers/topicReducer";


const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId, newTopic) => {
        TopicService.createTopic(lessonId, newTopic)
            .then(actualTopic => dispatch({
                type: 'CREATE_TOPIC',
                newTopic:actualTopic
            }))
    },
    findTopicsForLesson: (lessonId) => {
        TopicService.findTopicsForLesson(lessonId)
            .then(actualTopics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                actualTopics
            }))
    },
    deleteTopic: (topicId) => {
        TopicService.deleteTopic(topicId)
            .then(dispatch({
                type: "DELETE_TOPIC",
                topicId
            }))
    },
    updateTopic: (topicId, topic) => {
        TopicService.updateTopic(topicId, topic)
            .then(status => dispatch({
                type: 'UPDATE_TOPIC',
                updatedTopic: topic
            }))
    }


})

const TopicPillsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillsComponent)

export default TopicPillsContainer