export class Example {
    code: string;
    description: string;
    shortDescription: string;  

    constructor(options: any) {
        this.shortDescription = options.shortDescription;
        this.description = options.description;
        this.code = options.code;
    }
}