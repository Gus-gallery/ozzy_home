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
        name: "Bird",
        place: "Tanzania 2025.",
        image: "/af/20.jpeg",
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
    {
        id: 6,
        name: "DenBird",
        place: "Denmark 2025.",
        image: "/dk/9.jpg",
    },
    {
        id: 7,
        name: "Krage",
        place: "Norway 2024.",
        image: "/nw/2.jpg",
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