const bill = (products, tax) => {
    let total = 0

    for(i in products){
        total += ((1+tax) * products[i])
    }

    return total;
}

food_bill = [100,200,300]

console.log(bill(food_bill,0.1))