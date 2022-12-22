

const express= require('express')

const app= express()

const hbs=require('hbs')

const path=require('path')

const body_parser=require('body-parser')

orpath=path.join(__dirname, "../template")

partialspath=path.join(__dirname, "../partils")

hbs.registerPartials(partialspath)

app.set("view engine", "hbs")
app.set('views', orpath)
    
app.use(body_parser.urlencoded({extended:true}))




app.get('/',(req,res)=>{
    res.render('index')


})





app.post('/', (req, res)=>{
    
    let num1=parseFloat(req.body.height)
    let num2=parseFloat(req.body.weight)
    let result = num2/(num1*num1)
    

    res.send("sum "+ result)
})











app.get('/about',(req,res)=>{
    res.render('about')

})
app.get('/contact',(req,res)=>{
    res.render('contact')
})




app.get('/about/*',(req,res)=>{
    res.render('fansesearch',{
        err:"sorry no more details available now"
    })

})




app.get('/contact/*',(req,res)=>{
    res.render('fansesearch',{
        err:"no more details preset after this "
    })

})




app.get('/index/*',(req,res)=>{
    res.render('fansesearch',{
        err:"GO to about, contact, features"
    })

})





app.get('*',(req,res)=>{
    
    res.render('404')

})


app.listen(80,()=>{
    console.log("listning to port 80")
})


