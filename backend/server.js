const  express =  require("express")

const app = express()

const port = 5000;


app.get("/", (req, res)=>{
    res.status(200).json({message:"OK"})
})


app.listen(port);