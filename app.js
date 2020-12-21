document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'Hogwarts',
            img: 'images/Hogwarts.png'
        },
        {
            name: 'Hogwarts',
            img: 'images/Hogwarts.png'
        },
        {
            name: 'Grifondoro',
            img: 'images/Grifondoro.png'
        },
        {
            name: 'Grifondoro',
            img: 'images/Grifondoro.png'
        },
        {
            name: 'Serpeverde',
            img: 'images/Serpeverde.png'
        },
        {
            name: 'Serpeverde',
            img: 'images/Serpeverde.png'
        },
        {
            name: 'Corvonero',
            img: 'images/Corvonero.png'
        },
        {
            name: 'Corvonero',
            img: 'images/Corvonero.png'
        },
        {
            name: 'Tassorosso',
            img: 'images/Tassorosso.png'
        },
        {
            name: 'Tassorosso',
            img: 'images/Tassorosso.png'
        },
        {
            name: 'Prefect',
            img: 'images/Prefect.png'
        },
        {
            name: 'Prefect',
            img: 'images/Prefect.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsMatched = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/HPback.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', optionOneId.img) //queste due righe
            cards[optionTwoId].setAttribute('src', optionTwoId.img) //potrei non metterle?
            cardsMatched.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/HPback.png')
            cards[optionTwoId].setAttribute('src', 'images/HPback.png')
            alert('Not a match')
        }
        cardsChosen = []
        cardsChosenId = []
        scoreDisplay.textContent = cardsMatched.length
        if (cardsMatched == cardArray.length / 2) {
            scoreDisplay.textContent = 'Bravo scemo'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500) //buffertime: così le cose succedono lente
        }
    }

    createBoard()
})