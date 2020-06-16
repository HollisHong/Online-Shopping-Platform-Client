export const findWidgetsForTopic = (tid) =>
  fetch(`https://cs4550-summer1-2020-hollis.herokuapp.com/api/topics/${tid}/widgets`)
    .then(response => response.json())

export const deleteWidget = (wid) =>
  fetch(`https://cs4550-summer1-2020-hollis.herokuapp.com/api/widgets/${wid}`, {
    method: 'DELETE'
  })
    .then(response => response.json())

export const createWidget = (tid, widget) =>
  fetch(`https://cs4550-summer1-2020-hollis.herokuapp.com/api/topics/${tid}/widgets`, {
    method: 'POST',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const updateWidget = (wid, widget) =>
    fetch(`https://cs4550-summer1-2020-hollis.herokuapp.com/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}