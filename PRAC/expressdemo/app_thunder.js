const exp=require("express");
const bp=require("body-parser");
const app=exp();
app.use(bp.json());
const emp=[
    {
        id:1,name:"Divya",dept:"CSE"
    },
    {
        id:2,name:"Deepthi",dept:"ECE"
    },

];
app.get("/api/emp",(req,res)=>{
    res.json(emp);
});
app.get("/api/emp/:id",(req,res)=>{
    const e = emp.find((e) => e.id === parseInt(req.params.id));
    if(!e){
        return res.json("Doesn't exist");
    }
    res.json(e);
});

app.post("/api/emp",(req,res)=>{
    const em={
        id:emp.length+1,
        name:req.body.name,
        dept:req.body.dept,
    };
    emp.push(em);
    res.json(em);
})
app.put("/api/emp/:id", (req, res) => {
    const e = emp.find((e) => e.id === parseInt(req.params.id));
    if (!e) {
        return res.json({ message: `Employee with ${req.params.id} doesn't exist` });
    } else {
        e.name = req.body.name;
        e.dept = req.body.dept;
    }
    res.json(e);
});


app.delete("/api/emp/:id", (req, res) => {
    const e = emp.find((e) => e.id === parseInt(req.params.id));
    if (!e) {
        return res.json({ message: `Employee with ${req.params.id} doesn't exist` });
    }
    const index = emp.indexOf(e);
    emp.splice(index, 1);
    res.json(e);
});

app.listen(3000);