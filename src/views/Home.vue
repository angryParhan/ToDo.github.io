<template>
  <section>
    <div class="card-flex container">
      <div class="note__item" v-if="!tasks.length">
        <h1>Click below to add new Task!</h1>
      </div>
      <div class="note__item" v-for="item in tasks" :key="item.id">
        <h3>{{ stringChecking(item.title, 30) }}</h3>
        <hr>
        <div class="actions__list">
          <label class="check option" v-for="(el, i) in item.toDos.slice(0, showNumber(item.toDos))" :key="i">
            <input type="checkbox" class="check__input " v-model="el.completed" disabled>
            <span class="check__box"></span>
             {{ stringChecking(el.title, 40) }}
          </label>
          <div class="hint__more" v-if="item.toDos.length > 3">...</div>
          <div class="buttons__more">
            <button class="btn btn__open" @click="openTask(item.id)">OPEN</button>
            <button class="btn btn__delete" @click="deleteConfirm(item.id)">DELETE</button>
          </div>
        </div>
      </div>
      <div @click="addNewOne" class="btn_plus">+</div>
    </div>
    <modal-window
        v-if="modelShow"
        @cancel="modelShow = false"
        @confirm="deleteItem"
        confirmMessage="Do you really want do delete?"
    ></modal-window>
  </section>
</template>

<script>

  import modalWindow from '../components/modalWindow'

export default {
  name: 'Home',
  data () {
    return {
      modelShow: false,
      currentId: ''
    }
  },
  components: {
    modalWindow
  },
  created () {
    this.$store.commit('changeIsEdit', false)
  },
  computed: {
    tasks () {
      return this.$store.getters.toDos
    }

  },
  methods: {
    stringChecking (el, quantity) {
      return el.length >= quantity ? el.substring(0,quantity) + '..' : el
    },
    showNumber (arr) {
      return arr.length > 3 ? 3 : arr.length
    },
    openTask(id) {
      this.$store.commit('changeIsAdd', false)
      this.$store.commit('setIdForOpening', id)
      this.$router.push('edit')
    },
    addNewOne () {
      this.$store.commit('changeIsAdd', true)
      this.$router.push('edit')
    },
    deleteConfirm (id) {
      this.modelShow = true
      this.currentId = id
    },
    deleteItem () {
      this.$store.commit('deleteNote', this.currentId)
      this.modelShow = false
    }
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400|Raleway:300');

  .container {
    max-width: 1170px;
    margin: 0 auto;
  }
  .card-flex {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .note__item {
    margin-top: 30px;
    width: 50%;
    background: whitesmoke;
    border-radius: 3px;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }

  h3, h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 20px;
    font-size: 30px;
    word-wrap: break-word;
  }

  h1 {
    text-align: center;
    padding: 30px;
  }

  hr {
    margin-bottom: 20px;
    border-width: 0.09375em;
  }

  .actions__list {
    padding-left: 50px;
  }

  .option {
    display: block;
    margin-bottom: 0.75em;
    font-size: 20px;
    word-wrap: break-word;
  }

  .check {
    padding-left: 0.8em;
  }

  .check__input {
    display: none;
    position: absolute;
  }

  .check__box {
    position: absolute;
    margin-left: -1.5em;
    width: 1em;
    height: 1em;
    background-image: url("../../public/img/off.svg");
    transform: scale(1.3);
  }

  .check__input:checked + .check__box {
    background-image: url("../../public/img/on.svg");
    transform: scale(1.3);

  }

  .hint__more {
    font-size: 25px;
    margin-top: -20px;
    margin-left: -10px;
  }

  .buttons__more {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  button:focus {
    outline: none;
  }

  .btn {
    background: none;
    line-height: 1;
    padding: 1em 2em;
    font-family: "Open Sans", Helvetica, arial, sans-serif;
    cursor: pointer;
    margin-right: 1.2em;
    font-weight: bold;

  }
  .btn__open {
    border-color: #80d0c7;
    color: #80d0c7;
  }

  .btn__delete {
    border-color: red;
    color: red;
  }

  .btn_plus {
    margin: 3rem 0;
    height: 70px;
    width: 70px;
    background: #80d0c7;
    border-radius: 50%;
    text-align: center;
    color: white;
    font-size: 50px;
    padding-top: 5px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 0px 15px 0px rgba(156,151,156,0.75);
  }


  @media all and (max-width: 640px){
    .note__item {
      width: 80%;
    }

    .btn {
      padding: 0.7em 1.2em;
    }

    h3, h1 {
      font-size: 20px;
      font-weight: bold;
    }

    .actions__list {
      padding-left: 25px;
    }
  }
</style>
