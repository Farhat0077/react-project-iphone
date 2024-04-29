import React from "react";
export default function IphoneFeatures(){
    const featuresInfo=[
        {
        image:'/images/apple packgage1.jpg',
        title:'Stunning Design',
        description:'Phone 13 features a sleek and elegant design that fits perfectly in your hand.',
        alt:"Features 1"
        },
        {
            image:'/images/camera.jpeg',
            title:'Advanced Camera',
            description:'Capture stunning photos and videos with the advanced camera system of iPhone 13.',
            alt:"Features 2"
            },
            {
                image:'/images/phone.jpg',
                title:'Powerful Preformance',
                description:'Experience blazing-fast performance and seamless multitasking with iPhone 13.',
                alt:"Features 3"
                },
                {
                    image:'/images/battery.jpeg',
                    title:'Improved Battery Life',
                    description:'Enjoy longer usage times with the improved battery life of iPhone 13.',
                    alt:"Feature 4"
                    },
                    {
                        image:'/images/security.jpeg',
                        title:'Enhanced Security',
                        description:'Keep your data safe and secure with enhanced security features on iPhone 13.',
                        alt:"Features 5"
                        },
                        {
                            image:'/images/5Gconection.jpg',
                            title:'5G Connectivity',
                            description:'>Experience lightning-fast download and streaming speeds with 5G connectivity on iPhone 13.',
                            alt:"Features 6"
                            }
    ];
    return(
        <section className="features">
            {
            featuresInfo.map((feature) => (
                <div className="feature">
                <img src={feature.image} alt={feature.alt}/>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
                </div>
           ) )}
        </section>
    );
};
 



