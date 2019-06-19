import _ from 'lodash';
import labels from '../../params/labels';

/**
 * Retourne le label variabilisé du fichier labels.json
 * @param {string} label
 * @param {Array} props
 */
export const getLabel = (label, props) => {
  let labelModified = _.get(labels, label);
  if (typeof props === 'object') {
    Object.entries(props).forEach(([, values], index) => {
      const regex = new RegExp(`\\{${index + 1}\\}`, 'g');
      labelModified = labelModified.replace(regex, values);
    });
  }
  return labelModified;
};
