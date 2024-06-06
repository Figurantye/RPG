"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Warrior_1 = require("./Warrior");
var Monster_1 = require("./Monster");
var player = new Warrior_1.Warrior("Nome :)", "Guerreiro?", 5);
var enemy = new Monster_1.Monster("Nome do monstro :)");
console.log(player.info(), enemy.info());
player.attack(enemy);
enemy.attack(player);
player.attack(enemy);