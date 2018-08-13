<template>
  <div>
    <h1> Modify poll </h1>
    <p v-if="!poll"> Please enter a valid poll ID </p>
    <div v-if="poll">
      <p> Poll ID: {{ $route.params.id }} </p>
      <hr>
      <div id="small_spacer"></div>
      <div id="option_display">
        <h4> Poll Options: </h4>
        <ul class="no_bullets">
          <li v-for="option in poll.options" :key="option.name" id="options_list">
            <a v-on:click="addVote(option.id)"> {{ option.name }} </a>
            <ul v-for="vote in poll.votes[option.id]" :key="vote" class="no_bullets" id="votes"> <li> {{ vote }} </li> </ul>
          </li>
        </ul>
      </div>
      <a v-on:click="modifyShowOption(true)" v-if="!showAddOption" class="link_text"> Add option </a>
      <div id="add_option_section" v-if="showAddOption">
        <add-option-component v-on:placeAdded="newOption"></add-option-component>
        <a v-on:click="modifyShowOption(false)" class="link_text"> Show less </a>
      </div>
      <br>
      <button v-on:click="clearVote()"> Clear Vote </button>
    </div>
  </div>
</template>
<script>
import { Instance } from '@/models/PollModel'
import AddOptionComponent from '@/components/poll/AddOption'

const NamePromptText = 'Please enter your name for voting:'
export default {
  name: 'VotePage',
  components: { AddOptionComponent },
  data () {
    return {
      user: 'test',
      poll: null,
      showAddOption: false
    }
  },
  methods: {
    addVote (id) {
      this.poll.addVote(this.user, id)
      this.$forceUpdate()
      Instance.addVote(this.poll.id, this.user, id)
    },
    clearVote () {
      this.poll.removeVote(this.user)
      this.$forceUpdate()
      Instance.removeVote(this.poll.id, this.user)
    },
    modifyShowOption (showOption) {
      this.showAddOption = showOption
    },
    newOption (option) {
      this.poll.addOption(option)
      this.$forceUpdate()
      Instance.update(this.poll)
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
.link_text {
  cursor: pointer;
  text-decoration: underline;
  color: #5e5f60;
  font-size: 12px;
}
#votes {
  display: inline-block;
  color: blue;
  padding-left: 10px;
}
#option_display {
  width: 70vh;
}
#options_list {
  cursor: pointer;
}
#small_spacer {
  height: 10px;
}
</style>
