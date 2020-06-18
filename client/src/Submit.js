const axios = require('axios');

const url = "http://10.200.40.21:3000/";

class Submit {
    static submit(data) {
        return new Promise ((resolve,reject) => {
            axios.post(url, data).then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }
}
export default Submit