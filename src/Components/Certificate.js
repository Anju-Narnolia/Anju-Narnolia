import Slider from "react-slick";
import img1 from "./img/img1.avif";
import img2 from "./img/img2.avif";

function Certificate() {
    const images = [img1, img2, img1];

    const settings = {
        customPaging: function (i) {
            return (
                <div className="w-12 h-12 cursor-pointer border border-gray-300 rounded overflow-hidden">
                    <img src={images[i]} alt={`Thumbnail ${i + 1}`} className=" w-12 h-12 object-cover" />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb flex justify-center space-x-2 mt-4",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="max-w-lg mx-auto">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Certificate;
