// create async function fight\
export async function fight(fighter, improvedFighter, ...points){
   try {
       while(true){
           if (fighter.health <= 0){
               console.log(`${fighter.name} health is less than zero!`);
               let knockoutPromise = await fighter.knockout();
               break;
           }

           if (improvedFighter.health <= 0){
            console.log(`${improvedFighter.name} health is less than zero!`);
               let improvedKnockoutPromise = await improvedFighter.knockout();
               break;
            }
        
            let point = points[Math.floor(Math.random()*points.length)];
            fighter.hit(improvedFighter, point);
            point = points[Math.floor(Math.random()*points.length)];
            improvedFighter.doubleHit(fighter, point);
       }
   }
   catch (error) {
       console.log(error);
   }

}