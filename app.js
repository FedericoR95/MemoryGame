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
      name: 'image2',
      img: 'images/image2.jpg'
    },
    {
      name: 'image2',
      img: 'images/image2.jpg'
    },
    {
      name: 'image3',
      img: 'images/image3.jpg'
    },
    {
      name: 'image3',
      img: 'images/image3.jpg'
    },
    {
      name: 'image4',
      img: 'images/image4.jpg'
    },
    {
      name: 'image4',
      img: 'images/image4.jpg'
    },
    {
      name: 'image5',
      img: 'images/image5.jpg'
    },
    {
      name: 'image5',
      img: 'images/image5.jpg'
    },
    {
      name: 'image6',
      img: 'images/image6.jpg'
    },
    {
      name: 'image6',
      img: 'images/image6.jpg'
    }
  ]

  const grid = document.querySelector('.grid')

  //create board
  function createBoard() {
    for (let i = 0; i< cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click')
    }
  }
})