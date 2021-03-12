const assert = require('assert');
const app = require('../../src/app');

describe('\'rental\' service', () => {
  it('registered the service', () => {
    const service = app.service('rental');

    assert.ok(service, 'Registered the service');
  });
});
