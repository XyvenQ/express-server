<template>
  <p class="result" v-if="result">{{ result }}</p>
</template>

<script>
import BackupService from '../BackupService';

export default {
  name: 'BackupComponent',
  data() {
    return {
      result: ''
    }
  },
  async created(){
    try {
      this.result = await BackupService.backup();
    } catch (err){
      this.result = err;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
