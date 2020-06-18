const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const exec = require('child_process').exec;

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

//app.use('/api/posts', posts);
// exec('ls', 
//             {cwd: '/home/xyven/'},
//             (err, stdout, stderr) => {
//             if (err) {
//                 console.log("test");
//                 return "failed in backup.js";
//             } else {
//                 console.log(stdout);                // the *entire* stdout and stderr (buffered)
//                 return stdout || stderr;
//             }
//         });
app.listen(port, () => console.log("Server started on port 3000"));
app.post('/', async (req, res) => {
    const temp = await backup(req);
    console.log(temp);
    res.send(temp);
})
app.get('/', (req, res) =>{
    res.send("backend")
});
function backup(a) {
    return new Promise((resolve, reject) => {
        exec('sudo /opt/minecraft/script.sh '+[a.body.coords1, a.body.coords2, a.body.date, a.body.world, a.body.destination].join(' '), (error, stdout, stderr) => {
            if (error)
                console.warn(error);
            resolve(stdout?stdout:stderr);
        });
    });
}