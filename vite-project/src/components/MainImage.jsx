import Mainimage from '../assets/mainimage.jpg';

export default function MainImage() {
    return (
        <div className="mt-8">
            <img src={Mainimage} className="h-[650px] w-full" alt="Main" />
        </div>
    );
}
