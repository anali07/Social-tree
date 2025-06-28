let link_1 = "https://www.instagram.com/accounts/login/"
let link_2 = "https://www.tiktok.com/login/phone-or-email/email"
let link_3 = "https://br.pinterest.com/"
let link_4 = "https://open.spotify.com/playlist/6BYWHPsLbJdFiGvZHHbbEN"

// function direcionar(num_link) {
//     window.location.href = `link_${num_link}`
// }

function direcionar(num_final) {
    if(num_final == 1){
        window.location.href = link_1
    }

    if(num_final == 2){
        window.location.href = link_2
    }

    if(num_final == 3){
        window.location.href = link_3
    }

    if(num_final == 4){
        window.location.href = link_4
    }
    
}