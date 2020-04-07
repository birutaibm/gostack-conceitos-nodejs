const { uuid } = require("uuidv4");

const { repositories } = require("../db/InMemory");

function index(request, response) {
  return response.json(repositories);
}

function store(request, response) {
  const {url, title, techs} = request.body;
  const repository = {
    id: uuid(),
    likes: 0,
    url,
    title,
    techs,
  };

  repositories.push(repository);
  return response.status(201).json(repository);
}

function update(request, response) {
  const {id} = request.params;
  const index = repositories.findIndex(rep => rep.id === id);

  if (index < 0) {
    return response.status(404).json({error: 'Repository not found'});
  } else {
    const info = request.body;
    if (info.title) {
      repositories[index].title = info.title;
    }
    if (info.url) {
      repositories[index].url = info.url;
    }
    if (info.techs) {
      repositories[index].techs = info.techs;
    }

    const repository = repositories[index];
    return response.json(repository)
  }
}

function remove(request, response) {
  const {id} = request.params;
  const index = repositories.findIndex(rep => rep.id === id);

  if (index < 0) {
    return response.status(404).json({error: 'Repository not found'});
  } else {
    repositories.splice(index, 1);
    return response.sendStatus(204);
  }
}

module.exports = {
  index, store, update, remove
};