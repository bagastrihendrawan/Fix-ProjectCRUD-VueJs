<template>
  <div>
    <div class="header mt-2 ml-3">
        <router-link v-show="!success" to="/home" type="submit" class="btn btn-primary">Back</router-link>               
    </div>
    <div style="display: flex; justify-content: center;">
      <div class="" style="width: 50%; ">
        
        <form @submit.prevent="inputData" v-show="!success" id="formid" class=" p-4 border border-primary" style="width: fit-content; margin: auto; margin-top: 5%;">
    <div>
        <h1 style="text-align: center; margin-bottom: 5%;">STUDENT FORM</h1>
    </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Student Name</label>
      <input 
      v-model="addFormData.nama" type="text" class="form-control" id="inputname" placeholder="Enter Name" required>
     
    </div>
    <div class="form-group col-md-6">
      <label for="inputSoft">Soft Skill</label>
      <input 
      v-model="addFormData.soft_skill" type="text" class="form-control" id="inputSoft" placeholder="Enter Soft Skill" required>
    </div>
    <div class="form-group col-md-3">
      <label for="inputAge">Student Age</label>
      <input 
      v-model="addFormData.umur" type="text" class="form-control" id="inputAge" placeholder="Enter Age" required>
    </div>
    <div class="form-group col-md-3">
      <label for="inputGender">Gender</label>
      <select v-model="addFormData.jenis_kelamin" id="inputGender" class="form-control" required>
        <option selected></option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputHard">Hard Skill</label>
      <input 
      v-model="addFormData.hard_skill" type="text" class="form-control" id="inputHard" placeholder="Enter Hard Skill" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail">Student Email</label>
      <input 
      v-model="addFormData.email" type="email" class="form-control" id="inputEmail" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">Interest</label>
      <select v-model="addFormData.interest" id="inputState" class="form-control" required>
        <option selected></option>
        <option>Data Sience</option>
        <option>Network</option>
        <option>Web FrontEnd</option>
        <option>Web BackEnd</option>
        <option>Mobile Apps</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Self Description</label>
    <textarea v-model="addFormData.deskripsi_diri" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
  </div>
  </div>
  <button type="submit" class="btn btn-outline-primary">{{ buttonValue }}</button>
</form>
<SuccesForm v-show="success" :apdet="apdet" ></SuccesForm>
    </div>
    </div>
  </div>
    
</template>

<script>
import addService from '../services/addService.js'
import SuccesForm from '../components/SuccesForm.vue'

export default {
    name: 'ProjectVueAddForm',

    data() {
        return {
           addFormData:{
            "deskripsi_diri": null,
            "email": null,
            "hard_skill": null,
            "interest": null,
            "jenis_kelamin": null,
            "nama": null,
            "soft_skill": null,
            "umur": null,
           },
           success : false,
           buttonValue : "Submit",
           apdet : "apakek"
        }
    },

    mounted() {
      if (this.$route.name == 'botekuat'){
        this.getStudent(this.$route.params.id);
        this.buttonValue="update"
      }
      //  console.log(this.$route.params.id); 
    },

    methods: {
        inputData(){
          let data = this.addFormData;
          if(this.buttonValue === "Submit"){
            addService.create(data).then(response => {
              console.log(response.data);
              this.success = true;
              this.apdet = "Inputed"
            })
            .catch(e => {
              console.log(e);
            });
          }else{
            // console.log(this.buttonValue)
            // console.log("berhasil");
            addService.updateStudent(data.id, data)
            .then(response => {
              console.log(response.data);
              this.success = true;
              this.apdet = "Updated"
            })
            .catch(e => {
              console.log(e);
            });

          }
        },
        getStudent(id){
          addService.getStudentById(id)
          .then(response => {
            this.addFormData = response.data;
          })
          .catch(e => {
            console.log(e);
          })
        }
    },
    components: {
        SuccesForm
    },
};
</script>

<style lang="scss" scoped>

</style>