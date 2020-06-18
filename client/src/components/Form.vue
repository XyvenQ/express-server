<template>
    <div class="w3-content w3-center w3-padding">
        <div class="w3-text"> 
            <span>Enter coordinates as coordinate pairs (x,z). Everything within the bounding box will be reverted, plus some extra area.</span>
        </div>
        <div class="w3-padding-large">
            <form @submit.prevent="onSubmit" id="backup">
                <flat-pickr v-model="date" :config="config" class="w3-input" placeholder="Time of backup"></flat-pickr>
                <br>
                <input class="w3-input" type="text" v-model="coords1" placeholder="Coords of position 1: x, z" />
                <br>
                <input class="w3-input" type="text" v-model="coords2" placeholder="Coords of position 2: x, z"/>
                <h4> Dimension: </h4>
                <div class="w3-show-inline-block w3-padding"><input class="w3-radio" type="radio" id="Overworld" v-model="world" value="/">
                    <label for="Overworld">Overworld</label></div>
                <div class="w3-show-inline-block  w3-padding"><input class="w3-radio" type="radio" id="Nether" v-model="world" value="/DIM-1/">
                    <label for="Nether">Nether</label></div>
                <div class="w3-show-inline-block  w3-padding"><input class="w3-radio" type="radio" id="End" v-model="world" value="/DIM1/">
                    <label for="End">End</label></div>
                    <hr>
                <h4> Destination: </h4>
                <div class="w3-show-inline-block w3-padding"><input class="w3-radio" type="radio" id="Survival" v-model="destination" value="school" disabled>
                    <label for="Survival">Survival</label></div>
                <div class="w3-show-inline-block  w3-padding"><input class="w3-radio" type="radio" id="Creative" v-model="destination" value="school-creative">
                    <label for="Creative">Creative</label></div>
                <hr>   
                <input :disabled="submitDisabled" class="w3-button" type="submit"/>
            </form>
            <hr>
            <div>
                <p class="result" v-if="result">{{ result }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Submit from '../Submit';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'w3-css/w3.css';

export default {
  name: 'Form',
  data() {
    return {
        coords1: null,
        coords2: null,
        world: null,
        destination: null,
        date: null,
        result: null,
        submitDisabled: false,
        config: {
            enableTime: true,
            dateFormat: "Ymd-H",
        }
    }
  },
  components: {
    flatPickr
  },
  async created(){
  },
  methods: {
        async onSubmit(){
            let data = {
                coords1: this.coords1,
                coords2: this.coords2,
                world: this.world,
                destination: this.destination,
                date: this.date,
            }
            this.submitDisabled = true;
            this.result = await Submit.submit(data);
            this.submitDisabled = false;
            if(this.result.trim() == "Successfully completed backup") {
                this.coords1 = null;
                this.date = null;
                this.coords2 = null;
                this.world = null;
                this.destination = null;
            }
        }
  }
}
</script>