<template>
  <div>
    <h1> Modify poll </h1>
    <p v-if="!$route.params.id"> Please enter a valid poll ID </p>
    <p> Poll ID: {{ $route.params.id }} </p>
    <div v-if="poll">
      <ul class="no_bullets">
        <li v-for="option in poll.votes" :key="option.name"> {{ option.name }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Instance } from '@/models/PollModel'
export default {
  name: 'VotePage',
  data () {
    return {
      poll: Instance.get(this.$route.params.id)
    }
  }
}
</script>
