const db = require("../../routes/db.config");

const ScholarDetails = async (req,res)=>{
    const username = req.params.username

    db.query("SELECT * FROM user_info WHERE username =?", [username], async (err, data)=>{
        if(err) throw err
        const username = data[0].username
        const first_name = data[0].first_name
        const last_name = data[0].last_name
        const Bio = data[0].bio
        const title = data[0].title
        const prefix = data[0].prefix
        const location = data[0].home_address
        const phonenumber = data[0].phonenumber
        const email = data[0].email
        const profile_picture = data[0].profile_picture
        const fullname = `${first_name} ${last_name}`

        res.render("admin-scholar-detail", {
            fullname:fullname,
            email:email,
            phonenumber:phonenumber,
            username:username,
            Bio:Bio,
            title: title,
            prefix: prefix,
            location:location,
            profile_picture: profile_picture
        })
    })

}


module.exports = ScholarDetails