import { getLabel } from 'services/formatting';

it('14. Get label from labels.json : getLabel', () => {
  const func = getLabel('places.title');
  expect(func).toEqual('Consultation des sites du contrat');

  const func2 = getLabel('contract.view.title', [23]);
  expect(func2).toEqual('Consultation du contrat n° 23');
});
