import { Warrior } from "./Warrior"
export class Monster {
    private strenght: number
    private name: string
    private health: number

    constructor(name: string) {
        this.name = name
        this.health = 10
        this.strenght = 50
    }
    public info():void{
        console.log(`Monster info \nname: ${this.name}; \nstrenght: ${this.strenght} \nhealth: ${this.health}`);
    }

    private attack(theWarrior:Warrior):void{
        const damage = this.strenght
        theWarrior.reciveDamage(damage)
        console.log(`o perigoso ${this.name} atacou ${theWarrior.getName} e causou ${damage} de dano`);

    }

    public reciveDamage(damage:number){
        this.health -= damage
        console.log(`o perigoso ${this.name} recebeu ${damage} de dano, restando somente ${this.health} de saude`);
    }

    public get getName(){
        return this.name
    }
}