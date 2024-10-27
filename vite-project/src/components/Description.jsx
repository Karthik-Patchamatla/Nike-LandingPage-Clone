export default function Description({ title, subtitle, description }) {
    return (
        <div className="text-left sm:text-center mt-4 mb-20">
            <p className="font-semibold">{title}</p>
            <h2 className="text-4xl font-bold lg:text-7xl lg:font-extrabold">{subtitle}</h2>
            <p className="text-lg">{description}</p>
            <button className="bg-black text-white px-4 py-2 rounded-full mt-6">Shop</button>
        </div>
    );
}
