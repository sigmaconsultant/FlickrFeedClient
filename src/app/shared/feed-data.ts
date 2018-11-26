export class FeedData {
    title: string = "";
    subtitle: string = "";
    pictureUrl: string = "";

    constructor(title: string, subtitle: string, pictureUrl: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.pictureUrl = pictureUrl;
    }
}
