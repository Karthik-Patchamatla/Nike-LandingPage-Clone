import { useRef } from 'react';
import fshoe1 from '../assets/fshoe1.jpg';
import fshoe2 from '../assets/fshoe2.jpg';
import fshoe3 from '../assets/fshoe3.jpg';
import fshoe4 from '../assets/fshoe4.jpg';
import fshoe5 from '../assets/fshoe5.jpg';
import fshoe6 from '../assets/fshoe6.jpg';
import fshoe7 from '../assets/fshoe7.jpg';
import fshoe8 from '../assets/fshoe8.jpg';
import fshoe9 from '../assets/fshoe9.jpg';
import fshoe10 from '../assets/fshoe10.jpg';

export default function ClassicsSpotlight() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full mb-20">
            <h2 className="text-2xl font-semibold mb-4">Classics Spotlight</h2>
            <div className="flex items-center relative">
                {/* Left Arrow Button */}
                <button 
                    className="absolute left-4 z-10 p-2 rounded-full bg-white shadow-md text-black"
                    style={{ top: '50%', transform: 'translateY(-50%)' }} 
                    onClick={() => scroll('left')}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                {/* Scrollable Container */}
                <div 
                    className="scrollbar-none overflow-x-auto flex space-x-3 py-4 scrollbar-thin scrollbar-thumb-gray-300"
                    ref={scrollRef}
                >
                    {[fshoe1, fshoe2, fshoe3, fshoe4, fshoe5, fshoe6, fshoe7, fshoe8, fshoe9, fshoe10].map((src, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-left min-w-[300px]"
                        >
                            <img 
                                src={src} 
                                className="w-[300px] h-auto" 
                                alt={`Shoe ${index + 1}`} 
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button */}
                <button 
                    className="absolute right-4 z-10 p-2 rounded-full bg-white shadow-md text-black"
                    style={{ top: '50%', transform: 'translateY(-50%)' }} 
                    onClick={() => scroll('right')}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
}
