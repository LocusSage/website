<template>
<div class="subscribe">
  <span class="title">Subscribe</span>
  <p class="text">Our content is regularly updated with news and tips for radiology and medical<br>topics! Keep updates, keep relevant</p>
  <form>
    <div class="flex align-justify">
      <input type="email" placeholder="Your email">
      <icon name="regular/check-circle" scale="2.0"/>
      <button class="btn btn-subscribe">Subscribe</button>
    </div>
  </form>
</div>  
</template>
<script>

export default {}
</script>

<style scoped lang="scss">

.subscribe {
 margin: 10px;
}

.title {
  display: block;
  font-family: 'Graphik';
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  color: var(--font-color);
}

.text {
  font-family: 'Graphik';
  font-size: 15px;
  margin-bottom: 20px;
  color: var(--font-color)
}

input {
  height: 50px;
  font-size: 16px;
  border-color: var(--medium-gray);
  &::placeholder {
    font-size: 16px;
  }
}

svg {
  position:relative;
	top: 10px;
  right: 40px;
  color: var(--green)
}

.btn-subscribe {
  width: 300px;
  height: 51px;
  font-size: 20px;
  background: var(--dark-blue);
  &:hover {
    background: var(--blue)
  }
}

</style>