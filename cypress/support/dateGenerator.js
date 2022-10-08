
const dateGenerator = (destiny) => {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    var dd = '';
    if (destiny == 'departure') {
       dd = today.getDate() + 4; 
    }else {
       dd = today.getDate() + 7; 
    }
    console.log('DD', dd)
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm 
    } 
    let departureDate =  dd.toString() + mm.toString() +yyyy.toString(); 
    console.log('DATE', departureDate)
    return departureDate;
}

module.exports = dateGenerator
