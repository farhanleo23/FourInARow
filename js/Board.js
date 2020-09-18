class Board {

    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.space = this.createSpaces;
    }

    createSpaces(){

        const spaceArray = [];

        for (let x = 0; x < this.columns; i++) {
            const column = [];

            for (let y = 0; y < this.rows; j++) {
                let space = new Space(x, y);
                column.push(space);
            }
            spaceArray.push(column);
        }
        return spaceArray
    }
    
}