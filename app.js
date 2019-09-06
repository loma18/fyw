const http=require("http");
const express=require("express");
const qs=require("querystring");
const mysql=require("mysql");
const path=require('path');
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"fyw",
    port:3306,
    connectionLimit:10
});
var app=express();
var server=http.createServer(app);
server.listen(8081);
app.use(express.static(path.join(__dirname,"./public")));
/*用户名验证*/
app.get("/reg_uname",(req,res)=>{
   var u=req.query.uname;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT*FROM fyw_user WHERE uname=?";
        conn.query(sql,[u],(err,result)=>{
            if(err) throw err;
            if(result.length<1){
                res.json({code:1,msg:"此用户名可用"});
            }else{
                res.json({code:-1,msg:"此用户名已被注册，请重试"});
            }
            conn.release();
        })
    })
});
/*用户名注册*/
app.post("/add_user",(req,res)=>{
    req.on("data",(data)=> {
        var str = data.toString();
        var obj = qs.parse(str);
        //console.log(obj.title+obj.price);
        var u = obj.uname;
        var p = obj.upwd;
        var phone = obj.phno;
        pool.getConnection((err, conn)=> {
            if (err) throw err;
            var sql = "INSERT INTO fyw_user VALUES(null,?,?,0,?)";
            conn.query(sql, [u, p,phone], (err, result)=> {
                if (err) throw err;
                res.json({code: 1, msg: "注册成功"});
            });
            conn.release();
        })
    });
});

/*用户登录*/
app.post("/login",(req,res)=>{
   req.on("data",(data)=>{
       var str=data.toString();
       var obj=qs.parse(str);
       pool.getConnection((err,conn)=>{
       if(err) throw err;
       var sql="SELECT*FROM fyw_user WHERE uname=? AND upwd=?";
           conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
               if(err) throw err;
               if(result.length>0){
                    res.json(result);
                   conn.release();
               }else{
                   res.json({code:-1,msg:"用户名或密码错误"});
                   conn.release();
               }
           })
       })

   })
});
/*欢迎回来*/
app.get("/sel_nname",(req,res)=>{
   var u=req.query.uname;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT nname FROM fyw_user WHERE uname=?";
        conn.query(sql,[u],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.json(result);
                conn.release();
                //console.log(result);
            }
        })
    })
});

/*热销楼盘*/
app.get('/hot_house',(req,res)=>{
    var ftype=req.query.ftype;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql='SELECT f.fname,f.price,f.applyct,f.picture,a.aname FROM fyw_flist f,fyw_area a WHERE f.ftype=? AND f.aid=a.aid';
        conn.query(sql,[ftype],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.length>0){
                res.json(result);
                conn.release();
                console.log(result);
            }
        })
    })
});
/*新房*/
app.get('/new_house',(req,res)=>{
    var ftype=req.query.ftype;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql='SELECT f.fname,f.price,f.applyct,f.picture,a.aname FROM fyw_flist f,fyw_area a WHERE f.ftype=? AND f.aid=a.aid';
        conn.query(sql,[ftype],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.length>0){
                res.json(result);
                conn.release();
            }
        })
    })
});
/*新房*/
app.get('/resold_house',(req,res)=>{
    var ftype=req.query.ftype;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql='SELECT d.intr1,d.intr2,d.advantage1,d.advantage2,f.picture FROM fyw_flist f,fyw_indexdetails d WHERE f.ftype=? AND f.fid=d.fid';
        conn.query(sql,[ftype],(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.length>0){
                res.json(result);
                conn.release();
            }
        })
    })
});













