class Game {

    constructor(){
        this.board = new Board();
        this.players = this.createPlayers;
        this.ready = false;
    }
    
    createPlayers(){
        const players = [
            new Player('farhan', 1, '#e15258', true),
            new Player('smitha', 2, '#e59a13')];
            return players;
    }

    startGame(){
        
    }
}