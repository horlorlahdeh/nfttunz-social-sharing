import { useEffect } from 'react';
import {useRouter} from 'next/router'
import MetaDecorator from '../components/MetaDecorator';
import styles from '../styles/Home.module.css';
import { fetcher } from '../utils/fetchExternal';
import Loader from '../components/Loader';

export default function Home({ data }) {
  const router = useRouter();
  // const {  series } = router.query.params;
  useEffect(() => {
    console.log(router);
  }, [])
  return (
    <div className={styles.container}>
      <MetaDecorator
        description='Create FUSIC: Collectible, Scarce, Tokenized Music, NFT Music Platform / webdite. FUSIC is a decentralized music platform that allows users to create, sell, and buy music.'
        title='NFTTunz'
        imageUrl='https://app.nfttunz.io/static/media/logo_color.1da7f11b.png'
        imageAlt='NFTTunz Music Platform'
      />
      <Loader />
    </div>
  );
}

export async function getServerSideProps() {
  const justSEO = true;
  // Fetch data from external API
    return {
      redirect: {
        destination: `https://app.nfttunz.io/market`,
        permanent: false,
        basePath: false,
      },
    };
}
