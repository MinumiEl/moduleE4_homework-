
// Задание 2

function func (str,obj) {
    for (let key in obj) {
        if (obj[key]==str) {
            console.log(true)
        }else {
            console.log(false)
        }
    }
}
func ("hello",{
    a: 1,
    hello: 2,

})
