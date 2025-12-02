import React from 'react'

const bgImages = [
    {
        id: 1,
        name: "Red bird",
        place: "Tanzania 2025.",
        image: "/slides/1.jpeg",
    },
    {
        id: 2,
        name: "Monkey",
        place: "Tanzania 2025.",
        image: "/slides/2.jpeg",
    },
    {
        id: 3,
        name: "Bird",
        place: "Denmark 2025.",
        image: "/slides/3.jpg",
    },
    {
        id: 4,
        name: "Yellow bird",
        place: "Denmark 2025.",
        image: "/slides/4.jpeg",
    },
    {
        id: 5,
        name: "Spider",
        place: "Tanzania 2025.",
        image: "/slides/5.jpeg",
    },
]


const LandingBG = () => {
    const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];
    const imgSrc = randomImg.image;

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <img className="w-full h-screen object-cover opacity-100"
        src={imgSrc}
        alt={randomImg.name}
        >
        </img>

    </div>
  )
}

export default LandingBG