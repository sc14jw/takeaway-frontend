<template>
    <div>
        <h1> Welcome! </h1>
        <hr>
        <p> Welcome to the takeaway server </p>
        <button v-on:click="newPoll()"> Create a new poll </button>
        <p> Or enter the ID of an existing poll in the box below: </p>
        <span> <input v-model="pollId" placeholder="Poll ID"> <button v-on:click="openPoll()"> Ok </button> </span>
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      pollId: null
    }
  },
  methods: {
    openPoll () {
      console.log('pollId = ' + this.pollId)
    },
    newPoll () {
      this.$router.push('new')
    }
  }
}
</script>
