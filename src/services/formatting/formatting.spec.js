import { getLabel } from 'services/formatting';

it('should return the label ', () => {
  const labelSimple = getLabel('test.simple');
  expect(labelSimple).toEqual('simple value');

  const labelComplex = getLabel('test.complex', ['value']);
  expect(labelComplex).toEqual('complex value');
});
