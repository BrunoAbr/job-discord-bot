export class FreelanceModel {
    constructor(title, link, description = null, value="A combinar") {
        this.title = title,
        this.link = link,
        this.description = description,
        this.value = value,
        this.createdAt = new Date();
    }
}

module.exports = FreelanceModel;