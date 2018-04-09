// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from './profile'
import { CommitsTable } from './commits'
import type { Repository, User } from '../types'

type Props = {
  user: User,
  repositories: Repository[],
  detailsMode: boolean
}

class _Wrapper extends Component<Props> {
  render() {
    const { user, repositories, detailsMode } = this.props
    return (
      <div>
        {detailsMode ? <CommitsTable /> :
        <Profile
          user={user}
          repositories={repositories}
        />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userInfo.user,
  repositories: state.repositories.repositories,
  detailsMode: state.detailsMode.show
})

export const WrapperProfile = connect(mapStateToProps)(_Wrapper)
