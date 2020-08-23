function updateObjectWithKeyAndValue(object, key, value) {
  objectNew = object.assign({}, object, {[key]: value})
  return objectNew
}