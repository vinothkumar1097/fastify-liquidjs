const home = async (req, res) => {
    const {msg} = await req.params;
    return res.view('./views/home.html', {msg, arr: [1,2,3,4,5]})
    // res.send({msg: 'Your msg : ' + msg})
}

const chat = (req, res) => {
    // https://www.fastify.io/docs/latest/Reply/#redirectcode--dest
    // res.redirect('/tst')
    // res.code(200).redirect('/home/tst')
    // res.redirect(200, '/home/tst')
    res.view('./views/chat.html')
}

module.exports = {
    home,
    chat,
}