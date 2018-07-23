/**
 * Mock model implementation.
 */
class MockPollModel {
  constructor () {
    this.votes = []
    this.id = 0
  }
  create (vote) {
    return new Promise((resolve, reject) => {
      this.votes.push(vote)
      vote.id = this.id
      this.id++
      resolve(vote)
    })
  }
}

/**
 * Provides access to the given model for interacting with votes for the app.
 */
export const Instance = new MockPollModel()
