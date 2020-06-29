import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

/*Vue.component("dato-persona", {
  props: ["index"],
  data() {
    return {
      counter: 0,
    };
  },
  template: `<tr id="contenido-tabla" v-for="(persona,index) in personaArr ">
  <td>{{personaArr[index][0]}}</td>`,
});*/

new Vue({
  el: "#campos",
  data: {
    personaArr: [],
    nombreCam: "",
    apellidoCam: "",
    edadCam: "",
  },
  methods: {
    guardarUsu() {
      var individuo = [];
      const nombre = this.nombreCam;
      const apellido = this.apellidoCam;
      const edad = this.edadCam;
      individuo.push(nombre, apellido, edad);
      this.personaArr.push(individuo);
      //return individuo;
      console.log(this.personArr);
    },
    addPersona(individuo) {
      this.personaArr.push(individuo);
      console.log(this.personaArr);
    },
    eliminarPersona(index) {
      this.personaArr.splice(index, 1);
    },
  },
});
