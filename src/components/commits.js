// @flow

import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { table } from '../actions'
import type { Commit } from '../types'

type Props = {
  commits: Commit[],
  back: Function
}

const _CommitsTable = ({ commits, back }: Props) => (
  <div>
    <Button onClick={back}>Back</Button>
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Hash</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {commits.map((commit) => (
          <Table.Row key={commit.hash}>
            <Table.HeaderCell>{commit.author.name}</Table.HeaderCell>
            <Table.HeaderCell>{commit.hash}</Table.HeaderCell>
            <Table.HeaderCell>{commit.author.date}</Table.HeaderCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
)

const mapStateToProps = state => ({
  commits: state.commitList.commits
})

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(table())
})

export const CommitsTable = connect(mapStateToProps, mapDispatchToProps)(_CommitsTable)
