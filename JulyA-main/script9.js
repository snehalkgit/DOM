// program 1
let city = "punee"
switch (city) {
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "varanasi":
        console.log("UP")
    default:
        console.log('incorrect city name')
}

// program 2

let city2 = "vdddd"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "varanasi":
        console.log("UP")
        break
    default:
        console.log('incorrect city name')
}

// program 3

let city3 = "jaipur"
switch (city3) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break

    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect city name")

}


let boolVal = true
let marks = 92
switch (boolVal) {
    case marks > 90:
        console.log('Grade A')
        break;
    case marks > 75:
        console.log('Grade B')
        break
    case marks > 65 && marks <=55 :
        console.log('Grade C')
        break
    default:
        console.log('Fail please try again')
}


















