<template>
<div class="subscribe">
  <span class="title">Subscribe</span>
  <p class="text">Our content is regularly updated with news and tips for radiology and medical<br>topics! Keep updates, keep relevant</p>
  <form>
    <div class="flex align-justify" for="email">
      <input @input="checkValidity($event); checkLength($event)" placeholder="Your email" type="email" id="email" v-model="email" required>
      <icon v-if="!validity && hasLength" class="icon wrong" name="regular/times-circle" scale="1.5"/>
      <icon v-if="validity" class="icon check" name="regular/check-circle" scale="1.5"/>
      <button class="btn btn-subscribe">Subscribe</button>
    </div>
  </form>
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
        status: 'subscribed'
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

.subscribe {
  @media (min-width: 340px) {
   margin: 5px;
  }
  @media (min-width: 1920px) {
  margin: 20px;
  } 
}

.title {
  display: block;
  font-family: 'Graphik';
  margin-top: 20px;
  margin-bottom: 10px;
  @media (min-width: 340px) {
    font-size: calc(1rem + ((1vw - 0.3rem) * 0.4444));
  }
  @media (min-width: 1920px) {
    font-size: 1.5rem;
  }
  color: var(--font-color);
}

.text {
  font-family: 'Graphik';
  @media (min-width: 340px) {
    font-size: calc(0.7rem + ((1vw - 0.3rem) * 0.5556));
  }
  @media (min-width: 1920px) {
    font-size: 1.1rem;
  }
  color: var(--font-color)
}

form {
  margin-top: 16px;
  width: 100%
}

form input {
  width: 75%;
  @media (min-width: 340px) {
     height: 35px;
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 40px;
    font-size: 16px;
  }
  @media (min-width: 1920px )  {
    height: 50px;
    font-size: 18px;
  }
  margin-right: 10px;
  margin-bottom: 10px;
  border-color: var(--medium-gray)
}

form button {
  background: var(--dark-blue);
  @media (min-width: 340px) {
    height: 41px;
   font-size: 12px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 41px;
    font-size: 18px;
  }
  @media (min-width: 1920px )  {
    height: 51px;
    font-size: 20px;
  }
  border-radius: 3px;
  width: 25%;
  color: white;
  &:hover {
    background: var(--blue);
    cursor: pointer;
  }
}
.wrong {
  color: red;
}

.check {
  color: var(--green)
}

.label {
  position: relative;
  margin-top: 10px;
}
.icon {
  position: relative;
  @media (min-width: 340px) {
    right: 47px;
    top: 23px;
  }
  @media (min-width: 1920px) {
    right: 50px;
    top: 25px;
  }
  transform: translateY(-50%);
}

</style>