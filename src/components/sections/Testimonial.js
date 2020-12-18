import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'We value your feedback!'
  };

  const customHeader = {
    title: 'Coming Soon',
  };

  const productsHeader = {
    title: 'Products',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className={innerClasses}>
        <SectionHeader data={productsHeader} className="center-content" />
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
        <h5 className="center-content"><Link to="/products">See more</Link></h5>
      </div>
      <div className={innerClasses}>
        <SectionHeader data={customHeader} className="center-content" />
        <div className={tilesClasses}>
          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <Image
              src={require('./../../assets/images/envy_tee_grey.PNG')}
              alt="Features split 02"
              width={528}
              height={396} />
            <div>Envy Tee $40</div>
          </div>

          <div className="tiles-item reveal-from-bottom">
            <Image
              src={require('./../../assets/images/envy_ls.PNG')}
              alt="Features split 02"
              width={528}
              height={396} />
            <div>Envy Long Sleeve $45</div>
          </div>

          <div className="tiles-item reveal-from-left" data-reveal-delay="200">
            <Image
              src={require('./../../assets/images/envy_hoodie.PNG')}
              alt="Features split 02"
              width={528}
              height={396} />
            <div>Envy Hoodie $60</div>
          </div>
        </div>
      </div>
      <div className={innerClasses}>
        <div className="container">
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Fav shoes thanks @envyhype
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">@roxlaverdiere_</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — s/o to @envyhype for the smooth transaction and easy business
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">@ontherise.204</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Can't wait to see what clothing is in store!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">@paulbrylle </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;