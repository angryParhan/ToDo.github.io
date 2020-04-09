const STORAGE_KEY = 'To-Do-storage'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: null,
    isAdd: true,
    idForOpening: null,
    isEdit: false,
  },
  mutations: {
    setState (state) {
      state.notes = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    },
    setTodo (state, payload) {
      const idx = state.notes.findIndex(item => item.id === payload.id )
      state.notes[idx].title = payload.title
      state.notes[idx].toDos = [...payload.toDos]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes))
    },
    deleteNote (state, id) {
      const indx = state.notes.findIndex(item => item.id === id )
      state.notes.splice(indx, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes))
    },
    addTodo (state, payload) {
      const newEl = {
        id: `f${(~~(Math.random()*1e8)).toString(16)}`,
        title: payload.title,
        toDos: payload.toDos
      }
      state.notes.push(newEl)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes))
    },
    changeIsAdd (state, payload) {
      state.isAdd = payload
    },
    changeIsEdit (state, payload) {
      state.isEdit = payload
    },
    setIdForOpening (state, id) {
      state.idForOpening = id
    }
  },
  getters: {
    toDos (state) {
      return state.notes
    },
    getIsAdd (state) {
      return state.isAdd
    },
    getIdForOpening (state) {
      return state.idForOpening
    },
    getIsEdit (state) {
      return state.isEdit
    }
  }
})

