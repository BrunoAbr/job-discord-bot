export class FreelanceModel {
    constructor(title, url, description = null, value="A combinar") {
        this.title = title,
        this.url = url,
        this.description = description,
        this.value = value,
        this.createdAt = new Date();
    }
}