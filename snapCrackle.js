function snapCrackle(maxValue){

    let palavra = ""

    for(i = 1; i <= maxValue; i++){

        if(i == maxValue){
            if(i % 2 != 0 && i % 5 == 0){
                palavra += "SnapCrackle"
                
            }else if(i % 2 != 0){
                palavra += "Snap"

            }else if(i % 5 == 0){
                palavra += "Crackle" 

            }else{palavra += i}

        }else if(i % 2 != 0 && i % 5 == 0){
            palavra += "SnapCrackle, "

        }else if(i % 2 != 0){
            palavra += "Snap, "

        }else if(i % 5 == 0){
            palavra += "Crackle, " 

        }else{palavra += i + ", "}

    }

    return palavra

}

console.log("Função com maxValue 12")
console.log(snapCrackle(12))
console.log("Função com maxValue 10")
console.log(snapCrackle(10))
console.log("Função com maxValue 5")
console.log(snapCrackle(5))
console.log("Função com maxValue 2")
console.log(snapCrackle(2))