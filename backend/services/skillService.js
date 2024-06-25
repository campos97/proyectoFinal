import Skill from "../models/skill.js";

export default class SkillService {
  async getSkillById(skillId) {
    return Skill.findByPk(skillId);
  }

  async getAllSkills() {
    return Skill.findAll();
  }

  async createSkill(skillData) {
    return Skill.create(skillData);
  }

  async removeSkill(skillId) {
    return Skill.destroy({ where: { id: skillId } });
  }

  async updateSkill(skillId, skillData) {
    return Skill.update(skillData, { where: { id: skillId } });
  }
}
