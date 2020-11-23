exports.reqister = (res,req =>{
    const user = {
        "email" : req.body.email,
        "user_name" : req.body.user_name,
        "address": req.body.address,
        "branch_number": req.body.branch_number,
        "phone" : req.body.phone,
        "gender": req.body.gender
    }
    connenction.query
}) 