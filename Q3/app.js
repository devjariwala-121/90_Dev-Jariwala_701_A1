const chatbot = require("./chatbot");
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== CHATBOT =====");
console.log("TYPE BYE TO END CHAT");

function chat(){
    r1.question("You: ",function(message){
        if(message.toLocaleLowerCase() === "bye"){
            r1.close();
            return;
        }

        console.log("Bot: ",chatbot.ChatbotReply(message));
        chat();
    });
}
chat();