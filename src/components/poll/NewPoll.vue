<template>
  <div>
    <h1> Create a new Poll </h1>
    <add-option-component v-on:placeAdded="newOption"></add-option-component>
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
import { Poll } from '@/entities/Poll'
import AddOptionComponent from '@/components/poll/AddOption'

export default {
  name: 'NewPoll',
  components: { AddOptionComponent },
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
    newOption (option) {
      this.options.push(option)
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
