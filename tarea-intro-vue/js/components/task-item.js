export default {
  props: ["index"],
  template: `
    <button
     type="button"
     class="btn btn-primary"
     v-on:click="$emit('persona-deleted',index)">
                  
    Eliminar
    </button>
    `,
};
