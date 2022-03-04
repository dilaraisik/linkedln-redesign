import React from "react";
import Slider from "react-slick";

import slider1 from "../../assets/images/Slider-1.png";
import slider2 from "../../assets/images/Slider-2.png";
import slider3 from "../../assets/images/Slider-3.png";

function ProjectsCard() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 rounded w-full">
            <p className="text-lg font-bold">Projects</p>
            <Slider
                dots={false}
                slidesToShow={3}
                slidesToScroll={3}
                autoplay={true}
                autoplaySpeed={3000}
            >
                <div className="mt-6">
                    <img src={slider1} height={160} width={250} alt="zara"/>
                    <p className="text-xs font-bold text-textBlack mt-3">Zara redesign concept</p>
                    <p className="text-xs text-textBlack mt-1">UX/UI design, 15.07.2019</p>
                </div>
                <div className="mt-6">
                    <img src={slider2} height={160} width={250} alt="zara"/>
                    <p className="text-xs font-bold text-textBlack mt-3">SCTHON event brand identity</p>
                    <p className="text-xs text-textBlack mt-1">Graphic design, 03.31.2019</p>
                </div>
                <div className="mt-6">
                    <img src={slider3} height={160} width={250} alt="zara"/>
                    <p className="text-xs font-bold text-textBlack mt-3">Drozd. Brand identity. 2016</p>
                    <p className="text-xs text-textBlack mt-1">Graphic design, 03.04.2016</p>
                </div>
            </Slider>
            <button className="text-blue uppercase text-xs mt-3">
                show all (12)
            </button>
        </div>
    );
}

export default ProjectsCard;
