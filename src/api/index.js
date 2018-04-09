// @flow

import 'whatwg-fetch'
import { find, propEq, map, cond, propSatisfies } from 'ramda'

import type { User, Repository, Commit } from '../types'

const defaultHeaders = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
}

const onSucces = async (response) => {
  const result = await response.json()
  return Promise.resolve({
    status: response.status,
    data: 'items' in result ? result.items : result
  })
}

const onError = async (response) => {
  const result = await response.json()
  return Promise.reject({
    status: response.status,
    error: result,
  })
}

const isSuccess = propSatisfies(status => status >= 200 && status <= 299, 'status')
const isError = propSatisfies(status => status >= 400 && status <= 599, 'status')


const prepareResponse = async (response) => cond([[isSuccess, onSucces], [isError, onError]])(response)

const makeRequest = async (url, options) => {
  try {
    const response = await fetch(url, options)
    try {
      return await prepareResponse(response)
    } catch (err) {
      return Promise.reject(err)
    }
  } catch (err) {
    return Promise.reject({
      status: -1,
      error: 'Network error',
    })
  }
}

export const api_user = async (username: string) => {
  const url = `https://api.github.com/search/users?q=${username}+in:login+type:user`
  const options = {
    method: 'GET',
    ...defaultHeaders
  }
  const result = await makeRequest(url, options)
  if (result.data.length > 0) {
    const user = find(propEq({ login: username }))(result.data)
    return {
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,

    }
  } else {
    return Promise.reject({
      status: 404,
      error: 'User not found! Try search with new login.',
    })
  }
}

export const api_repositories = async (username: string) => {
  const url = `https://api.github.com/search/repositories?q=user:${username}`
  const options = {
    method: 'GET',
    ...defaultHeaders
  }
  const result = await makeRequest(url, options)

  return map((repository) => ({
    id: repository.id,
    name: repository.name,
    full_name: repository.full_name,
    description: repository.description,
    language: repository.language,
    stargazers_count: repository.stargazers_count
  }), result.data)
}

export const api_commits_list = async (user: string, repository: string) => {
  const url = `https://api.github.com/repos/${user}/${repository}/commits`
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.cloak-preview'
    }
  }
  const result = await makeRequest(url, options)
  return map((commit) => ({
    author: commit.commit.author,
    hash: commit.sha
  }), result.data)
}
