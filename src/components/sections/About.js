import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Footer from '../../components/layout/Footer';

const About = ({

}) => {


  return (
    <section>
      <div className="container">
        <h1>About Us</h1>
        <div>EnvyHype LLC</div>

        <h3>Address</h3>
        <div>1309 Coffeen Ave Ste 1200, Sheridan, WY</div>


        <h3>Email</h3>
        <div>contact@envyhype.net</div>
      </div>
    </section>
  );
}

export default About;