// 1 Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function minFound (a, b){
    if (a < b)
        return a;
    else
        return b;
}

console.log(minFound(1,22))



// 2 Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function maxToMinPrint (a, b) {
    if (b > a) {
        let c = a;
        a = b;
        b = c;
    }
    for (let i = a; i >= b; i--) {
        if(i % 2 === 0)
            console.log(i)
    }
}
    
maxToMinPrint (33, 28)



// 3 Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power (a, b) {
    return a**b;
}

console.log(power(2,5))

// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function count (n){
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a += i;
    }
    return a;
}
console.log(count (10));

// 5 Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function myFunction(n, m){
    
    let even = 0;
    let odd = 0;
    if (m < n) {
        let temp = m;
        m = n;
        n = temp;
    }

    for(let i = n; i <= m; i++ ){
        if(i % 2 == 0 ){
            odd = odd + i;
        }
        else
            even = even + i;    
    }
    console.log(even);
    console.log(odd);
}

myFunction(10, 20)