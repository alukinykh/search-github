// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isNil } from 'ramda'
import { SearchUserForm } from './searchUserForm'
import { WrapperProfile } from './wrapProfile'
import type { User } from '../types'

type Props = {
  user: User
}

class _Wrapper extends Component<Props> {
  render() {
    return (
      <div>
        {isNil(this.props.user.id) ? <SearchUserForm /> : <WrapperProfile /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userInfo.user
})

export const WrapperSearch = connect(mapStateToProps)(_Wrapper)
