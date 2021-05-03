import React from 'react'
import { Card, CardHeader, CardHeaderTitle, Column } from 'bloomer'
import _ from 'lodash'

const WebsiteTile = (props) => {
  const { title } = props 

  return (
    <Column isSize={{ mobile: 6, default: 4 }}>
      <Card>
        <CardHeader>
          <CardHeaderTitle>
            {_.capitalize(title)}
          </CardHeaderTitle>
        </CardHeader>
      </Card>
    </Column>
  )
}

export default WebsiteTile
