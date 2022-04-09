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

        let match = /\n/.exec(data); // не очищенные данные
        if (match) {
            data = data.slice(0, data.length - 2); // это БАЗА
        }


        if (Validator.isEmpty(data)){
            process.stderr.write('Не введено ничего');
            process.exit(1);
        }
        switch (this.action) {
            case 'diff':


                try{
                    const [shift, canon] = data.split(':');


                    tAnswer = task.shiftedDiff(shift, canon);
                }catch (e){
                    process.stderr.write('Ошибка - две части не разделены двоеточием \':\'' )
                    process.exit(1)
                }

            break;

            case 'equals':
                try {
                    let arr = JSON.parse(data);
                    tAnswer = task.indexEqualsValue(arr);
                }catch (e) {
                    process.stderr.write("Кажется это не массив")
                    process.exit(1)
                }
            break;

            default:
                process.stderr.write(`Команды ${this.action} не существует`);
                process.exit(1);
            break;
        }


        this.push(tAnswer.toString() + "\n");
        done();
    }
}

module.exports = taskTransform;