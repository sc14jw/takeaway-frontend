<template>
  <div>
    <h1> Modify poll </h1>
    <p v-if="!poll"> Please enter a valid poll ID </p>
  </div>
</template>
<script>
export default {
  name: 'VotePage',
  data () {
    return {
      poll: null
    }
  }
}
</script>
