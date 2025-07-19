exports.chatbotReply=(msg)=>{
    this.age=20;
    this.name="Noddy",

    msg=msg.toLowerCase();
    if(msg.indexOf("hi")>-1 || msg.indexOf("hello")>-1 || msg.indexOf("welcome")>-1)
        return "Hey "+this.name+" here";
    else if(msg.indexOf("age")>-1 && msg.indexOf("your"))
        return "I am "+this.age+" years old";
    else if(msg.indexOf("how")>-1 && msg.indexOf("are") && msg.indexOf("you?"))
        return "I am fine ^_^ .Thank you ! What about you ?";
    else
        return "Sorry ! I don't get you bruh";
}