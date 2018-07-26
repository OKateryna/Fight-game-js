export class Fighter {
    constructor(name, power, health = 100){
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health -= damage;
        return `Health: ${this.health}`;
    }

    hit(enemy, point){
        if (this.health > 0){
            let damage = point*this.power;
            let leftHealth = enemy.setDamage(damage);
            console.log(`Enemy ${enemy.name} got hit by ${damage}. ${leftHealth}`)
        }
    }

    knockout(){
        let promise = new Promise((resolve, rejects) => {
            console.log("Time is over!");
            setTimeout(() => {
                resolve();
            }, 500)
        });

        return promise;
    }
}