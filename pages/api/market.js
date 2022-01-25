// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetcher } from '../../utils/fetchExternal';
export default async (req, res) => {
  try {
    const data = await fetcher.get(
      `/collectibles/gallery?username=bait002&published=true&limit=1&page=1&series=bait002_audio-album-with-love_audio-project`,
    );
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ message: 'Internal Server Error' });
  }
};
