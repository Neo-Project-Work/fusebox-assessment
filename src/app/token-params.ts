import { Input } from "@angular/core";

export class TokenParams {
    status: string;
    message: string;
    
    constructor() {
        this.status = '';
        this.message = '';
    }
}
