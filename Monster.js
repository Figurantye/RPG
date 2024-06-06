"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.health = 10;
        this.strenght = 50;
    }
    Monster.prototype.info = function () {
        console.log(" \nNome: ".concat(this.name, " \nHP: ").concat(this.health, "  \nStrength: ").concat(this.strenght, " \n"));
    };
    Monster.prototype.attack = function (theWarrior) {
        var damage = this.strenght;
        theWarrior.receiveDamage(damage);
        console.log("O perigoso ".concat(this.name, " atacou ").concat(theWarrior.getName(), " e causou ").concat(damage, " de dano"));
    };
    Monster.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("O perigoso ".concat(this.name, " recebeu um golpe fatal de ").concat(damage, " de Dano!"));
        }
        else {
            console.log("O perigoso ".concat(this.name, " recebeu ").concat(damage, " de dano, restando somente ").concat(this.health, " de saude"));
        }
    };
    Object.defineProperty(Monster.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Monster;
}());
exports.Monster = Monster;
