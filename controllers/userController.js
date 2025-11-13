// GET USER INFGO

const getuserController = async (req, resp) => {
    resp.status(200).send("User Data")
}

module.exports = { getuserController }