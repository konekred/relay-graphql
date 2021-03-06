import React from 'react'
import Relay from 'react-relay'

import {
  PanelContainer,
  Panel,
  PanelBody,
  Grid,
  Row,
  Col,
  Form,
  FormControl 
} from '@sketchpixy/rubix'

class Managers extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{paddingTop: 0}}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Managers Page</h3>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    )
  }
}

export default Managers