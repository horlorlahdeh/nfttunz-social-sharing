import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MetaDecorator from '../components/MetaDecorator';
import styles from '../styles/Home.module.css';
import { fetcher } from '../utils/fetchExternal';
import Loader from '../components/Loader';

export default function Home({ data }) {
  const router = useRouter();
//   const { series } = router.query;
//   useEffect(() => {
//     console.log(series);
//   }, [series]);
  return (
    <div className={styles.container}>
      <MetaDecorator
        description={data?.description}
        title={data?.name}
        imageUrl={data?.thumbnail}
        imageAlt={data?.thumbnail}
      />
      <Loader />
    </div>
  );
}

export async function getServerSideProps(context) {
  const justSEO = false;
  // Fetch data from external API
  const res = await fetcher.get(
    `/collectibles/info?series=${context.params.series}`,
  );
  const data = res.data;
  if (justSEO) {
    return {
      redirect: {
        destination: 'https://app.nfttunz.io/',
        permanent: false,
        basePath: false,
      },
    };
  }
  // Pass data to the page via props
  return { props: { data } };
}