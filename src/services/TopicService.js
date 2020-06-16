const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hollis/lessons/${lessonId}/topics`)
        .then(response => response.json())

const createTopic = (lessonId, newTopic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hollis/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hollis/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/hollis/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}



export default {
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic
}


