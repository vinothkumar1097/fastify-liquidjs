const home = (req, res) => {
    const {msg} = req.params;
    res.view('./views/home.html', {msg, arr: [1,2,3,4,5]})
    // res.send({msg: 'Your msg : ' + msg})
}

module.exports = {
    home,
}