/* eslint-disable */
import React from 'react';
import { WrapperBox, DashboardHeader, Column, Columns, ValueBlock } from 'admin-bro';
import { getClientsCount } from '../api/client';
/* eslint-enable */

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clientsCount: 0};
    this.setClientsCount();
  }
  async setClientsCount() {
    const clientsCountResponse = await getClientsCount();
    this.setState({clientsCount: clientsCountResponse.data});
  }

  render() {
    return (
      <div>
        <WrapperBox>
          <DashboardHeader>
            <h1>Client Service Swap</h1>
          </DashboardHeader>
          <Columns style={{marginTop: '-80px'}}>
            <Column className="is-offset-4">
              <ValueBlock icon="fa fa-blind" value={this.state.clientsCount}>
                Clients
              </ValueBlock>
            </Column>
          </Columns>
        </WrapperBox>
      </div>
    );
  }
}
/* eslint-disable */
export default Dashboard;
/* eslint-enable */
