module.exports = function (sql, replaceValues){
    return new Promise((resolve, reject) => {
        pool.query(sql, replaceValues, function (err, values) {
            if (err) {
                reject(err)
            } else {
                resolve(values[0]);
            }
        });
    });
}