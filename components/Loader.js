import React, { Fragment } from 'react'
import loader from '../assets/images/loader.gif';
import Image from 'next/image';

const Loader = () => {
    return (
      <Fragment>
        <div className="nfttunz__loader__wrapper">
          <Image src={loader} alt="loading..." />
        </div>
      </Fragment>
    );
}

export default Loader
