import { Fragment } from 'react/cjs/react.production.min';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossOrigin='anonymous'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <script
        src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
        integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
        crossOrigin='anonymous'
      ></script>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
        crossOrigin='anonymous'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.min.js'
        integrity='sha512-vefaKmSAX3XohXhN50vLfnK12TPIO+4uRpHjXVkX726CqbicEiAQGRzsMTE+EpLkBk4noUcUYu6AQ5af2vfRLA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/brands.min.js'
        integrity='sha512-vefaKmSAX3XohXhN50vLfnK12TPIO+4uRpHjXVkX726CqbicEiAQGRzsMTE+EpLkBk4noUcUYu6AQ5af2vfRLA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      ></script>
    </Fragment>
  );
}

export default MyApp;
