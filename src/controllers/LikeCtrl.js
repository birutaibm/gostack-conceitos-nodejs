const { repositories } = require("../db/InMemory");

module.exports = {
  store(request, response) {
    const {id} = request.params;
    const index = repositories.findIndex(rep => rep.id === id);
  
    if (index < 0) {
      return response.status(404).json({error: 'Repository not found'});
    } else {
      repositories[index].likes++;
      const repository = repositories[index];
      return response.json(repository)
    }
  }
}