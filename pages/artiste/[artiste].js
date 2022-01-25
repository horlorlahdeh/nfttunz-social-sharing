import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MetaDecorator from '../../components/MetaDecorator';
import styles from '../../styles/Home.module.css';
import { fetcher } from '../../utils/fetchExternal';
import Loader from '../../components/Loader';

export default function Artiste({ data }) {
  const router = useRouter();
  //   const { series } = router.query;
  //   useEffect(() => {
  //     console.log(series);
  //   }, [series]);
  return (
    <div className={styles.container}>
      <MetaDecorator
        description={data?.bio}
        title={data?.name}
        imageUrl={data?.avatar}
        imageAlt={data?.avatar}
      />
      <Loader />
    </div>
  );
}

export async function getServerSideProps(context) {
  const justSEO = true;
  // Fetch data from external API
  const res = await fetcher.get(
    `/users/profile/artiste?username=${context.params.artiste}`,
  );
  const data = res.data;
  if (justSEO) {
    return {
      redirect: {
        destination: `https://app.nfttunz.io/@${context.params.artiste}`,
        permanent: false,
        basePath: false,
      },
    };
  }
  // Pass data to the page via props
  return { props: { data } };
}
