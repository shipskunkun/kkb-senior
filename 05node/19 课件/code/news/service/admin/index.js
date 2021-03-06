const fs = require("fs");
const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: 'js04'
})
module.exports = {
   async addData(request){
        let {title,type} = request.body;
    //    console.log(request.files.img) 
        if(request.files.img.size>0){
            // 转存到指定文件夹；
            if(!fs.existsSync("static/uploads")){
                fs.mkdirSync("static/uploads");
            }
            let tempPath = request.files.img.path;
            fs.writeFileSync("static/uploads/"+request.files.img.name,fs.readFileSync(tempPath));
           let imgUrl = "/uploads/"+request.files.img.name
           let newTime = new Date().getFullYear();
           //数据添加到数据库；
            let [rows] =  await connection.promise().query("INSERT INTO news(title,imgUrl,`from`,newTime) VALUES (?,?,?,?)",[title,imgUrl,type,newTime]);
            console.log(rows);
            return rows;
        }
    }
}