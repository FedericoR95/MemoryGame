document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'image1',
      img: 'images/image1.pgn'
    }
    {
      name: 'image1',
      img: 'images/image1.pgn'
    }
    {
      name: 'image2',
      img: 'images/image2.pgn'
    }
    {
      name: 'image2',
      img: 'images/image2.pgn'
    }
    {
      name: 'image3',
      img: 'images/image3.pgn'
    }
    {
      name: 'image3',
      img: 'images/image3.pgn'
    }
    {
      name: 'image4',
      img: 'images/image4.pgn'
    }
    {
      name: 'image4',
      img: 'images/image4.pgn'
    }
    {
      name: 'image5',
      img: 'images/image5.pgn'
    }
    {
      name: 'image5',
      img: 'images/image5.pgn'
    }
    {
      name: 'image6',
      img: 'images/image6.pgn'
    }
    {
      name: 'image6',
      img: 'images/image6.pgn'
    }
  ]

  const grid = document.querySelector('.grid')

  //create board
  function createBoard() {
    for (let i = 0; i< cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click')
    }
  }
})