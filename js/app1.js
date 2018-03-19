
document.addEventListener('DOMContentLoaded', function () {


    function GameOfLife(boardWidth, boardHeight) {

        this.width = boardWidth;
        this.height = boardHeight;
        this.divsQuantity = boardHeight * boardWidth;
        this.cells = document.querySelectorAll('#board div');
        this.board = document.querySelector('#board');
        var play = document.querySelector('#play');
        var pause = document.querySelector('#pause');

        this.start = function () {
            this.createBoard();
            this.firstGilder()
        };

        this.createBoard = function () {
            for (i = 0; i < boardHeight; i++) {
                for (j= 0; j<boardWidth; j++) {
                    var newDiv = document.createElement('div');
                    this.board.appendChild(newDiv);
                }
            }

            board.style.width = boardWidth * 5 + 'px';
            board.style.height = boardHeight * 5 + 'px';

            this.cells.forEach(function (value) {
                value.addEventListener('click', function (event) {
                    if (value.classList.contains('live')) {
                        value.classList.remove('live')
                    }
                    else {
                        value.classList.add('live');
                    }
                });

            });

            this.index = this.cells[this.xyCell(x, y)];

            this.setCellState = function (x, y, state) {
                if (state === 'live') {
                    this.cells[this.xyCell(x, y)].classList.add('live')
                }
            };
            this.firstGilder = function () {
                this.setCellState(8, 0, 'live');
                this.setCellState(9, 1, 'live');
                this.setCellState(7, 2, 'live');
                this.setCellState(8, 2, 'live');
                this.setCellState(9, 2, 'live');

            };

            this.computeCellNextState = function (x, y) {
                cellsTab = [];
                cellsTab.push(this.cells[this.xyCell(x, y-1)]);
                cellsTab.push(this.cells[this.xyCell(x-1, y-1)]);
                cellsTab.push(this.cells[this.xyCell(x+1, y-1)]);
                cellsTab.push(this.cells[this.xyCell(x, y+1)]);
                cellsTab.push(this.cells[this.xyCell(x-1, y)]);
                cellsTab.push(this.cells[this.xyCell(x+1, y)]);
                cellsTab.push(this.cells[this.xyCell(x-1, y+1)]);
                cellsTab.push(this.cells[this.xyCell(x+1, y+1)]);
                // console.log(cellsTab);
                var counter = 0;
                cellsTab.forEach(function (value) {
                    if(value !== undefined) {
                        if(value.classList.contains('live')) {
                            counter++
                        }
                    }


                });

                var result = 0;

                if (this.cells[this.xyCell(x, y)].classList.contains('live')) {
                    if (counter===2 || counter=== 3) {
                        result = 1;

                    }
                    else {
                        result = 0;
                    }
                }
                if (this.cells[this.xyCell(x, y)].classList.contains('live')) {
                    if (counter ===3) {
                        result = 1;
                    }
                    else {
                        result = 0;
                    }
                }
                return result;

            };



            this.computeNextGeneration = function () {
                this.nextGeneration = [];
                for (var i = 0; i < this.cells.length; i++) {
                    var x = i % boardWidth;
                    var y = Math.floor(i / boardHeight);
                    this.nextGeneration.push(this.computeCellNextState(x, y))


                }
                return this.nextGeneration;
            };








        };

        this.printNextGeneration = function () {
            var dupa = this.cells;
            for (var i = 0; i < this.nextGeneration.length; i++) {
                if (this.nextGeneration[i] === 1 && dupa[i].getAttribute('class')!== 'live') {
                    dupa[i].classList.add('live')
                }
                else if (this.nextGeneration[i] === 0 && dupa[i].getAttribute('class') === 'live') {
                    dupa[i].classList.remove('live');
                }
            }


        };






        this.xyCell = function (x, y) {
            this.x = x;
            this.y = y;
            return this.x + this.y *this.width;
        };


        var self = this;
        console.log(self);
        var interval;


        play.addEventListener('click', function (event) {
            interval =setInterval(function() {
                self.computeNextGeneration();
                self.printNextGeneration()

            },50)
        });
        pause.addEventListener('click', function (event) {
            interval = clearInterval(interval)
        })

    }
    var width = prompt('Enter board width');
    var height = prompt('Enter board height');
    var game = new GameOfLife(width, height);
    game.start()


    // game.createBoard();
    // game.firstGilder();
    // game.setCellState(5, 5, 'live');
    // game.computeCellNextState(8, 1);
    // console.log(game.computeCellNextState(8, 0))





});
