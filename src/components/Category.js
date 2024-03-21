import React from 'react';

function Category() {
    const propertyItems = [
        { icon: 'img/icon-apartment.png', title: 'Apartment', properties: '123 Properties', delay: '0.1s' },
        { icon: 'img/icon-villa.png', title: 'Villa', properties: '123 Properties', delay: '0.3s' },
        { icon: 'img/icon-house.png', title: 'Home', properties: '123 Properties', delay: '0.5s' },
        { icon: 'img/icon-housing.png', title: 'Office', properties: '123 Properties', delay: '0.7s' },
        { icon: 'img/icon-building.png', title: 'Building', properties: '123 Properties', delay: '0.1s' },
        { icon: 'img/icon-neighborhood.png', title: 'Townhouse', properties: '123 Properties', delay: '0.3s' },
        { icon: 'img/icon-condominium.png', title: 'Shop', properties: '123 Properties', delay: '0.5s' },
        { icon: 'img/icon-luxury.png', title: 'Garage', properties: '123 Properties', delay: '0.7s' }
    ];

    const renderPropertyItems = () => {
        return propertyItems.map((item, index) => (
            <div key={index} className={`col-lg-3 col-sm-6 wow fadeInUp`} data-wow-delay={item.delay}>
                <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                    <div className="rounded p-4">
                        <div className="icon mb-3">
                            <img className="img-fluid" src={item.icon} alt="Icon" />
                        </div>
                        <h6>{item.title}</h6>
                        <span>{item.properties}</span>
                    </div>
                </a>
            </div>
        ));
    };

    return (
        <><div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    {renderPropertyItems()}
                </div>
            </div>
        </div>

        </>


    );
}

export default Category;
