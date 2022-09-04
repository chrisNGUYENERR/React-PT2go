import React from 'react';
import { useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../assets/PT1.jpg';
import image2 from '../assets/PT2.jpg';
import image3 from '../assets/PT3.jpg';
import image4 from '../assets/PT4.jpg';


function LandingPage(props) {

    
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/login');
    }


    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='container pt-10'>
                <AliceCarousel autoPlay infinite autoPlayInterval={3000} autoPlayStrategy="none" disableButtonsControls animationType="fadeout">
                    <img src={image1} className='sliderimg' alt='' />
                    <img src={image2} className='sliderimg' alt='' />
                    <img src={image3} className='sliderimg' alt='' />
                    <img src={image4} className='sliderimg' alt='' />
                </AliceCarousel>
            </div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8" >
                    <button 
                        type="submit"
                        className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={handleClick}>
                        Enter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;