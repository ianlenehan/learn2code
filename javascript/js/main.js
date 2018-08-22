$(document).ready(function () {
    console.log('doc ready')
    
    $('.animal-question').click(function () {
        var answer = prompt("Do you prefer a dog or a cat?")
        console.log('You answered: ' + answer)
        
        if (answer === 'dog') {
            $('.pet-image').attr('src', 'images/dog.jpg')
        } else if (answer === 'cat') {
            $('.pet-image').attr('src', 'images/cat.jpg')
        } else {
            $('.pet-image').attr('src', 'https://media.giphy.com/media/qmfpjpAT2fJRK/giphy.gif')
            alert('It was a simple question.')
        }
    })

})