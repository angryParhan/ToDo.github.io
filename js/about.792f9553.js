(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1071:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"card-flex container"},[t.isAdd?s("div",{staticClass:"note__item"},[s("div",{staticClass:"add__input_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.dataToStore.title,expression:"dataToStore.title"}],class:{used:t.dataToStore.title.length},attrs:{type:"text"},domProps:{value:t.dataToStore.title},on:{input:function(e){e.target.composing||t.$set(t.dataToStore,"title",e.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",[t._v("Title")])]),s("hr",{staticClass:"title__add"}),t._l(t.dataToStore.toDos,(function(e){return s("label",{key:e.id,staticClass:"check option check_add"},[s("input",{staticClass:"check__input ",attrs:{type:"checkbox",disabled:""}}),s("span",{staticClass:"check__box"}),t._v(" "+t._s(e.title)+" ")])})),s("div",{staticClass:"add__input_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],class:{used:t.newTask.length},attrs:{type:"text"},domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",[t._v("Action")]),s("div",{staticClass:"btn_plus",on:{click:t.addTask}},[t._v("+")])]),s("button",{staticClass:"btn btn__save",on:{click:t.saveNewTask}},[t._v("SAVE")])],2):t.isEdit?t._e():s("div",{staticClass:"note__item"},[s("h3",[t._v(t._s(t.exactTask.title))]),s("hr"),s("div",{staticClass:"actions__list action__list_edit"},[t._l(t.exactTask.toDos,(function(e){return s("label",{key:e.id,staticClass:"check option check_opened"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"el.completed"}],staticClass:"check__input ",attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(s){var a=e.completed,i=s.target,o=!!i.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);i.checked?c<0&&t.$set(e,"completed",a.concat([n])):c>-1&&t.$set(e,"completed",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"completed",o)}}}),s("span",{staticClass:"check__box"}),t._v(" "+t._s(e.title)+" ")])})),s("div",{staticClass:"buttons__more"},[s("button",{staticClass:"btn btn__open",on:{click:t.editTask}},[t._v("EDIT")]),s("button",{staticClass:"btn btn__delete",on:{click:t.globalDeleting}},[t._v("DELETE")])])],2)]),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isEdit?s("div",{staticClass:"note__item"},[s("div",{staticClass:"add__input_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.dataToStore.title,expression:"dataToStore.title"}],class:{used:t.dataToStore.title.length},attrs:{type:"text"},domProps:{value:t.dataToStore.title},on:{input:function(e){e.target.composing||t.$set(t.dataToStore,"title",e.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",[t._v("Title")])]),s("hr",{staticClass:"title__add"}),t._l(t.dataToStore.toDos,(function(e){return s("label",{key:e.id,staticClass:"check option"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"el.completed"}],staticClass:"check__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(s){var a=e.completed,i=s.target,o=!!i.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);i.checked?c<0&&t.$set(e,"completed",a.concat([n])):c>-1&&t.$set(e,"completed",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"completed",o)}}}),s("span",{staticClass:"check__box"}),s("div",{staticClass:"wrraper_for_icon"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"el.title"}],staticClass:"check__title_value",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),s("span",{staticClass:"del__icon",on:{click:function(s){return t.localDelTask(e.id)}}})])])})),s("div",{staticClass:"add__input_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],class:{used:t.newTask.length},attrs:{type:"text"},domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),s("span",{staticClass:"highlight"}),s("span",{staticClass:"bar"}),s("label",[t._v("Action")]),s("div",{staticClass:"btn_plus",on:{click:t.addTask}},[t._v("+")])]),s("button",{staticClass:"btn btn__save",on:{click:t.saveEdit}},[t._v("SAVE")]),s("button",{staticClass:"btn btn__undo",on:{click:t.undoEdit}},[t._v("UNDO")])],2):t._e()])],1),t.modelShow?s("modal-window",{attrs:{confirmMessage:t.modelMessage},on:{cancel:function(e){t.modelShow=!1},confirm:function(e){t.isEdit?t.undoConfirm():t.deleteItem()}}}):t._e()],1)},i=[],o=(s("7db0"),s("c740"),s("a434"),s("d3b7"),s("25f0"),s("2909")),n=s("a8c8"),c={name:"Edit",data:function(){return{newTask:"",dataToStore:{title:"",toDos:[]},modelShow:!1,modelMessage:""}},components:{modalWindow:n["a"]},created:function(){},computed:{tasks:function(){return this.$store.getters.toDos},exactTask:function(){var t=this.$store.getters.getIdForOpening;return this.copyObject(this.tasks.find((function(e){return e.id===t})))},isAdd:function(){return this.$store.getters.getIsAdd},isEdit:function(){return this.$store.getters.getIsEdit}},watch:{isEdit:function(){this.dataToStore.title=this.exactTask.title,this.dataToStore.toDos=Object(o["a"])(this.exactTask.toDos)}},methods:{editTask:function(){this.$store.commit("changeIsEdit",!0)},addTask:function(){if(this.newTask.length){var t={id:"f".concat((~~(1e8*Math.random())).toString(16)),title:this.newTask,completed:!1};this.dataToStore.toDos.push(t),this.newTask=""}},copyObject:function(t){return Object.assign({},t)},saveNewTask:function(){this.dataToStore.title.length&&this.dataToStore.toDos.length&&(this.$store.commit("addTodo",this.dataToStore),this.$router.push("/"))},saveEdit:function(){var t={id:this.$store.getters.getIdForOpening,title:this.dataToStore.title,toDos:this.dataToStore.toDos};this.$store.commit("setTodo",t),this.$router.push("/")},undoEdit:function(){this.modelMessage="Are you sure about undo changes?",this.modelShow=!0},localDelTask:function(t){this.dataToStore.toDos.splice(this.dataToStore.toDos.findIndex((function(e){return e.id===t})),1)},deleteItem:function(){this.$store.commit("deleteNote",this.exactTask.id),this.modelShow=!1,this.$router.push("/")},undoConfirm:function(){this.dataToStore.title=this.exactTask.title,this.dataToStore.toDos=Object(o["a"])(this.exactTask.toDos),this.modelShow=!1},globalDeleting:function(){this.modelMessage="Do you really want do delete?",this.modelShow=!0}}},l=c,d=(s("a3ca"),s("2877")),r=Object(d["a"])(l,a,i,!1,null,"2385f6ec",null);e["default"]=r.exports},"7db0":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").find,o=s("44d2"),n=s("ae40"),c="find",l=!0,d=n(c);c in[]&&Array(1)[c]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!d},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},a3ca:function(t,e,s){"use strict";var a=s("bd9b"),i=s.n(a);i.a},bd9b:function(t,e,s){}}]);
//# sourceMappingURL=about.792f9553.js.map