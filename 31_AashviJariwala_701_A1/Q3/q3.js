const {chatbotReply}=require("./chatbotReply");
const readline=require("readline");

const r1=readline.createInterface(process.stdin,process.stdout);
r1.setPrompt("You===>");
r1.prompt();
r1.on("close",()=>{});
r1.on("line",(msg)=>{
    console.log("Bot===>"+chatbotReply(msg));
    r1.prompt();
}).on("close",()=>{process.exit(0)});