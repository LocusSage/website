<template>
  <div>
    <header-search />
    <last-read />
    <other-channels />
    <suggestions-section />
  </div>
</template>
<script>
import Header from './components/header'
import LastRead from './components/last-read'
import OtherChannels from './components/other-channels'
import Suggestions from './components/suggestions'

export default {
  components: {
    'header-search': Header,
    'last-read': LastRead,
    'other-channels': OtherChannels,
    'suggestions-section': Suggestions
  }  
}
</script>
<style lang="scss" scoped>

</style>
