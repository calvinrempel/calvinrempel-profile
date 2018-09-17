export class Project {
    title: string;
    id: string;
    thumbnail: string;
    image: string;
    description: string;
    fullDescription: string;
    githubLink: string;
    demoLink: string;
    tags: string[];

    constructor(json: object) {
        this.title = json['title'];
        this.id = json['id'];
        this.thumbnail = json['thumbnail'];
        this.image = json['image'];
        this.description = json['description'];
        this.fullDescription = json['fullDescription'];
        this.githubLink = json['githubLink'];
        this.demoLink = json['demoLink'];
        this.tags = json['tags'] ? json['tags'] : [];
    }
}