<template>
  <div class="patient-blocks-container">
    <p v-if="error">{{ error }}</p>
    <div class = "patient-block" v-for="(patient, index) in patients" :key="index">
      <!-- <h1>{{patient.resource.id}}</h1> -->
    </div>
  </div>
</template>

<script>
import FHIRClient from '../client.js';

export default {
  name: 'HelloWorld',
  data() {
    return{
      patients: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try{
      this.patients = await FHIRClient.getPatients();
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.patient-blocks-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  height: auto;
}
.patient-blocks-container .patient-block{
  width: 200px;
  height: 200px;
  margin: 20px;
  border: solid 1px #555;
  background-color: #eed;
  box-shadow: 1px -1px 1px  rgba(0,0,0,0.6);
  -webkit-box-shadow: 2px -2px 2px  rgba(0,0,0,0.6);
  border-radius:25px;
}
</style>
