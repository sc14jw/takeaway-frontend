<template>
  <div>
    <h1> Create a new Poll </h1>
    <span> <input v-model="optionId" placeholder="Place ID"> <input v-model="optionName" placeholder="Place Name"> <button v-on:click="addOption()"> Add </button> </span>
    <div id="optionDisplay">
      <ul id="optionList">
        <li v-for="option in options" :key="option.name"> {{ option.name }} <span id="removeIcon" v-on:click="removeOption(option)"> x </span> </li>
      </ul>
    </div>
    <button v-on:click="createPoll()"> Create </button>
  </div>
</template>
<script>
import { Instance } from '@/models/PollModel'
import { Option, Poll } from '@/entities/Poll'

export default {
  name: 'NewPoll',
  data () {
    return {
      options: [],
      poll: null,
      optionId: null,
      optionName: null
    }
  },
  methods: {
    createPoll () {
      Instance.create(new Poll(this.options))
        .then(poll => {
          this.poll = poll
          console.log('poll id = ' + poll.id)
          this.$router.push({
            name: 'VotePage',
            params: { id: poll.id }
          })
        })
    },
    addOption () {
      this.options.push(new Option(this.optionId, this.optionName))
      this.optionId = null
      this.optionName = null
    },
    removeOption (option) {
      let optIndex = this.options.indexOf(option)
      this.options.splice(optIndex, 1)
    }
  }
}
</script>
<style scoped>
  #optionDisplay {
    width: 50vw;
    text-align: left;
  }

  #optionList {
    list-style-type: none;
  }

  #removeIcon {
    cursor: pointer;
    float: right;
  }
</style>
