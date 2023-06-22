function writeCards(name, surprise) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`)
    }
    return messages;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
}