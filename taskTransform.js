const {Transform} = require("stream");
const task = require('./task.js');
const Validator = require('./validator.class.js')

class taskTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(chunk, enc, done) {
        let data = chunk.toString();
        let tAnswer = ''


        if (!Validator.isEmpty(data)){
            process.stderr.write('Не введено ничего');
            process.exit(1);
        }
        switch (this.action) {
            case 'diff':
                let match = /\n/.exec(data); // не очищенные данные
                if (match) {
                    data = data.slice(0, data.length - 2); // это БАЗА
                }


                const [shift, canon] = data.split(':');


                tAnswer = task.shiftedDiff(shift, canon);
            break;

            case 'equals':
                    let arr = JSON.parse(data);
                    tAnswer = task.indexEqualsValue(arr);

            break;

            default:
                process.stderr.write(`Команду не так ввел`);
                process.exit(1);
            break;
        }


        this.push(tAnswer.toString() + "\n");
        done();
    }
}

module.exports = taskTransform;