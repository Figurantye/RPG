import { Warrior } from "./Warrior"
import { Monster } from "./Monster"


let player = new Warrior("Nome :)","Guerreiro?",5);
let enemy = new Monster("Nome do monstro :)")

console.log(player.info(),enemy.info());

player.attack(enemy)
enemy.attack(player)

player.attack(enemy)

