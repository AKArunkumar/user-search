export class User {
    name          : string;
    id            : number;
    avatar_url     : string;
    html_url      : string;
    followers_url : string;
    following_url : string;
    repos_url     : string;
    score         : number;

    constructor(name: string, id: number, avatar_url: string, html_url,
                urlOne: string, urlTwo: string, urlThree: string, score: number){
                    this.name = name;
                    this.id = id;
                    this.avatar_url = avatar_url;
                    this.html_url = html_url;
                    this.followers_url = urlOne;
                    this.following_url = urlTwo;
                    this.repos_url = urlThree;
                    this.score = score;
                }
}