<template>

  <v-btn icon :dark="dark" @click="toggleUi">
    <v-icon medium>{{icon}}</v-icon>
    {{text}}
  </v-btn>

</template>

<script>
import Vue from 'vue'
import { WguEventBus } from '../../WguEventBus'
import AttributeTableWin from './AttributeTableWin';

export default {
  name: 'wgu-attributetable-btn',
  components: {
    'wgu-attributetable': AttributeTableWin
  },
  props: {
    // alternative icons: table_chart, view_comfy
    icon: {type: String, required: false, default: 'table_chart'},
    text: {type: String, required: false, default: ''},
    dark: {type: Boolean, required: false, default: false}
  },
  data: function () {
    return {
      moduleName: 'wgu-attributetable'
    }
  },
  created () {
    // TODO move to a father class
    WguEventBus.$on('app-mounted', () => {
      this.win = Vue.prototype.cmpLookup[this.moduleName + '-win'];
    });
    if (!this.win) {
      this.win = Vue.prototype.cmpLookup[this.moduleName + '-win'];
    }
  },
  methods: {
    toggleUi () {
      // TODO move to a father class
      this.win.show = !this.win.show;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
