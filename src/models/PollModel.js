/**
 * Mock model implementation.
 */
class MockPollModel {
  constructor () {
    this.votes = []
    this.id = 0
  }
  create (vote) {
    vote.id = '' + this.id
    this.id++
    this.votes.push(vote)
    return new Promise((resolve, reject) => {
      resolve(vote)
    })
  }
  get (id) {
    return new Promise((resolve, reject) => {
      for (let i in this.votes) {
        let elem = this.votes[i]
        if (elem.id === id) {
          resolve(elem)
          return
        }
      }
      resolve(null)
    })
  }
}

/**
 * Provides access to the given model for interacting with votes for the app.
 */
export const Instance = new MockPollModel()
