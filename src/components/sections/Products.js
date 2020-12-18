import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const Products = ({

}) => {


    const innerClasses = classNames(
        'testimonial-inner section-inner',
    );

    const tilesClasses = classNames(
        'tiles-wrap',
    );

    const productsHeader = {
        title: 'Products',
    };



    return (
        <section>
            <div className="container">
                <h1 style={{ marginTop: 100 }}>Products</h1>
                <div className={innerClasses}>
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/brazil.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Nike Dunk Brazil $400</div>
                        </div>
                        <div className="tiles-item reveal-from-bottom">
                            <Image
                                src={require('./../../assets/images/blazer.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Nike Blazer Cream White $160</div>

                        </div>
                        <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/350 bred.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Yeezy 350 Bred $400</div>

                        </div>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/500 black.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Yeezy 500 Black $350</div>
                        </div>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/mocha.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Air Jordan 1 Mocha $500</div>
                        </div>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <Image
                                src={require('./../../assets/images/React.jpg')}
                                alt="Features split 02"
                                width={528}
                                height={396} />
                            <div>Nike React Element 87 Black $120</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;