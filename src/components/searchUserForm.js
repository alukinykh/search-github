// @flow

import React from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import {isEmpty} from 'ramda'
import { connect } from 'react-redux'
import { Grid, Button, Segment, Form } from 'semantic-ui-react'
import type { FormProps } from 'redux-form'
import { getUserInfo, getRepositories } from '../actions'

type Props = {
  searchUser: Function
} & FormProps

class _SearchUserForm extends React.Component<Props> {
  submit = (data) => {
    this.props.searchUser(data)
    this.props.getRepositories(data)
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment padded>
            <Form onSubmit={this.props.handleSubmit(this.submit)}>
              {isEmpty(this.props.errorMes) ? '' : this.props.errorMes}
              <Field
                name="username"
                placeholder="Enter user login"
                component={Form.Input}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  errorMes: state.userInfo.error
})

const mapDispatchToProps = dispatch => ({
  searchUser: (username) => dispatch(getUserInfo(username)),
  getRepositories: (username) => dispatch(getRepositories(username))
})

export const SearchUserForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'SearchUser'
})(_SearchUserForm))
