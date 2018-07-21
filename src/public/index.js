import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";
import {fight} from "./fight";

var fighter = new Fighter("Batman", 4, 155);
var improvedFighter = new ImprovedFighter("Spiderman", 2, 130);
fight(fighter, improvedFighter, 4, 6, 3, 1, 12, 9, 5, 7);
