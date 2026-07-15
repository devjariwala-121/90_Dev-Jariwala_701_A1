// Task 1
function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1: Number Generated");
            resolve(10);
        }, 1000);
    });
}

function multiplyNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 2: Number Multiplied");
            resolve(num * 5);
        }, 1000);
    });
}

function addNumber(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3: Number Added");
            resolve(result + 20);
        }, 1000);
    });
}

getNumber()
    .then((num) => {
        console.log("Received:", num);
        return multiplyNumber(num);
    })
    .then((result) => {
        console.log("After Multiplication:", result);
        return addNumber(result);
    })
    .then((finalResult) => {
        console.log("Final Result:", finalResult);
    })
    .catch((error) => {
        console.log("Error:", error);
    });