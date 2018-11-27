<template>
  <div class="hero grid-container">
    <div class="card">
      <span>
        <h2 class="header-title">Soluções em tecnologia para clínicas e hospitais</h2>
        <div class="description">
          <p>Sistemas de gestão de clínicas que oferecem agilidade,
  praticidade e controle para clínicas de radiologia</p>
        </div>
      </span>
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
.card {
  padding: 0px 60px;
  min-height: 450px;
  border-radius: 3px; 
  background: #EDEDED;
  grid-column: 2/3;
  align-items: center;
  display: grid;
}

h2,
.description {
  margin: 0px;
  width: 60%;
  @media (max-width: 1280px) {
    width: 100%;
  }
}

.card p {
  font-size: 1.618rem;
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
