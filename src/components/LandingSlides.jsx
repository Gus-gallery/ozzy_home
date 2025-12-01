import React from 'react'
import { useState, useRef } from 'react'

const slideImages = [
    {
        id: 1,
        name: "Red bird, Tanzania, 2025",
        image: "/slides/1.jpeg",
    },
    {
        id: 2,
        name: "Monkey, Tanzania, 2025",
        image: "/slides/2.jpeg",
    },
    {
        id: 3,
        name: "Bird, Denmark, 2025",
        image: "/slides/3.jpg",
    },
    {
        id: 4,
        name: "Yellow bird, Denmark, 2025",
        image: "/slides/4.jpeg",
    },
    {
        id: 5,
        name: "Spider, Tanzania, 2025",
        image: "/slides/5.jpeg",
    },
]

const SlideCenter = ({ frame }) => (
    <div className="flex flex-col items-center justify-center overflow-x w-3/4 shrink-0">
        <img 
            src={frame.image} 
            className="object-cover overflow-hidden" />
        <p className="font-regular text-base text-primary mt-2">
            {frame.name}
        </p>
    </div>
)

const LandingSlides = () => {
    const [index, setIndex] = useState(0);

  return (
    <section id="slides" className="overflow-hidden relative px-16 h-screen -mt-12 flex justify-center items-center">
        <div className="relative flex justify-center w-2/3 h-2/3 items-center">
            {slideImages.map((slide, i) => {
                const offset = i - index;
                const isCenter = offset === 0;

                var SPACING = 1/2*screen.width;
                const baseX = offset * SPACING;
                const scale = isCenter ? 1 : 0.50;
                const opacity = isCenter ? 1 : 0.20;
                const zIndex = 10 - Math.abs(offset);

                return (
                    <div
                        key={slide.id}
                        className={`absolute flex flex-col items-center transition-all duration-400 ease-out cursor-pointer 
                            ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                        style={{
                            transform: `translateX(${baseX}px) scale(${scale})`,
                            opacity,
                            zIndex,
                        }}
                        onClick = {() => { if (!isCenter) setIndex(i);
                        }} >
                        <img
                            src={slide.image}
                            className="w-full h-auto object-cover"
                        />
                        {isCenter && (
                            <p className="mt-4 text-primary font-medium text-lg text-center">
                                {slide.name}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default LandingSlides