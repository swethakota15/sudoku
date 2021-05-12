//solving n*n sudoku board
//finding out the possibilities that will fit in rows,columns and 3*3 grid
function possibilites(puzzle, row, col, n) {
    //n=1,2,....9 any number
    //possibilities for rows
    for (let i = 0; i < puzzle.length; ++i) {
        if (puzzle[row][i] == n) {
            return false
        }
    }
    //possibilities for columns
    for (let j = 0; j < puzzle.length; ++j) {
        if (puzzle[j][col] == n) {
            return false
        }
    }
    //possibilities for 3*3 grid
    k = puzzle.length
    a = Math.sqrt(k)
    let row0 = Math.floor(row / a) * a
    let col0 = Math.floor(col / a) * a
    for (let r = row0; r < row0 + (a - 1); ++r) {
        for (let c = col0; c < col0 + (a - 1); ++c) {
            if (puzzle[r][c] == n) {
                return false
            }
        }
    }
    return true
}
//solving the board
function solve(puzzle) {
    var i_length = puzzle.length;
    for (let i = 0; i < i_length; i++) {
        for (let j = 0; j < i_length; j++) {
            // if puzzle has filled with zeros
            if (puzzle[i][j] == 0) {
                // a[0][0],a[0][1],a[0][2],...a[8][8]
                // k will be the guess number (1 to 9) that will be filled in zero place by recursion or back trcaking method
                for (let k = 1; k <= puzzle.length; k++) {
                    if (possibilites(puzzle, i, j, k)) {
                        puzzle[i][j] = k;
                        // if puzzle has solved it will return true
                        if (solve(puzzle)) {
                            return true;
                            //if puzzle doesn't soved it will return false
                        } else {
                            puzzle[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}
puzzle = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
];
console.log(solve(puzzle))
console.log(puzzle);