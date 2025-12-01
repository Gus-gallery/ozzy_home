import React from 'react'
import { useState, useRef } from 'react'

const slideImages = [
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

const LandingSlides = () => {
    const [index, setIndex] = useState(0);

    return (
        <section id="slides" className="overflow-hidden relative px-16 h-screen -mt-12 flex justify-center items-center">
            <div className="relative flex justify-center w-full h-full lg:w-3/4 lg:h-2/3 items-center">
                {slideImages.map((slide, i) => {
                    const offset = i - index;
                    const isCenter = offset === 0;

                    const SPACING = 1 / 1.7 * window.innerWidth;
                    const baseX = offset * SPACING;
                    const scale = isCenter ? 1 : 0.50;
                    const opacity = isCenter ? 1 : 0.20;
                    const zIndex = isCenter ? 10 : Math.abs(offset);

                    return (
                        <div
                            key={slide.id}
                            className="absolute flex flex-col items-center transition-all duration-600 ease-out cursor-pointer -z-10"
                            style={{
                                transform: `translateX(${baseX}px) scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                            onClick={() => {
                                if (!isCenter) setIndex(i);
                            }} >
                            <img
                                src={slide.image}
                                className="w-full h-auto object-cover"
                            />
                            {isCenter && (
                                <p className="mt-4 text-primary font-regular text-lg text-center">
                                    {slide.name}
                                </p>
                            )}
                            {isCenter && (
                                <p className="text-secondary font-regular text-lg text-center">
                                    {slide.place}
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