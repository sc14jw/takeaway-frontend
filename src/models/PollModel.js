import { Poll } from '../entities/Poll'

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
  create (poll) {
    poll.id = '' + this.id
    this.id++
    this.votes.push(poll)
    return new Promise((resolve, reject) => {
      resolve(poll)
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
  create (poll) {
    return new Promise((resolve, reject) => {
      request.put({ url: 'http://' + path.join(process.env.SERVER_ADDRESS, PollPath), form: JSON.stringify(poll.options) }, (err, httpResponse, body) => {
        if (err) {
          reject(err)
        }
        if (httpResponse.statusCode === 201) {
          console.log('response = ' + JSON.stringify(httpResponse))
          console.log('Response body = ' + body)
          resolve(JSON.parse(body))
        } else {
          reject(httpResponse.statusCode)
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
          let _poll = JSON.parse(body)
          let poll = new Poll(_poll.options)
          poll.id = _poll.id
          poll.votes = _poll.votes
          resolve(poll)
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
