const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
});
let products=
[
    {id:1,name:'Laptop',price:'Rs 40000'},
    {id:2,name:'iPhone',price:'Rs 80000'}
];
app.get('/',
    (req,res)=>{
        res.send('Hello EXpress!! https://www.youtube.com/dost2web/');
    }
);
app.get('/products',
    (req,res)=>{
        res.json(products);
    }
);

