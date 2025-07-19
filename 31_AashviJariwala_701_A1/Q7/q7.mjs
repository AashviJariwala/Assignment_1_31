import fetch from "node-fetch";

async function fetch_goggle()
{
    const res=await fetch("https://www.google.co.in/");
    console.log(res);
}

fetch_goggle();