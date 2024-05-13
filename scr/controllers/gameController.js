// js/controllers/gameController.js

import Tower from '../models/tower.js';
import GameView from '../views/gameView.js';

class GameController {
    constructor() {
        this.gameView = new GameView();
        // Inicialização de outros componentes do controle aqui
    }

    // Método para adicionar uma torre ao jogo
    addTower(x, y, type) {
        const newTower = new Tower(x, y, type);
        // Lógica para adicionar a torre ao modelo e renderizá-la na visualização
        this.gameView.renderTower(newTower);
    }

    // Outros métodos de controle aqui
}

// Exportando a classe para uso em outros arquivos
export default GameController;
