import express from "express";
const app= express();
app.get("/", (req, res)=>
{
    //res.send("HELLO WORLD!");
    res.send("<h1>HELLO WORLD!</h2>");
    // console.log(req.rawHeaders);
});
//adding about endpoint
app.get("/about", (req, res)=>
    {
        res.send("<h1>ABOUT ME</h2><p>HELLO EVERYONE! MYSELF SOUMITRI ROY</p>");
    });
    //adding contact endpoint
    app.get("/contact", (req, res)=>
        {
            res.send("<h1>CONTACT ME</h2><p>YOU CAN CONTACT ME VIA MY EMAIL ID</p>");
        });
app.listen(3000,()=>
{
    console.log("Server running on port 3000.");
});