// This file contains the secret functions that you need to implement.
// In no particular order, they are:
// - Exponent
// - Factorial
// - Fibonacci
// - Modulus
// - Square root

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 3
// 5, 2 -> 1
// 7, 4 -> 3
// All inputs must be >= 1
export function secret_1(_num1: number, _num2: number): number {
    const val = _num1 % num2;
    return val;
}

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 81
// 5, 2 -> 25
// 7, 4 -> 2401
// All inputs must be >= 1
export function secret_2(_num1: number, _num2: number): number {
    const val = _num1 ** _num2;
    return val;
}

// Implements the following input to output mapping:
// 1 -> 1
// 4 -> 2
// 9 -> 3
// 256 -> 16
// All inputs must be >= 0
export function secret_3(_num1: number): number {
    return sqrt(_num1);
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 6
// 5 -> 120
// 7 -> 5040
// All inputs must be >= 0
export function secret_4(_num1: number): number {
    let val = 1;
    for (i = 2; i <= _num1; i++){
        val *= i;
    }
    return val;
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 2
// 5 -> 5
// 7 -> 13
// All inputs must be >= 1
export function secret_5(_num1: number): number {
    if (_num1 <= 1) return _num1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= _num1; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
