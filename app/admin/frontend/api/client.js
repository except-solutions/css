/* eslint-disable */
import { ApiClient } from 'admin-bro';
/* eslint-enable */

const api = new ApiClient();

const getClientsCount = async () => {
  return await api.resourceAction({
    resourceId: 'Client',
    actionName: 'clientsCount'
  });
};

/* eslint-disable */
export { getClientsCount };
/* eslint-enable */
