import React, { Fragment } from 'react'

const Footer = () => {
    return (
      <Fragment>
        {/* <hr className='mt-5' /> */}
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='footer__wrapper text-center'>
                <div className='footer__social__icons'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__social__links'
                    href='https://www.instagram.com/nfttunz'
                  >
                    <i className='fab fa-instagram' /> <span>Instagram</span>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__social__links'
                    href='https://twitter.com/nft_tunz'
                  >
                    <i className='fab fa-twitter' /> <span>Twitter</span>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__social__links'
                    href='https://discord.gg/AyAdZrDF'
                  >
                    <i className='fab fa-discord' /> <span>Discord</span>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='footer__social__links'
                    href='https://peakd.com/@nfttunz'
                  >
                    <i className='fab fa-soundcloud' /> <span>Peakd</span>
                  </a>
                </div>
                <p>© Hive Engine, 2021.</p>
                <small className='mt-2'>Powered by Hive</small>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Footer
