import http from '../http-common'
class TodolistDataService {
  getAll () {
    return http.get('/todolist')
  }

  get (id) {
    return http.get(`/todolist/${id}`)
  }

  create (data) {
    return http.post('/todolist', data)
  }

  update (id, data) {
    return http.put(`/todolist/${id}`, data)
  }

  delete (id) {
    return http.delete(`/todolist/${id}`)
  }

  deleteAll () {
    return http.delete('/todolist')
  }

  findByType (type) {
    return http.get(`/todolist?type=${type}`)
  }
}
export default new TodolistDataService()
