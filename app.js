document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'Hogwarts',
      img: 'images/Hogwarts.jpg'
    },
    {
      name: 'Hogwarts',
      img: 'images/Hogwarts.jpg'
    },
    {
      name: 'Grifondoro',
      img: 'images/Grifondoro.jpg'
    },
    {
      name: 'Grifondoro',
      img: 'images/Grifondoro.jpg'
    },
    {
      name: 'Serpeverde',
      img: 'images/Serpeverde.jpg'
    },
    {
      name: 'Serpeverde',
      img: 'images/Serpeverde.jpg'
    },
    {
      name: 'Corvonero',
      img: 'images/Corvonero.jpg'
    },
    {
      name: 'Corvonero',
      img: 'images/Corvonero.jpg'
    },
    {
      name: 'Tassorosso',
      img: 'images/Tassorosso.jpg'
    },
    {
      name: 'Tassorosso',
      img: 'images/Tassorosso.jpg'
    },
    {
      name: 'Prefect',
      img: 'images/Prefect.jpg'
    },
    {
      name: 'Prefect',
      img: 'images/Prefect.jpg'
    }
  ]

  const grid = document.querySelector('.grid')

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/HPback.jpg')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createBoard()
})