import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:vendor', 'model:photo', 'model:album', 'model:post', 'model:status', ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
