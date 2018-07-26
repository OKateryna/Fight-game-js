import {Fighter} from "./fighter";

export class ImprovedFighter extends Fighter {
    constructor(name, power, health = 120){
        super(name, power, health);
    }

    doubleHit(enemy, point){
        if (this.health > 0){
        point *= 2;
        super.hit(enemy, point);
        }
    }
}