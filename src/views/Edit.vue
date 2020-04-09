<template>
  <section>
    <div class="card-flex container" >
      <div class="note__item" v-if="isAdd">
        <div class="add__input_item">
          <input type="text" v-model="dataToStore.title" :class="{ used: dataToStore.title.length }">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Title</label>
        </div>
        <hr class="title__add">
          <label class="check option check_add" v-for="el in dataToStore.toDos" :key="el.id">
            <input type="checkbox" class="check__input " disabled>
            <span class="check__box"></span>
            {{ el.title }}
          </label>


        <div class="add__input_item">
          <input type="text" v-model="newTask" :class="{ used: newTask.length }">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Action</label>
          <div class="btn_plus" @click="addTask">+</div>
        </div>


        <button class="btn btn__save" @click="saveNewTask">SAVE</button>

      </div>
      <div class="note__item" v-else-if="!isEdit">
        <h3>{{ exactTask.title }}</h3>
        <hr>
        <div class="actions__list action__list_edit">
          <label class="check option check_opened" v-for="el in exactTask.toDos" :key="el.id">
            <input type="checkbox" class="check__input " v-model="el.completed" disabled>
            <span class="check__box"></span>
            {{ el.title }}
          </label>
          <div class="buttons__more">
            <button class="btn btn__open" @click="editTask">EDIT</button>
            <button class="btn btn__delete" @click="globalDeleting">DELETE</button>
          </div>
        </div>
      </div>
      <transition name="fade"
                  mode="out-in"
      >
        <div class="note__item" v-if="isEdit" >
          <div class="add__input_item">
            <input type="text" v-model="dataToStore.title" :class="{ used: dataToStore.title.length }">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Title</label>
          </div>
          <hr class="title__add">
          <label class="check option" v-for="el in dataToStore.toDos" :key="el.id">
            <input type="checkbox" class="check__input" v-model="el.completed">
            <span class="check__box"></span>
            <div class="wrraper_for_icon"><input class="check__title_value" type="text" v-model="el.title">
              <span class="del__icon" @click="localDelTask(el.id)"></span>
            </div>
          </label>


          <div class="add__input_item">
            <input type="text" v-model="newTask" :class="{ used: newTask.length }">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Action</label>
            <div class="btn_plus" @click="addTask">+</div>
          </div>


          <button class="btn btn__save" @click="saveEdit">SAVE</button>
          <button class="btn btn__undo" @click="undoEdit" >UNDO</button>
        </div>
      </transition>
    </div>
    <modal-window
        v-if="modelShow"
        @cancel="modelShow = false"
        @confirm="isEdit ? undoConfirm() : deleteItem()"
        :confirmMessage="modelMessage"
    ></modal-window>
  </section>
</template>

<script>
  import modalWindow from '../components/modalWindow'

  export default {
    name: 'Edit',
    data () {
      return {
        newTask: '',
        dataToStore: {
          title: '',
          toDos: [],
        },
        modelShow: false,
        modelMessage: '',
      }
    },
    components: {
      modalWindow
    },
    created () {
    },
    computed: {
      tasks () {
        return this.$store.getters.toDos
      },
      exactTask () {
        const id = this.$store.getters.getIdForOpening
        return this.copyObject(this.tasks.find(item => item.id === id))
      },
      isAdd () {
        return this.$store.getters.getIsAdd
      },
      isEdit () {
        return this.$store.getters.getIsEdit
      }
    },
    watch: {
      isEdit () {
        this.dataToStore.title = this.exactTask.title
        this.dataToStore.toDos = [...this.exactTask.toDos]
      }
    },
    methods: {
      editTask () {
        this.$store.commit('changeIsEdit', true)
      },
      addTask () {
        if (this.newTask.length) {
          const newTask = {
            id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
            title: this.newTask,
            completed: false
          }
          this.dataToStore.toDos.push(newTask)
          this.newTask = ''
        }
      },
      copyObject(src) {
        return Object.assign({}, src)
      },
      saveNewTask () {
        if (this.dataToStore.title.length && this.dataToStore.toDos.length) {
          this.$store.commit('addTodo', this.dataToStore)
          this.$router.push('/')
        }
      },
      saveEdit () {
        const editObj = {
          id: this.$store.getters.getIdForOpening,
          title: this.dataToStore.title,
          toDos: this.dataToStore.toDos
        }
        this.$store.commit('setTodo', editObj)
        this.$router.push('/')
      },
      undoEdit () {
        this.modelMessage = 'Are you sure about undo changes?'
        this.modelShow = true
      },
      localDelTask (id) {
        this.dataToStore.toDos.splice(this.dataToStore.toDos.findIndex(item => item.id === id), 1)
      },
      deleteItem () {
        this.$store.commit('deleteNote', this.exactTask.id)
        this.modelShow = false
        this.$router.push('/')
      },
      undoConfirm () {
        this.dataToStore.title = this.exactTask.title
        this.dataToStore.toDos = [...this.exactTask.toDos]
        this.modelShow = false
      },
      globalDeleting () {
        this.modelMessage = 'Do you really want do delete?'
        this.modelShow = true
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .action__list_edit {
    padding-left: 10px;
  }

  input:focus {
    outline: none;
  }

  .add__input_item {
    position: relative;
    padding: 0 20px;
    margin-top: 22px;
  }
  .note__item .add__input_item:first-child {
    margin-bottom: 45px;
  }

  .title__add {
    margin-top: -25px;
  }

  label.check_add {
    margin-left: 50px;
  }


  .add__input_item input{
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    -webkit-appearance: none;
    display: block;
    background: transparent;
    color: black;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid darkgray;
  }

  .add__input_item input:focus, .add__input_item label input:focus{
    outline: none;
  }

  .add__input_item label{
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 25px;
    top: 10px;
    transition: all 0.2s ease;
  }

  input:focus ~ label, input.used ~ label {
    top: -15px;
    transform: scale(.75); left: 25px;
    /* font-size: 14px; */
    color: #4a89dc;
  }

  .btn__save {
    border-color: #80d0c7;
    color: #80d0c7;
    float: right;
    margin: 20px;
  }

  .btn__undo {
    margin-left: 20px;
    margin-top: 20px;
    border-color: #4a89dc;
    color: #4a89dc;
  }

  .btn_plus {
    margin-top: 1rem;
    margin-bottom: 0;
    height: 40px;
    width: 40px;
    font-size: 30px;
    padding-top: 3px;
  }

  .check {
    margin-left: 30px;
  }

  .note__item label.check:last-of-type {
    margin-bottom: -5px;
  }

  .check__title_value {
    background: transparent;
    border: none;
    border-bottom: 1px solid gray;
    width: 60%;
    font-size: 14px;
    display: block;
  }

  .wrraper_for_icon {
    position: relative;
  }

  .del__icon {
    width: 15px;
    height: 15px;
    background-image: url("../../public/img/delete_icon.svg") ;
    position: absolute;
    right: 35%;
    top: 26%;
    cursor: pointer;
    transform: scale(1.3);
  }

</style>
