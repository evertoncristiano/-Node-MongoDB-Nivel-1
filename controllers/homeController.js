exports.userMiddleware = (req, res, next) => {
    let info = {id: 1234, name: "Everton"}
    req.userInfo = info;
    next();
}

exports.index = (req, res)=>{
    let obj = {
        pageTitle: 'HOME',
        userInfo: req.userInfo
    }
    res.render('home', obj);
}