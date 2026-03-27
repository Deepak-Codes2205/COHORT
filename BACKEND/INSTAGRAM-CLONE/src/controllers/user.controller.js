const followModel = require("../models/follow.model")
const userModel = require("../models/user.models")
 
//SEND FOLLOW REQUEST
async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername  = req.params.username

    if(followerUsername == followeeUsername)
    {
        return res.status(400).json({
            message: "You Cannot Follow Yourself !"
        })
    }

    const userExists  = await userModel.findOne({
        username: followeeUsername
    })
    if(!userExists)
    {
        return res.status(401).json({
            message: `The User ${followeeUsername} you are trying to follow does not Exists!`
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(isAlreadyFollowing)
    {
        return res.status(200).json({
            message: `You Are Already Following ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    const followRequest = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
        status: "Pending"
    })

    res.status(201).json({
        message: `Follow Request send to ${followeeUsername}`,
        follow: followRequest
    })

}

// VIEW FOLLOW REQUESTS
async function getFollowRequests(req, res) {

    const username = req.user.username

    const requests = await followModel.find({
        followee: username,
        status: "Pending"
    })

    res.status(200).json({
        requests
    })
}


// ACCEPT FOLLOW REQUEST
async function acceptFollowRequest(req, res) {

    const currentUser = req.user.username
    const followerUsername = req.params.username

    const request = await followModel.findOne({
        follower: followerUsername,
        followee: currentUser,
        status: "Pending"
    })

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        })
    }

    request.status = "Accepted"
    await request.save()

    res.status(200).json({
        message: `${followerUsername} is now following you`
    })
}


// REJECT FOLLOW REQUEST

async function rejectFollowRequest(req, res) {

    const currentUser = req.user.username
    const followerUsername = req.params.username

    const request = await followModel.findOne({
        follower: followerUsername,
        followee: currentUser,
        status: "Pending"
    })

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        })
    }

    request.status = "Rejected"
    await request.save()

    res.status(200).json({
        message: "Follow request rejected"
    })
}


// UNFOLLOW USER
async function unfollowUsercontroller(req,res) {

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing  =  await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "Accepted"
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not Following this user ${followeeUsername}`
        })
    }
    
    await  followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:`You have Unfollowed ${followeeUsername}`
    })
}

module.exports = {
    followUserController,
    getFollowRequests,
    acceptFollowRequest,
    rejectFollowRequest,
    unfollowUsercontroller
}
