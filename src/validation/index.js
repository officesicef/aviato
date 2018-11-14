import validatejs from 'validate.js';

export default function validate(object, schema) {
  const formValues = {};

  Object.keys(schema).forEach((key) => {
    formValues[key] = Object.prototype.hasOwnProperty.call(object, key) ? object[key] : null;
  });

  const result = validatejs(formValues, schema, { fullMessages: false });

  if (result) {
    return Object.values(result)[0];
  }

  return null;
}
