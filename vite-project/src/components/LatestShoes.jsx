import { useRef } from 'react';
import simage1 from '../assets/simage1.jpg';
import simage2 from '../assets/simage2.jpg';
import simage3 from '../assets/simage3.jpg';

const latestShoes = [
    { src: simage1, desc: "Mad Voltage" },
    { src: simage2, desc: "JA 2 'Purple Sky'" },
    { src: simage3, desc: "Rival Fly 4" }
];

export default function LatestShoes() {
    const scrollRefLatest = useRef(null);

    const scroll = (direction) => {
        if (scrollRefLatest.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRefLatest.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full mb-20 ">
            <h2 className="text-2xl font-semibold mb-4">The Latest</h2>
            <div className="flex scrollbar-none scrollbar-none overflow-x-auto space-x-3 py-4 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth" ref={scrollRefLatest}>
                {latestShoes.map((shoe, index) => (
                    <div key={index} className="flex flex-col items-left min-w-[300px]">
                        <img src={shoe.src} className="w-[300px] h-auto lg:w-[550px]"/>
                        <p className="mt-4 text-lg text-left font-semibold">{shoe.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
