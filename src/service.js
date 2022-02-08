module.exports = {
    getUserInfo(session)
    {
        let isLogged = false
        let userId = -1
        if(!!session.token)
        {
            isLogged = true
        }
        if(!!session.user)
        {
            userId = session.user.id
        }
        return { IsLogged: isLogged, UserId:userId};
    }
}
