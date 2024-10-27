import cimage1 from '../assets/cimage1.jpg';
import cimage2 from '../assets/cimage2.png';
import cimage3 from '../assets/cimage3.jpg';
import cimage4 from '../assets/cimage4.jpg';
import cimage5 from '../assets/cimage5.jpg';
import cimage6 from '../assets/cimage6.jpg';

export default function MemberBenefits() {
    const benefits = [
        { src: cimage1, desc: "Shop", para: "Member Product", paratwo: "Your Exclusive Access" },
        { src: cimage2, desc: "Customize", para: "Nike By You", paratwo: "Your Customization Service" },
        { src: cimage3, desc: "Celebrate", para: "Member Rewards", paratwo: "How We Say Thank You" },
        { src: cimage4, desc: "Learn More", para: "Member Days", paratwo: "A Celebrate of You" },
        { src: cimage5, desc: "Move", para: "Sport & Wellness Apps", paratwo: "Movement Where You Are" },
        { src: cimage6, desc: "Explore", para: "SNKRS", paratwo: "Your Ultimate Sneaker Community" }
    ];

    return (
        <div className="w-full mb-20">
            <h2 className="text-2xl font-semibold mb-4">Member Benefits</h2>
            <div className="scrollbar-none overflow-x-auto flex space-x-3 py-4 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {benefits.map((benefit, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col items-left min-w-[300px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
                    >
                        <img 
                            src={benefit.src} 
                            className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto" 
                            alt={benefit.desc} 
                        />
                        <div className='absolute bottom-4 transform translate-x-2'>
                            <p className='text-white text-sm font-bold'>{benefit.para}</p>
                            <p className='text-white text-2xl font-bold'>{benefit.paratwo}</p>
                            <button className="mt-3 px-4 py-2 rounded-full bg-white text-black">
                                {benefit.desc}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
