$(document).ready(function() {

    const endpoint = `https://api.github.com/users/felipoxy1`
    
    try {
        $.ajax(endpoint).done(function(resposta) {
            try {
                if (!resposta || !resposta.avatar_url || !resposta.name || !resposta.login) {
                    throw new Error("Resposta da API esta incompleta")
                } else {
                    console.info('Carregamento da API concluido')
                }

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
            }
            catch (InnerError) {
                console.error("erro ao precessar dados")
            }
        }).fail(function() {
            console.error("Erro ao realizar requisicao do AJAX")
        })
    }  catch (error) {
        alert('Recarregando a pagina em 5 segundos')
        console.error('Erro ao processar link da API')
        setTimeout(function() {
            location.reload(true)
        }, 5000)
    }
})