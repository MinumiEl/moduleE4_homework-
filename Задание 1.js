// Задание 1

function func (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key,obj);
        }
    }
}
func ({
    a: 1,
    hello: 2,

})