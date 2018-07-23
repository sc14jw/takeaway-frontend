<template>
    <div>
        <h1> Welcome! </h1>
        <hr>
        <p> Welcome to the takeaway server </p>
        <button v-on:click="newVote()"> Create a new vote </button>
        <p> Or enter the ID of an existing vote in the box below: </p>
        <span> <input v-model="voteId" placeholder="Vote ID"> <button v-on:click="openVote()"> Ok </button> </span>
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      voteId: null
    }
  },
  methods: {
    openVote () {
      console.log('voteId = ' + this.voteId)
    },
    newVote () {
      console.log('new vote clicked.')
    }
  }
}
</script>
