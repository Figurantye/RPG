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
        console.log("Monster info \nname: ".concat(this.name, "; \nstrenght: ").concat(this.strenght, " \nhealth: ").concat(this.health));
    };
    Monster.prototype.reciveDamage = function (damage) {
        this.health -= damage;
        console.log("o perigoso ".concat(this.name, " recebeu ").concat(damage, " de dano, restando somente ").concat(this.health, " de saude"));
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
