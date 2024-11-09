import MainImageSmall from '../assets/smallimage.jpg';
import MainImageLarge from '../assets/largeimage.jpg';

export default function MainImage() {
    return (
        <div className="mt-8">
            <img
                src={MainImageLarge}
                className="h-[650px] w-full sm:hidden"
                alt="Main for small screens"
            />
            <img
                src={MainImageSmall}
                className="hidden sm:block h-[650px] w-full"
                alt="Main for larger screens"
            />
        </div>
    );
}
