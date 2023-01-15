// eslint-disable-next-line import/no-unresolved, import/extensions
import common from '@/common/common';

function ff() {
  return common;
}
ff();

it('should E2e', () => {
  const core = 'core';

  expect(core).toBe('core');
});
