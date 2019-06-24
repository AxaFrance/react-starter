import { getLabel } from 'services/formatting';

describe('getLabel', () => {
  let labels = {};
  beforeEach(() => {
    labels = {
      test: {
        simple: 'simple value',
        complex: 'complex {1}',
      },
    };
  });

  it('should return the label for a specified key', () => {
    const labelSimple = getLabel(labels, 'test.simple');
    expect(labelSimple).toEqual('simple value');
  });

  it('should return the label and the dynamic value for a specified key', () => {
    const labelComplex = getLabel(labels, 'test.complex', ['value']);
    expect(labelComplex).toEqual('complex value');
  });
});
