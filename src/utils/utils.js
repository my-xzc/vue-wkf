export default {
    //yyyymmdd => yyy.mm.dd
    yyyymmddFormat(date) {
         var dt=''
             dt = date.slice(0, 4) + '.' + date.slice(4, 6) + '.' + date.slice(6, 8);
        return dt
    }

}