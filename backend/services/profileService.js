import Profile from "../models/profile.js";

export default class ProfileService {
  async getProfiles() {
    return Profile.findAll();
  }
  async getProfileById(profileId) {
    return Profile.findByPk(profileId);
  }

  async getProfileByEmployeeId(employeeId) {
    return Profile.findOne({ where: { employeeId } });
  }

  async createProfile(profileData) {
    return Profile.create(profileData);
  }

  async removeProfile(profileId) {
    return Profile.destroy({ where: { id: profileId } });
  }

  async updateProfile(profileId, profileData) {
    return Profile.update(profileData, { where: { id: profileId } });
  }

  async updateProfileByEmployeeId(profileData) {
    return Profile.update(profileData, { where: { employeeId: profileData.employeeId } });
  }
}
