import image1 from '../assets/Image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

export default function ShopBySport() {
    const sports = [
        { src: image1, desc: "Running" },
        { src: image2, desc: "Football" },
        { src: image3, desc: "Basketball" },
        { src: image4, desc: "Training and Gym" },
        { src: image5, desc: "Tennis" },
        { src: image6, desc: "Yoga" },
        { src: image7, desc: "Skateboarding" },
        { src: image8, desc: "Dance" }
    ];

    return (
        <div className="w-full mb-20">
            <h2 className="text-2xl font-semibold mb-4">Shop By Sport</h2>
            <div className="scrollbar-none overflow-x-auto flex space-x-3 py-4 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {sports.map((sport, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col items-left min-w-[300px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                    >
                        <img 
                            src={sport.src} 
                            className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto" 
                            alt={sport.desc} 
                        />
                        <button 
                            className="absolute bottom-4 transform translate-x-8 px-4 py-2 rounded-full bg-white text-black"
                        >
                            {sport.desc}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
