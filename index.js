function updateObjectWithKeyAndValue(object, key, value) {
  var object = { key: 'value' };
  return object
  var objectNew = object.assign({}, object, {[key]: value})
  return objectNew
}