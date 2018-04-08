// @flow

import React from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import { TableRepositories } from './repositories'
import type { User, Repository } from '../types'

type Props = {
  user: User,
  repositories: Repository[]
}

export const Profile = ({ user, repositories }: Props) => (
  <Grid>
    <Grid.Column width={4}>
      <Card>
        <Image alt="avatar" src={user.avatar_url} />
        <Card.Content>
          <Card.Header>
            {user.login}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          {repositories.length} repositories
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column width={12}>
      <TableRepositories user={user} repositories={repositories} />
    </Grid.Column>
  </Grid>
)
