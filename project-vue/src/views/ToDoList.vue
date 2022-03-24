<template>
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>To Do List</h1>
      <div class="wrapper">
        <div class="formContent">
          <form @submit.prevent="addTodoList">
            <input
              type="text"
              name="todotask"
              placeholder="New To Do"
              v-model="todo.name"
            />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div class="formToDo">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                To Do <img src="../assets/todo.png">
                <section v-for="(todo, index) in todoTab" :key="todo.id">
                  <div v-if="todo.processToDo==1">
                  <button title="Delete" @click="deleteTodoList(index, todo.id)">
                    <img
                      src="../assets/delete.webp"
                    />
                  </button>
                  {{ todo.name }}
                  <button
                    title="Doing"
                    @click="updateToDoDoing(index, todo.id)"
                  >
                  <img src="../assets/doing.png"></button>
                  <button
                    title="Done"
                    @click="updateToDoDone(index, todo.id)"
                  ><img src="../assets/done.png"></button>
                  </div>
                </section>
              </div>
              <div class="col-sm">
                Doing <img src="../assets/doing.png">
                <section v-for="(todo, index) in todoTab" :key="todo.id">
                  <div v-if="todo.processDoing==1">
                  <button title="Delete" @click="deleteTodoList(index, todo.id)">
                    <img
                      src="../assets/delete.webp"
                    />
                  </button>
                  {{ todo.name }}
                  <button
                    title="To Do"
                    @click="updateToDo(index, todo.id)"
                  ><img src="../assets/todo.png"></button>
                  <button
                    title="Done"
                    @click="updateToDoDone(index, todo.id)"
                  ><img src="../assets/done.png"></button>
                  </div>
                </section>
              </div>
              <div class="col-sm">
                Done <img src="../assets/done.png">
                <section v-for="(todo, index) in todoTab" :key="todo.id">
                  <div v-if="todo.processDone==1">
                  <button title="Delete" @click="deleteTodoList(index, todo.id)">
                    <img src="../assets/delete.webp"/>
                  </button>
                  {{ todo.name }}
                  <button
                    title="To Do"
                    @click="updateToDo(index, todo.id)"
                  ><img src="../assets/todo.png"></button>
                  <button
                    title="Doing"
                    @click="updateToDoDoing(index, todo.id)"
                  ><img src="../assets/doing.png"></button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import TodolistDataService from '@/services/TodolistDataService'
export default {
  data () {
    return {
      submitted: false,
      todo: {
        name: '',
        processToDo: 1,
        processDoing: 0,
        processDone: 0
      },
      todoTab: []
    }
  },
  methods: {
    addTodoList () {
      this.todoTab.push({ name: this.todo.name, processToDo: 1, processDoing: 0, processDone: 0 })
      this.submitted = true
      console.log(this.todo)
    },
    saveTodolist () {
      console.log(this.todo)
      TodolistDataService.create(this.todo)
        .then((response) => {
          console.log(this.todo)
          this.addTodoList(this.todo)
        })
        .catch((e) => {
          console.log(e)
        })
      this.todo = {
        name: this.todo.name,
        processToDo: 1,
        processDoing: 0,
        processDone: 0
      }
    },
    updateTodoList (todoId, todoData) {
      TodolistDataService.update(todoId, todoData)
        .then((response) => {
          console.log(response.todoData)
          this.submitted = true
        })
        .catch((e) => {
          console.log(e)
        })
    },
    deleteTodoList (index, todoId) {
      TodolistDataService.delete(todoId)
        .then((response) => {
          console.log(response.data)
          this.removeTodoTab(index)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    removeTodoTab (index) {
      this.todoTab.splice(index, 1)
    },
    updateToDoDone (index, todoId) {
      this.todoTab[index].processToDo = 0
      this.todoTab[index].processDoing = 0
      this.todoTab[index].processDone = 1
      this.updateTodoList(todoId, this.todoTab[index])
    },
    updateToDoDoing (index, todoId) {
      this.todoTab[index].processToDo = 0
      this.todoTab[index].processDoing = 1
      this.todoTab[index].processDone = 0
      this.updateTodoList(todoId, this.todoTab[index])
    },
    updateToDo (index, todoId) {
      this.todoTab[index].processToDo = 1
      this.todoTab[index].processDoing = 0
      this.todoTab[index].processDone = 0
      this.updateTodoList(todoId, this.todoTab[index])
    }
  },
  mounted () {
    TodolistDataService.getAll()
      .then((res) => {
        this.todoTab = res.data
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h1 {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 40px 8px 10px 8px;
  color: #56baed;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

.formContent {
  border-radius: 10px 10px 10px 10px;
  background: white;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 10px 0px;
}

.formToDo {
  border-radius: 10px 10px 10px 10px;
  background: white;
  padding: 0px;
  width: 100%;
  max-width: auto;
  position: relative;
  padding: 10px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 10px 0px;
}

.formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

input[type="submit"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
}

input[type="submit"]:hover {
  background-color: #39ace7;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border-radius: 5px 5px 5px 5px;
}
input[name="todoProcess"] {
  background-color: lightskyblue;
  border: none;
  color: #0d0d0d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 30%;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder,
input[type="email"]:placeholder,
input[type="password"]:placeholder {
  color: #cccccc;
}

.underlineHover:hover {
  color: #0d0d0d;
}

button{
  border: none;
  background: none;
}

img{
  width: 20px;
}

input[name="todoProcess"]{
  display: inline;
}
</style>
