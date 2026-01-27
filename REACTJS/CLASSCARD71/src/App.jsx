import React from 'react'
import Card from './components/Card';

const App = () => {
  const users = [
  {
    fullName: "Tony Stark",
    title: "Iron Man",
    
    profileImage: "https://i.pinimg.com/736x/b6/26/0b/b6260b8874ea6a74afc3c6c35912fedf.jpg",
    coverImage: "https://i.pinimg.com/1200x/04/f0/fe/04f0fe7a153764b1f2b8f523f4956037.jpg",
    likesCount: 1250000,
    postCount: 540,
    viewsCount: 9820000,
    followed: true
  },

  {
    fullName: "Steve Rogers",
    title: "Captain America",
    profileImage: "https://i.pinimg.com/736x/ea/92/72/ea927293d3ae51432aaa89420ead6001.jpg",
    coverImage: "https://i.pinimg.com/736x/77/e7/e1/77e7e1d3836b52f8c10b7f2fde9edfd0.jpg",
    likesCount: 980000,
    postCount: 410,
    viewsCount: 7600000,
    followed: false
  },
  {
    fullName: "Thor Odinson",
    title: "God of Thunder",
    profileImage: "https://i.pinimg.com/736x/aa/b2/76/aab2767011c7d95132e5d61a08ca1fc5.jpg",
    coverImage: "https://i.pinimg.com/1200x/6a/de/af/6adeaf2cb6547f5644d9cb41de358b67.jpg",
    likesCount: 1100000,
    postCount: 390,
    viewsCount: 8450000,
    followed: true
  },
  {
    fullName: "Bruce Wayne",
    title: "Batman",
    profileImage: "https://i.pinimg.com/1200x/fb/41/da/fb41da9c92a27049573ff6f6ebcb41f8.jpg",
    coverImage: "https://i.pinimg.com/1200x/93/72/e3/9372e32055ed889371408fd60d5933f4.jpg",
    likesCount: 1500000,
    postCount: 620,
    viewsCount: 11200000,
    followed: true
  },
  {
    fullName: "Joker JJ",
    title: "Superman",
    profileImage: "https://i.pinimg.com/736x/fd/8f/1f/fd8f1ff7c8edc99c221d6743ca1ed2e3.jpg",
    coverImage: "https://i.pinimg.com/1200x/7f/04/fb/7f04fb05d75192dc9c9f322af92e7481.jpg",
    likesCount: 1420000,
    postCount: 580,
    viewsCount: 10800000,
    followed: false
  },
  {
    fullName: "Peter Parker",
    title: "Spider-Man",
    profileImage: "https://i.pinimg.com/736x/7e/d8/ed/7ed8edfc0227c56c4869ce30bb0cfe07.jpg",
    coverImage: "https://i.pinimg.com/1200x/35/95/97/359597df3a9bde033ec60b155927084c.jpg",
    likesCount: 1700000,
    postCount: 710,
    viewsCount: 13200000,
    followed: true
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow",
    profileImage: "https://i.pinimg.com/1200x/86/75/79/867579f8f21fe2bcfbaaae2ccf9ae9d4.jpg",
    coverImage: "https://i.pinimg.com/1200x/37/66/c4/3766c48497b16295c8ad079a72938fc2.jpg",
    likesCount: 860000,
    postCount: 330,
    viewsCount: 6400000,
    followed: false
  },
  {
    fullName: "DeadPool",
    title: "Black Panther",
    profileImage: "https://i.pinimg.com/736x/0f/38/75/0f3875d8fa9ee11c99cf64522e9a0c37.jpg",
    coverImage: "https://i.pinimg.com/1200x/64/4f/c0/644fc07d0ea1c1ed03c309976bd0e387.jpg",
    likesCount: 1340000,
    postCount: 470,
    viewsCount: 9800000,
    followed: true
  },
  ];

  return (
    <div className="min-h-screen bg-gray-500 p-8 flex flex-wrap gap-8 align-center">
      {users.map(function(elem,index){
        return <Card key={index} user={elem} />
      })}
    </div>
  )
}

export default App
