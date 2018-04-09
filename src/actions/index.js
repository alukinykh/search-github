// @flow

import {SubmissionError} from 'redux-form'
import { api_repositories, api_user, api_commits_list } from '../api'

export const FETCH_USER_INFO_TYPE = 'user-info/fetch'
export const FETCH_REPOSITORY_LIST = 'repository-list/fetch'
export const FETCH_COMMITS_LIST = 'commits-list/fetch'

export const DETAIL_REPOSITORY = 'DETAIL_REPOSITORY'
export const TABLE_REPOSITORY = 'TABLE_REPOSITORY'

const fetchUser = async (username: string) => api_user(username)

const fetchRepositories = async (username: string) => api_repositories(username)

const fetchCommitsList = async (user: string, repository: string) => api_commits_list(user, repository)

export const getUserInfo = (data: Object) => ({
  type: FETCH_USER_INFO_TYPE,
  payload: fetchUser(data.username)
})

export const getRepositories = (data: Object) => ({
  type: FETCH_REPOSITORY_LIST,
  payload: fetchRepositories(data.username)
})

export const getCommits = (user: string, repository: string) => ({
  type: FETCH_COMMITS_LIST,
  payload: fetchCommitsList(user, repository)
})

export const details = () => ({
  type: DETAIL_REPOSITORY,
  detailsMode: true
})

export const table = () => ({
  type: TABLE_REPOSITORY,
  detailsMode: false
})
