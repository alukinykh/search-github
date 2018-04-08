// @flow

import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Grid, Input, Button, Segment, Message, Form } from 'semantic-ui-react'
import type { FormProps } from 'redux-form'
import { getUserInfo } from '../actions'

type Props = {
  searchUser: Function
} & FormProps

class _SearchUserForm extends React.Component<Props> {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment padded>
            <Form onSubmit={this.props.handleSubmit(this.props.searchUser)}>
              <Field
                name="username"
                placeholder="Enter user login"
                component={Form.Input}
              />
              {/*<Message*/}
                {/*error*/}
                {/*header='Action Forbidden'*/}
                {/*content='You can only sign up for an account once with a given e-mail address.'*/}
              {/*/>*/}
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchUser: (username) => dispatch(getUserInfo(username)),
})

export const SearchUserForm = connect(null, mapDispatchToProps)(reduxForm({
  form: 'SearchUser'
})(_SearchUserForm))
