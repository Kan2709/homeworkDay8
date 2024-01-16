const bodyParser = require('body-parser')
const exp=require('express')
const app=exp()
const port=8080
app.use(bodyParser.json())

const product=[
    {
        "id":1,
        "Pname":"pen"
    },
    {
        "id":2,
        "Pname":"pencil"
    },
    {
        "id":3,
        "Pname":"eraser"
    }
]

app.get('/product',(req,res)=>{
    res.json(product)
})

app.post('/product',(req,res)=>{
    product.push(req.body)
    res.json(product)
})

app.put('/product/:id',(req,res)=>{
    const id =Number(req.params.id)
    const change=req.body
    const WntChg=product.findIndex(s =>s.id===id)
    product[WntChg]=change
    res.json(product)
})

app.delete('/product/:id',(req,res)=>{
    const id = Number(req.params.id)
    const kesu=product.findIndex(f=>f.id===id)
    product.splice(kesu,1)
    res.json(product)
})

app.listen(port,()=>{console.log('this server on ',port)})