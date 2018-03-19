
document.addEventListener('DOMContentLoaded', function () {


    function GameOfLife(boardWidth, boardHeight) {

        this.width = boardWidth;
        this.height = boardHeight;
        // this.cells = [];
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

            board.style.width = boardWidth * 10 + 'px';
            board.style.height = boardHeight * 10 + 'px';

            this.cells = document.querySelectorAll('#board div');
            // var divs = document.querySelectorAll('#board div');
            // var newDiws = [...divs];
            // this.cells.push(newDiws);
            // console.log(this.cells);

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
            // console.log(this.cells[this.xyCell(5, 5)]);
            this.setCellState = function (x, y, state) {
                if (state === 'live') {
                    this.cells[this.xyCell(x, y)].classList.add('live')
                }
            };
            this.firstGilder = function () {
                this.setCellState(25, 4, 'live');
                this.setCellState(23, 4, 'live');
                this.setCellState(22, 4, 'live');
                this.setCellState(27, 4, 'live');
                this.setCellState(28, 4, 'live');
                this.setCellState(25, 5, 'live');
                this.setCellState(25, 6, 'live');
                this.setCellState(25, 7, 'live');
                this.setCellState(25, 8, 'live');
                this.setCellState(25, 9, 'live');
                this.setCellState(25, 10, 'live');
                this.setCellState(25, 11, 'live');
                this.setCellState(25, 12, 'live');
                this.setCellState(25, 13, 'live');
                this.setCellState(25, 15, 'live');
                this.setCellState(25, 16, 'live');
                this.setCellState(25, 17, 'live');
                this.setCellState(25, 18, 'live');
                this.setCellState(25, 20, 'live');
                this.setCellState(25, 21, 'live');
                this.setCellState(25, 22, 'live');
                this.setCellState(25, 23, 'live');
                this.setCellState(25, 24, 'live');
                this.setCellState(25, 25, 'live');
                this.setCellState(26, 14, 'live');
                this.setCellState(26, 15, 'live');
                this.setCellState(26, 16, 'live');
                this.setCellState(26, 18, 'live');
                this.setCellState(26, 19, 'live');
                this.setCellState(26, 20, 'live');
                this.setCellState(24, 14, 'live');
                this.setCellState(24, 15, 'live');
                this.setCellState(24, 16, 'live');
                this.setCellState(24, 18, 'live');
                this.setCellState(24, 19, 'live');
                this.setCellState(24, 20, 'live');
                this.setCellState(27, 4, 'live');
                this.setCellState(27, 5, 'live');
                this.setCellState(27, 6, 'live');
                this.setCellState(27, 7, 'live');
                this.setCellState(27, 8, 'live');
                this.setCellState(27, 9, 'live');
                this.setCellState(27, 10, 'live');
                this.setCellState(27, 11, 'live');
                this.setCellState(27, 13, 'live');
                this.setCellState(27, 14, 'live');
                this.setCellState(27, 15, 'live');
                this.setCellState(27, 16, 'live');
                this.setCellState(27, 17, 'live');
                this.setCellState(27, 19, 'live');
                this.setCellState(27, 20, 'live');
                this.setCellState(27, 21, 'live');
                this.setCellState(27, 22, 'live');
                this.setCellState(27, 23, 'live');
                this.setCellState(27, 24, 'live');
                this.setCellState(27, 25, 'live');
                this.setCellState(28, 19, 'live');
                this.setCellState(28, 21, 'live');
                this.setCellState(28, 22, 'live');
                this.setCellState(29, 19, 'live');
                this.setCellState(29, 20, 'live');
                this.setCellState(29, 22, 'live');
                this.setCellState(29, 23, 'live');
                this.setCellState(29, 24, 'live');
                this.setCellState(29, 27, 'live');
                this.setCellState(29, 26, 'live');
                this.setCellState(23, 4, 'live');
                this.setCellState(23, 5, 'live');
                this.setCellState(23, 6, 'live');
                this.setCellState(23, 7, 'live');
                this.setCellState(23, 8, 'live');
                this.setCellState(23, 9, 'live');
                this.setCellState(23, 10, 'live');
                this.setCellState(23, 11, 'live');
                this.setCellState(23, 13, 'live');
                this.setCellState(23, 14, 'live');
                this.setCellState(23, 15, 'live');
                this.setCellState(23, 16, 'live');
                this.setCellState(23, 17, 'live');
                this.setCellState(23, 19, 'live');
                this.setCellState(23, 20, 'live');
                this.setCellState(23, 21, 'live');
                this.setCellState(23, 22, 'live');
                this.setCellState(23, 23, 'live');
                this.setCellState(23, 24, 'live');
                this.setCellState(23, 25, 'live');
                this.setCellState(22, 4, 'live');
                this.setCellState(22, 5, 'live');
                this.setCellState(22, 6, 'live');
                this.setCellState(22, 7, 'live');
                this.setCellState(22, 8, 'live');
                this.setCellState(22, 9, 'live');
                this.setCellState(22, 10, 'live');
                this.setCellState(22, 11, 'live');
                this.setCellState(22, 13, 'live');
                this.setCellState(22, 14, 'live');
                this.setCellState(22, 15, 'live');
                this.setCellState(22, 16, 'live');
                this.setCellState(22, 17, 'live');
                this.setCellState(22, 19, 'live');
                this.setCellState(22, 21, 'live');
                this.setCellState(22, 22, 'live');
                this.setCellState(21, 19, 'live');
                this.setCellState(21, 20, 'live');
                this.setCellState(21, 22, 'live');
                this.setCellState(21, 23, 'live');
                this.setCellState(21, 24, 'live');
                this.setCellState(21, 27, 'live');
                this.setCellState(21, 26, 'live');
                this.setCellState(20, 19, 'live');
                this.setCellState(20, 20, 'live');
                this.setCellState(20, 21, 'live');
                this.setCellState(20, 23, 'live');
                this.setCellState(20, 25, 'live');
                this.setCellState(20, 26, 'live');
                this.setCellState(19, 19, 'live');
                this.setCellState(19, 20, 'live');
                this.setCellState(19, 21, 'live');
                this.setCellState(19, 22, 'live');
                this.setCellState(19, 24, 'live');
                this.setCellState(19, 26, 'live');
                this.setCellState(18, 18, 'live');
                this.setCellState(18, 19, 'live');
                this.setCellState(18, 20, 'live');
                this.setCellState(18, 21, 'live');
                this.setCellState(18, 23, 'live');
                this.setCellState(18, 24, 'live');
                this.setCellState(18, 25, 'live');
                this.setCellState(18, 26, 'live');
                this.setCellState(28, 4, 'live');
                this.setCellState(28, 5, 'live');
                this.setCellState(28, 6, 'live');
                this.setCellState(28, 7, 'live');
                this.setCellState(28, 8, 'live');
                this.setCellState(28, 9, 'live');
                this.setCellState(28, 10, 'live');
                this.setCellState(28, 11, 'live');
                this.setCellState(28, 13, 'live');
                this.setCellState(28, 14, 'live');
                this.setCellState(28, 15, 'live');
                this.setCellState(28, 16, 'live');
                this.setCellState(28, 17, 'live');
                this.setCellState(30, 19, 'live');
                this.setCellState(30, 20, 'live');
                this.setCellState(30, 21, 'live');
                this.setCellState(30, 23, 'live');
                this.setCellState(30, 25, 'live');
                this.setCellState(30, 26, 'live');
                this.setCellState(31, 19, 'live');
                this.setCellState(31, 20, 'live');
                this.setCellState(31, 21, 'live');
                this.setCellState(31, 22, 'live');
                this.setCellState(31, 24, 'live');
                this.setCellState(31, 26, 'live');
                this.setCellState(32, 18, 'live');
                this.setCellState(32, 19, 'live');
                this.setCellState(32, 20, 'live');
                this.setCellState(32, 21, 'live');
                this.setCellState(32, 23, 'live');
                this.setCellState(32, 24, 'live');
                this.setCellState(32, 25, 'live');
                this.setCellState(32, 26, 'live');
                this.setCellState(21, 5, 'live');
                this.setCellState(21, 6, 'live');
                this.setCellState(21, 7, 'live');
                this.setCellState(21, 8, 'live');
                this.setCellState(21, 9, 'live');
                this.setCellState(21, 10, 'live');
                this.setCellState(21, 11, 'live');
                this.setCellState(21, 13, 'live');
                this.setCellState(21, 14, 'live');
                this.setCellState(21, 15, 'live');
                this.setCellState(21, 16, 'live');
                this.setCellState(21, 17, 'live');
                this.setCellState(20, 5, 'live');
                this.setCellState(20, 6, 'live');
                this.setCellState(20, 7, 'live');
                this.setCellState(20, 8, 'live');
                this.setCellState(20, 9, 'live');
                this.setCellState(20, 10, 'live');
                this.setCellState(20, 11, 'live');
                this.setCellState(20, 13, 'live');
                this.setCellState(20, 14, 'live');
                this.setCellState(20, 15, 'live');
                this.setCellState(20, 16, 'live');
                this.setCellState(20, 17, 'live');
                this.setCellState(29, 5, 'live');
                this.setCellState(29, 6, 'live');
                this.setCellState(29, 7, 'live');
                this.setCellState(29, 8, 'live');
                this.setCellState(29, 9, 'live');
                this.setCellState(29, 10, 'live');
                this.setCellState(29, 11, 'live');
                this.setCellState(29, 13, 'live');
                this.setCellState(29, 14, 'live');
                this.setCellState(29, 15, 'live');
                this.setCellState(29, 16, 'live');
                this.setCellState(29, 17, 'live');
                this.setCellState(30, 5, 'live');
                this.setCellState(30, 6, 'live');
                this.setCellState(30, 7, 'live');
                this.setCellState(30, 8, 'live');
                this.setCellState(30, 9, 'live');
                this.setCellState(30, 10, 'live');
                this.setCellState(30, 11, 'live');
                this.setCellState(30, 13, 'live');
                this.setCellState(30, 14, 'live');
                this.setCellState(30, 15, 'live');
                this.setCellState(30, 16, 'live');
                this.setCellState(30, 17, 'live');
                this.setCellState(31, 6, 'live');
                this.setCellState(31, 7, 'live');
                this.setCellState(31, 8, 'live');
                this.setCellState(31, 9, 'live');
                this.setCellState(31, 10, 'live');
                this.setCellState(31, 11, 'live');
                this.setCellState(31, 12, 'live');
                this.setCellState(31, 15, 'live');
                this.setCellState(31, 16, 'live');
                this.setCellState(31, 17, 'live');
                this.setCellState(25, 27, 'live');
                this.setCellState(26, 27, 'live');
                this.setCellState(27, 27, 'live');
                this.setCellState(28, 27, 'live');
                this.setCellState(24, 27, 'live');
                this.setCellState(23, 27, 'live');
                this.setCellState(22, 27, 'live');
                this.setCellState(19, 6, 'live');
                this.setCellState(19, 7, 'live');
                this.setCellState(19, 8, 'live');
                this.setCellState(19, 9, 'live');
                this.setCellState(19, 10, 'live');
                this.setCellState(19, 11, 'live');
                this.setCellState(19, 12, 'live');
                this.setCellState(19, 15, 'live');
                this.setCellState(19, 16, 'live');
                this.setCellState(19, 17, 'live');
                this.setCellState(18, 14, 'live');
                this.setCellState(18, 6, 'live');
                this.setCellState(18, 7, 'live');
                this.setCellState(18, 8, 'live');
                this.setCellState(18, 9, 'live');
                this.setCellState(18, 10, 'live');
                this.setCellState(18, 11, 'live');
                this.setCellState(18, 12, 'live');
                this.setCellState(18, 13, 'live');
                this.setCellState(17, 14, 'live');;
                this.setCellState(17, 8, 'live');
                this.setCellState(17, 9, 'live');
                this.setCellState(17, 10, 'live');
                this.setCellState(17, 11, 'live');
                this.setCellState(17, 12, 'live');
                this.setCellState(17, 13, 'live')
                this.setCellState(17, 15, 'live')
                this.setCellState(17, 16, 'live')
                this.setCellState(17, 17, 'live')
                this.setCellState(17, 18, 'live')
                this.setCellState(16, 14, 'live')
                this.setCellState(16, 17, 'live')
                this.setCellState(16, 18, 'live')
                this.setCellState(16, 19, 'live')
                this.setCellState(16, 11, 'live')
                this.setCellState(16, 12, 'live')
                this.setCellState(16, 13, 'live')
                this.setCellState(16, 15, 'live')
                this.setCellState(16, 16, 'live')
                this.setCellState(15, 21, 'live')
                this.setCellState(15, 17, 'live')
                this.setCellState(15, 18, 'live')
                this.setCellState(15, 19, 'live')
                this.setCellState(15, 20, 'live')
                this.setCellState(15, 15, 'live')
                this.setCellState(15, 16, 'live')
                this.setCellState(15, 25, 'live')
                this.setCellState(15, 26, 'live')
                this.setCellState(15, 27, 'live')
                this.setCellState(15, 28, 'live')
                this.setCellState(15, 29, 'live')
                this.setCellState(15, 30, 'live')
                this.setCellState(15, 22, 'live')
                this.setCellState(14, 21, 'live')
                this.setCellState(14, 23, 'live')
                this.setCellState(14, 18, 'live')
                this.setCellState(14, 19, 'live')
                this.setCellState(14, 20, 'live')
                this.setCellState(14, 22, 'live')
                this.setCellState(13, 25, 'live')
                this.setCellState(13, 23, 'live')
                this.setCellState(13, 24, 'live')
                this.setCellState(13, 22, 'live')
                this.setCellState(13, 26, 'live')
                this.setCellState(12, 26, 'live')
                this.setCellState(12, 28, 'live')
                this.setCellState(12, 27, 'live')
                this.setCellState(11, 30, 'live')
                this.setCellState(11, 29, 'live')
                this.setCellState(14, 30, 'live')
                this.setCellState(14, 29, 'live')
                this.setCellState(14, 24, 'live')
                this.setCellState(17, 19, 'live')
                this.setCellState(17, 20, 'live')
                this.setCellState(17, 22, 'live')
                this.setCellState(17, 23, 'live')
                this.setCellState(17, 24, 'live')
                this.setCellState(17, 25, 'live')
                this.setCellState(17, 26, 'live')
                this.setCellState(32, 14, 'live')
                this.setCellState(32, 6, 'live')
                this.setCellState(32, 7, 'live')
                this.setCellState(32, 8, 'live')
                this.setCellState(32, 9, 'live')
                this.setCellState(32, 10, 'live')
                this.setCellState(32, 11, 'live')
                this.setCellState(32, 12, 'live')
                this.setCellState(32, 13, 'live')
                this.setCellState(33, 14, 'live')
                this.setCellState(33, 8, 'live')
                this.setCellState(33, 9, 'live')
                this.setCellState(33, 10, 'live')
                this.setCellState(33, 11, 'live')
                this.setCellState(33, 12, 'live')
                this.setCellState(33, 13, 'live')
                this.setCellState(33, 15, 'live')
                this.setCellState(33, 16, 'live')
                this.setCellState(33, 19, 'live')
                this.setCellState(33, 20, 'live')
                this.setCellState(33, 22, 'live')
                this.setCellState(33, 23, 'live')
                this.setCellState(33, 24, 'live')
                this.setCellState(33, 25, 'live')
                this.setCellState(33, 26, 'live')
                this.setCellState(34, 14, 'live')
                this.setCellState(34, 11, 'live')
                this.setCellState(34, 12, 'live')
                this.setCellState(34, 13, 'live')
                this.setCellState(34, 15, 'live')
                this.setCellState(34, 16, 'live')
                this.setCellState(34, 17, 'live')
                this.setCellState(34, 18, 'live')
                this.setCellState(34, 19, 'live')
                this.setCellState(34, 20, 'live')
                this.setCellState(35, 15, 'live')
                this.setCellState(35, 16, 'live')
                this.setCellState(35, 17, 'live')
                this.setCellState(35, 18, 'live')
                this.setCellState(35, 19, 'live')
                this.setCellState(35, 20, 'live')
                this.setCellState(35, 21, 'live')
                this.setCellState(35, 22, 'live')
                this.setCellState(36, 18, 'live')
                this.setCellState(36, 19, 'live')
                this.setCellState(36, 20, 'live')
                this.setCellState(36, 21, 'live')
                this.setCellState(36, 22, 'live')
                this.setCellState(36, 23, 'live')
                this.setCellState(36, 24, 'live')
                this.setCellState(37, 22, 'live')
                this.setCellState(37, 23, 'live')
                this.setCellState(37, 24, 'live')
                this.setCellState(37, 25, 'live')
                this.setCellState(37, 26, 'live')
                this.setCellState(38, 26, 'live')
                this.setCellState(38, 27, 'live')
                this.setCellState(38, 28, 'live')
                this.setCellState(39, 29, 'live')
                this.setCellState(39, 30, 'live')
                this.setCellState(36, 30, 'live')
                this.setCellState(36, 29, 'live')
                this.setCellState(35, 30, 'live')
                this.setCellState(35, 29, 'live')
                this.setCellState(35, 28, 'live')
                this.setCellState(35, 27, 'live')
                this.setCellState(35, 25, 'live')
                this.setCellState(35, 26, 'live')
                this.setCellState(16, 30, 'live')
                this.setCellState(17, 30, 'live')
                this.setCellState(18, 30, 'live')
                this.setCellState(19, 30, 'live')
                this.setCellState(20, 30, 'live')
                this.setCellState(21, 30, 'live')
                this.setCellState(22, 30, 'live')
                this.setCellState(23, 30, 'live')
                this.setCellState(24, 30, 'live')
                this.setCellState(25, 30, 'live')
                this.setCellState(26, 30, 'live')
                this.setCellState(27, 30, 'live')
                this.setCellState(28, 30, 'live')
                this.setCellState(29, 30, 'live')
                this.setCellState(30, 30, 'live')
                this.setCellState(31, 30, 'live')
                this.setCellState(32, 30, 'live')
                this.setCellState(33, 30, 'live')
                this.setCellState(34, 30, 'live')
                this.setCellState(35, 30, 'live')


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
                        if(value.getAttribute('class') === 'live') {
                            counter++
                        }
                    }


                });

                var result = 0;

                if (this.cells[this.xyCell(x, y)].getAttribute('class') === 'live') {
                    if (counter===2 || counter=== 3) {
                        result = 1;

                    }
                    else {
                        result = 0;
                    }
                }
                if (this.cells[this.xyCell(x, y)].getAttribute('class') !== 'live') {
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

            },100)
        });
        pause.addEventListener('click', function (event) {
            interval = clearInterval(interval)
        })




    }
    var width = prompt('Enter board width');
    var height = prompt('Enter board height');
    var game = new GameOfLife(width, height);
    game.start();

    
    var musicBtn = document.querySelector('#audio1');
    // console.log(musicBtn);
    var musicB = document.querySelector('#music');
    musicB.addEventListener('click', function (event) {

            musicBtn.play()
    });
    var body = document.querySelector('body')
    var mouseonSound = document.querySelector('#audio2');
    console.log(mouseonSound);

    play.addEventListener('mouseover', function (event) {
        mouseonSound.play()
    });
    pause.addEventListener('mouseover', function (event) {
        mouseonSound.play()
    });
    musicB.addEventListener('mouseover', function (event) {
        mouseonSound.play()
    });


    // game.createBoard();
    // game.firstGilder();
    // game.setCellState(5, 5, 'live');
    // game.computeCellNextState(8, 1);
    // console.log(game.computeCellNextState(8, 0))





});
