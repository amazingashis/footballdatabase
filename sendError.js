exports.sendError = function (res, err) {
    res.json({
        error: true,
        msg: err
    });
}

exports.sendSuccess = function (res, msg) {
    res.json({
        error: true,
        msg: msg
    });
}