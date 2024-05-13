// js/models/enemy.js

class Enemy {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.health = 100;
        // Mais propriedades e métodos aqui
    }
}

// Exportando a classe para uso em outros arquivos
export default Enemy;
