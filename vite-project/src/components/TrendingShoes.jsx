import tshoe1 from '../assets/tshoe1.jpg';
import tshoe2 from '../assets/tshoe2.jpg';
import tshoe3 from '../assets/tshoe3.jpg';
import tshoe4 from '../assets/tshow4.jpg';
import tshoe5 from '../assets/tshoe5.jpg';
import tshoe6 from '../assets/tshoe6.jpg';
import tshoe7 from '../assets/tshoe7.jpg';
import tshoe8 from '../assets/tshoe8.jpg';

const trendingShoes = [
    { src: tshoe1, desc: "Nike Zoom Vomero Roam", desc1: "Women's Winterized Shoes", prize: "MRP : ₹ 16 995.00" },
    { src: tshoe2, desc: "Nike Dunk Low Retro SE", desc1: "Men's Shoes", prize: "MRP : ₹ 10 795.00" },
    { src: tshoe3, desc: "Nike Air Max Excee", desc1: "Women's Shoes", prize: "MRP : ₹ 12 195.00" },
    { src: tshoe4, desc: "Nike Air Max Dn", desc1: "Shoes", prize: "MRP : ₹ 19 990.00" },
    { src: tshoe5, desc: "Nike Pegasus 41 Gore-Tex", desc1: "Men's Waterproof Road Running Shoes", prize: "MRP : ₹ 20 000.00" },
    { src: tshoe6, desc: "Nike Air Force 1 '07 LV8", desc1: "Men's Shoes", prize: "MRP : ₹ 10 999.00" },
    { src: tshoe7, desc: "Nike Air Max Excee", desc1: "Men's Shoes", prize: "MRP : ₹ 14 199.00" },
    { src: tshoe8, desc: "Nike Air Force 1 '07 LX", desc1: "Basketball Shoes", prize: "MRP : ₹ 11 000.00" }
];

export default function TrendingShoes() {
    return (
        <div className="w-full mb-20">
            <h2 className="text-2xl font-semibold mb-4">Trending This Week</h2>
            <div className="scrollbar-none overflow-x-auto flex space-x-3 py-4 scrollbar-thin scrollbar-thumb-gray-300 scroll-smooth">
                {trendingShoes.map((shoe, index) => (
                    <div key={index} className="flex flex-col items-left min-w-[300px]">
                        <img src={shoe.src} className="w-[300px] h-auto" />
                        <p className="mt-4 text-left font-semibold ">{shoe.desc}</p>
                        <p className="mt-2 text-left">{shoe.desc1}</p>
                        <p className="mt-2 text-left font-semibold">{shoe.prize}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}