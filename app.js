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

  const grid = document.querySelector('.grid')

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/HPback.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createBoard()
})