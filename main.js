$(document).ready(function() {

    const endpoint = `https://api.github.com/users/felipoxy1`
    
    $.ajax(endpoint).done(function(resposta) {
        const profileAvatar = $('#profile-avatar')
        const profileName = $('#profile-name')
        const profileUsername = $('#profile-username')
        const profileRepositories = $('#repositories')
        const profileFollowers = $('#followers')
        const profileFollowing = $('#following')
        const profileLink = $('#profile-link')

        const gitAvatarURL = resposta.avatar_url
        const gitProfileName = resposta.name
        const gitUsername = resposta.login
        const gitRepositories = resposta.public_repos
        const gitFollowers = resposta.followers
        const gitFollowing = resposta.following
        const gitUrl = resposta.html_url

        $(profileName).text(gitProfileName)
        $(profileUsername).text(`@${gitUsername}`)
        $(profileRepositories).text(gitRepositories)
        $(profileFollowers).text(gitFollowers)
        $(profileFollowing).text(gitFollowing)
        $(profileAvatar).attr("src" ,gitAvatarURL)
        $(profileLink).attr("href" ,gitUrl)

        console.log(resposta)
    })
})