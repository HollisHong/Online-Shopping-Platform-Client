import {connect} from "react-redux";
import LessonTabComponent from "../components/LessonTabsComponent";
import LessonService from "../services/LessonService";
import lessonReducer from "../reducers/lessonReducer";
import ModuleService from "../services/ModuleService";







const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, newLesson) => {
        LessonService.createLesson(moduleId, newLesson)
            .then(actualLesson => dispatch({
                type: 'CREATE_LESSON',
                newLesson:actualLesson
            }))
    },
    findLessonsForModule: (moduleId) => {
        LessonService.findLessonsForModule(moduleId)
            .then(actualLessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                actualLessons
            }))
    },
    deleteLesson: (lessonId) => {
        LessonService.deleteLesson(lessonId)
            .then(dispatch({
                type: "DELETE_LESSON",
                lessonId
            }))
    },
    updateLesson: (lessonId, lesson) => {
        LessonService.updateLesson(lessonId, lesson)
            .then(status => dispatch({
                type: 'UPDATE_LESSON',
                updatedLesson: lesson
            }))
    }


})

const LessonTabsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabComponent)

export default LessonTabsContainer