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
        console.log(` \nNome: ${this.name} \nHP: ${this.health}  \nStrength: ${this.strenght} \n`)
    }

    public attack(theWarrior:Warrior):void{
        const damage = this.strenght
        theWarrior.receiveDamage(damage)
        console.log(`O perigoso ${this.name} atacou ${theWarrior.getName()} e causou ${damage} de dano`);

    }

    public receiveDamage(damage:number){
        this.health -= damage
        if(this.health <= 0){
            console.log(`O perigoso ${this.name} recebeu um golpe fatal de ${damage} de Dano!`);
            
        }else{
            
            console.log(`O perigoso ${this.name} recebeu ${damage} de dano, restando somente ${this.health} de saude`);
        } 
        
    }

    public get getName(){
        return this.name
    }
}