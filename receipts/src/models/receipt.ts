import { Category } from "./category";

export class Receipt {
    constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public category: Category,
    public created_at: Date
    ) {}
}