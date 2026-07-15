module.exports.ChatbotReply = function(message)
{
    this.bot_age = 25;
    this.bot_name = "Janardan";
    this.bot_university = "VNSGU";
    this.bot_country = "INDIA";

    message = message.toLowerCase();

    if(message.includes("hello") ||
       message.includes("hii") || 
       message.includes("welcome")    )
    {
        return "Hii!";
    }
    else if(message.includes("age") &&
            message.includes("your"))
            {
                return "I'm "+ this.bot_age + "years old."
            }
    else if(message.includes("name"))
    {
        return "My name is "+ this.bot_name;
    }
    else if(message.includes("university")   || message.includes("Collage")  )
    {
        return "I belong to " + this.bot_university;
    }
    else if(message.includes("how")   &&
            message.includes("are")   &&
            message.includes("you")  )
            {
                return "I'm fine ^_^"
            }
    else if(message.includes("where")   &&
            message.includes("live")   &&
            message.includes("your")  )
            {
                return "i live in "+ this.bot_country;
            }
    else{
        return "Sorry , I didn't get it ;)"
    }
}