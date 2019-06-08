export class User {
    public username: string;
    public userData: any; 
    public repos: any;
    showSerching: boolean;

    constructor(username: string, userData: any, repos: any,){
        this.username = username, this.userData = userData, this.repos= repos,
            this.showSerching=false

    }
}

