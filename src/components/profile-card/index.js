import React from 'react';
import HeaderPhoto from '../../assets/images/header-bg.png';
import Ellipse from '../../assets/images/Ellipse.png';
import PremiumLogo from '../../assets/logo/linkedln-premium.png';
import LocationIcon from '../../assets/icons/location-icon.png';

function ProfileCard() {
    return (

        <div className="bg-white border-white border-solid border-2 container-md w-full rounded relative mt-10">
            <div className="w-full min-h-64 h-44">
                <img src={HeaderPhoto}/>
            </div>
            <div className="bg-white w-full h-44 flex flex-row">
                <div className="w-44 w-52 bg-white ">
                </div>
                <div className="ml-14 mr-11 mt-6">
                    <div className="flex items-center">
                        <span className="font-bold text-lg text-textBlack">Dmitry Kargaev</span>
                        <img className="w-4 h-4 ml-2" src={PremiumLogo}/>
                        <div className="flex items-center justify-end ml-auto">
                            <img className="w-3 h-3 mr-2" src={LocationIcon}/>
                            <span className="text-textBlack text-sm">Saint Petersburg, Russian Federation</span>
                        </div>
                    </div>
                    <p className="text-sm text-textBlack mt-4">Freelance UX/UI designer, 80+ projects in web design,
                        mobile apps (iOS & android) and creative projects. Open to offers.</p>
                    <button
                        className="w-44 h-8 mt-4 bg-blue text-white uppercase rounded justify-center text-xs inline-flex items-center">
                        <span>CONTACT INFO</span>
                    </button>
                    <button
                        className="w-44 h-8 ml-4 mt-4 bg-white text-blue uppercase border-solid border-blue border-2 rounded justify-center text-xs inline-flex items-center">
                        <span>1,043 connections</span>
                    </button>
                </div>
            </div>
            <img src={Ellipse} className="rounded-full h-52 w-52 absolute left-0 bottom-0 "/>
        </div>
    );
}

export default ProfileCard;
