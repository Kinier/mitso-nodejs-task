module.exports = {
    shiftedDiff: function(shift, canon) {


        let len = shift.length;
        let len2 = canon.length;


        if (shift === canon)
            return 0;
        if (shift.length !== canon.length)
            return -1

        for (let i = 0; i < len; i++) {

            shift = shift.charAt(len - 1) + shift.substr(0, len - 1);
            if ( shift === canon){
                return (i+1)
            }

        }
        return -1;
    },

    indexEqualsValue: function (array) {
        let answer = -1;
        let previous = Math.max(...array);
        if (array[0] === 0 && array.length === 1)
            return 0

        for(let i =0; i < array.length; i++){
            if (array[i] === i && array[i] < previous){
                    previous = answer;
                    answer = array[i];
            }
        }
        return answer;
    }
};