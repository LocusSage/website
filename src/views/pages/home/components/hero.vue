<template>
  <div class="hero grid large-col-2">
    <div class="span-1 title">
      <h2>Soluções em radiologia para clínicas e hospitais</h2>
      <div class="description">
        <p>Sistemas moldados à perfeição para oferecer agilidade, praticidade e controle para clínicas de radiologia.</p>
      </div>
      <div class="subscription">
        <form @submit.prevent="subscribeToMailChimp($event)">
          <span class="subscribe-text">Se inscreva para saber as novidades</span>
          <label for="email" class="label">
            <input @input="checkValidity($event); checkLength($event)" placeholder="Seu email" type="email" id="email" v-model="email" required>
            <icon v-if="!validity && hasLength" class="icon wrong" name="regular/times-circle" scale="1.5"/>
            <icon v-if="validity" class="icon check" name="regular/check-circle" scale="1.5"/>
            <button>Inscreva-se</button>
          </label>
        </form>
      </div>
    </div>
    <div class="span-1 flex align-right">
      <img src="@/assets/images/physician.png" width="120%" height="120%" alt="">
    </div>
  </div>  
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      validity: false,
      hasLength: false
    }
  },
  methods: {
    checkValidity: function (inputElement) {
      this.validity = inputElement.target.checkValidity()
    },
    checkLength: function (inputElement) {
      if (inputElement.target.value.length > 0) {
        this.hasLength = true
        return
      }
      
      this.hasLength = false
    },
    subscribeToMailChimp: async function (event) {
      let payload = {
        email_address: this.email,
        status: "subscribed"
      }

        axios.post('http://localhost:3000/quasar/mail-chimp/lists/97ce4a39a6/members', payload)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err.response)
        }) 

    }
  }
}
</script>
<style scoped lang="scss">
.hero {
  padding: 50px 0px 60px; 
}

.title h2{
  font-size: 3.5rem;
  line-height: 1;
}

.title p {
  font-size: 1.5rem;
}


form {
  margin-top: 30px;
}

form input{
  width: 60%;
  margin-bottom: 0px;
}

form button {
  background: var(--theme-color);
  height: 40px;
  border-radius: 3px;
  width: 35%;
  margin-left: 15px;
  color: white;
  font-size: 16px;
  &:hover {
    background: var(--theme-hover);
    cursor: pointer;
  }
}

.subscribe-text {
  color: var(--font-secondary-color);
}

.wrong {
  color: red;
}

.check {
  color: var(--confirmation-color)
}

.label {
  position: relative;
  margin-top: 10px;
}
.icon {
  position: absolute;
  right: 250px;
  top: 50%;
  transform: translateY(-50%);
}

img {
  transform: translate(150px, -50px)
}
</style>
