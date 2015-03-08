'use strict';

import test from 'tape';
import myObject from '../index';

test('Assert object values', (t) => {
  t.plan(2);
  t.equal(myObject.name, 'ES6 Starter Kit');
  t.equal(myObject.version, '1.0');
});
