const { Transform } = require("stream");
const task = require('./task.js');

class taskTransform extends Transform {
    constructor() {
        super();

    }

    _transform(chunk, enc, done) {
        // > если данные с консоли пришли
        let data= chunk.toString();
        if (!data){
            process.exit(1);
        }
        let match = /\n/.exec(data); // не очищенные данные
        if (match){
            data = data.slice(0, data.length - 2); // это БАЗА
        }
        // <

        const [shift, canon] =  data.split(':');


        let tAnswer = task.shiftedDiff(shift, canon);





        this.push(tAnswer.toString());
        done();
    }
}

module.exports = taskTransform;