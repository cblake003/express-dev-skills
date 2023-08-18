const skills = [
    {id: 12345, skill: "javascript", level: "beginner"},
    {id: 33333, skill: "CSS", level: "intermediate"},
    {id: 23498, skill: "HTML", level: "intermediate"}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function deleteOne(id) {
    id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, skill) {
    id = parseInt(id);
    const Idx = skills.findIndex(skill => skill.id === id);
    skill.id = id;
    skills.splice(Idx, 1, skill)
  }

function create(skill) {
    skill.id = Date.now() % 100000;
    // skill.level = "beginner";
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

