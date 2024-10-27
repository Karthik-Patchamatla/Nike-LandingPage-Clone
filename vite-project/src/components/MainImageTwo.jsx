import Mainimagetwo from '../assets/mainimage2.jpg';

export default function MainImageTwo() {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-7">Don't Miss</h2>
            <img src={Mainimagetwo} className=" h-[200px] md:h-[500px] lg:h-[800px] w-full" alt="Main" />
            <div className="text-left sm:text-center mt-4 mb-20">
                <p className="font-semibold">Tatum 3</p>
                <h2 className="text-4xl font-bold lg:text-7xl lg:font-extrabold">Zero Pressure</h2>
                <p className="text-lg">
                    Greatness happens when you’re focused on your flight path. 
                    This newest colorway ‘Zero Days Off’ speaks to Jayson’s love of the grind and is here to help you elevate your game.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-full mt-6">Shop</button>
            </div>
        </div>
    );
}