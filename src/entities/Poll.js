/**
 * Entity representing a poll within the app.
 */
export class Poll {
  constructor (options) {
    this.options = options
    this.votes = {}
  }
  addVote (user, option) {
    this.removeVote(user)
    if (this.votes[option] === undefined) {
      this.votes[option] = []
    }
    this.votes[option].push(user)
  }
  removeVote (user) {
    for (let option in this.votes) {
      if (this.votes.hasOwnProperty(option)) {
        const index = this.votes[option].indexOf(user)
        if (index > -1) {
          this.votes[option].splice(index, 1)
          return
        }
      }
    }
  }
}

/**
 * Entity representing an option for a Poll.
 */
export class Option {
  constructor (id, name) {
    this.id = id
    this.name = name
  }
}
