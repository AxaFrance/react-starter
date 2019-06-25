import { get } from 'lodash';

export const getLabel = (labels, key, props) => {
  let labelModified = get(labels, key);
  if (typeof props === 'object') {
    Object.entries(props).forEach(([, values], index) => {
      const regex = new RegExp(`\\{${index + 1}\\}`, 'g');
      labelModified = labelModified.replace(regex, values);
    });
  }
  return labelModified;
};
