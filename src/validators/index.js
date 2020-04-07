const { isUuid } = require("uuidv4");

function validateId(request, response, next) {
  const {id} = request.params;
  return isUuid(id) ? next() : response.status(400).json({error: 'Invalid ID'});
}

module.exports = {
  validateId,
}