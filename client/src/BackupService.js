const axios = require('axios');

const url = "http://10.200.40.21:3000/";

class BackupService {
    //Run backup from form
    static backup() {
        return new Promise ((resolve,reject) => {
            axios.post(url, {coords1: 'test'}).then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err)=> {
                reject(err);
            })
        });

        //     var result = require('child_process').execFileSync(
        //     'test.sh',
        //     [],
        //     {
        //         cwd: '/opt/minecraft/',
        //         stdio: 'inherit'
        //     }
        // ).toString();
    }
    static test(){
        return "test";
    }
}
export default BackupService