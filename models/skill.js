const skills = [
    {id: 12345, skill: "javascript", level: "beginner"},
    {id: 33333, skill: "CSS", level: "intermediate"},
    {id: 23498, skill: "HTML", level: "intermediate"}
];

module.exports = {
    getAll,
    getOne,
    create,
    // update
}

function create(skill) {
    skill.id = Date.now() % 100000;
    // skill.level = "beginner";
    skills.push(skill);
}

// function update(id, updatedSkill) {
//     id = parseInt(id);
//     const skill = skills.find(skill => skill.id === id);
//     Object.assign(skill, updatedSkill);
//   }

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

