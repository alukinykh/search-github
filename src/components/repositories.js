// @flow

import React from 'react'
import { Table, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { details, getCommits } from '../actions'

import type { User, Repository } from '../types'

type Props = {
  user: User,
  repositories: Repository[],
  getCommitsList: Function,
  showDetails: Function
}

class _TableRepositories extends React.Component<Props> {
  handleClick = (repository: string) => {
    this.props.getCommitsList(this.props.user.login, repository)
    this.props.showDetails()
  }

  render() {
    const { repositories } = this.props
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name repository</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell>
              Starts&nbsp;
              <Rating icon='star' defaultRating={1} maxRating={1} />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {repositories.map((repository: Repository) => (
            <Table.Row key={repository.id}>
              <Table.HeaderCell onClick={() => this.handleClick(repository.name)}>
                {repository.full_name}
              </Table.HeaderCell>
              <Table.HeaderCell>{repository.description}</Table.HeaderCell>
              <Table.HeaderCell>{repository.language}</Table.HeaderCell>
              <Table.HeaderCell>{repository.stargazers_count}</Table.HeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCommitsList: (user, repository) => dispatch(getCommits(user, repository)),
  showDetails: () => dispatch(details())
})

export const TableRepositories = connect(null, mapDispatchToProps)(_TableRepositories)
