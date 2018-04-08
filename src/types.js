// @flow

export type User = {
  id: null | number,
  login: string,
  avatar_url: string,
}

export type Repository = {
  id: number,
  name: string,
  full_name: string,
  description: string,
  language: string,
  stargazers_count: number
}

export type Commit = {
  author: {
    name: string,
    email: string,
    date: string
  },
  hash: string
}

export type DetailsModeAction = {
  type: string,
  detailsMode: boolean
}

export type DetailsModeState = {
  show: boolean
}
