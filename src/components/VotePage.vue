<template>
  <div>
    <h1> Modify poll </h1>
    <p v-if="!poll"> Please enter a valid poll ID </p>
    <div v-if="poll">
      <p> Poll ID: {{ $route.params.id }} </p>
      <div class="float_right">
        <h2> Poll can be accessed here: </h2>
        <a> {{ $route.fullPath }} </a>
      </div>
      <div id="option_display">
        <ul class="no_bullets">
          <li v-for="option in poll.options" :key="option.name">
            <a v-on:click="addVote(option.name)"> {{ option.name }} </a>
            <ul v-for="vote in poll.votes[option.name]" :key="vote" class="no_bullets" id="votes"> <li> {{ vote }} </li> </ul>
          </li>
        </ul>
      </div>
      <button v-on:click="clearVote()"> Clear Vote </button>
    </div>
  </div>
</template>
<script>
import { Instance } from '@/models/PollModel'
const NamePromptText = 'Please enter your name for voting:'
export default {
  name: 'VotePage',
  data () {
    return {
      user: 'test',
      poll: null
    }
  },
  methods: {
    addVote (name) {
      this.poll.addVote(this.user, name)
      this.$forceUpdate()
    },
    clearVote () {
      this.poll.removeVote(this.user)
      this.$forceUpdate()
    }
  },
  mounted: function () {
    Instance.get(this.$route.params.id)
      .then(_poll => {
        this.poll = _poll
        if (this.poll) {
          this.user = prompt(NamePromptText)
        }
      })
  }
}
</script>
<style scoped>
.no_bullets {
  list-style-type: none;
}
.float_right {
  float: right;
}
#votes {
  display: inline-block;
  color: blue;
  padding-left: 10px;
}
#option_display {
  width: 70vh;
}
</style>
