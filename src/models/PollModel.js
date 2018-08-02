const request = require('request')
const path = require('path')

const PollPath = 'poll'

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
 * Real model implementation.
 */
class PollModel {
  create (vote) {
    return new Promise((resolve, reject) => {
      request.post('http://' + path.join(process.env.SERVER_ADDRESS, PollPath))
        .form(JSON.stringify(vote))
        .on('error', err => reject(err))
        .on('response', response => {
          if (response.statusCode === 201) {
            resolve(JSON.parse(response.body))
          } else {
            reject(response.statusCode)
          }
        })
    })
  }
  get (id) {
    return new Promise((resolve, reject) => {
      let properties = { id: id }
      request({ url: 'http://' + path.join(process.env.SERVER_ADDRESS, PollPath), qs: properties }, (err, response, body) => {
        if (err) {
          reject(err)
        } else {
          console.log('body = ' + body)
          resolve(JSON.stringify(body))
        }
      })
    })
  }
}

class Container {
  constructor () {
    console.log('process.env = ' + JSON.stringify(process.env))
    if (process.env.USE_MOCKS) {
      this.instance = new MockPollModel()
    } else {
      this.instance = new PollModel()
    }
  }
}

const ContainerInstance = new Container()

/**
 * Provides access to the given model for interacting with votes for the app.
 */
export const Instance = ContainerInstance.instance
