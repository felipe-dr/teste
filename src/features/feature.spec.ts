// eslint-disable-next-line import/no-unresolved, import/extensions
import common from '@/common/common';

import { Person } from './feature';

function ff() {
  return common;
}
ff();

it('should sum', () => {
  const p = new Person();
  expect(p.hello()).toBe('test');
});
