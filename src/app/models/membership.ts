export class Membership {
    id: number;
    planName: string;
    features: String[];
    price: number;

    constructor(id: number, planName: string, features: String[], price: number) {
        this.id = id;
        this.planName = planName;
        this.features = features;
        this.price = price;
    }

}