/**
 * Entity representing a poll within the app.
 */
export class Poll {
  constructor (options) {
    this.options = options
    this.votes = {}
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
