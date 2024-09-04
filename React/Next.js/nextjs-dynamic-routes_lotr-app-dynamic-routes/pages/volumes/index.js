import { useRouter } from 'next/router';
import Link from 'next/link';
import { introduction, volumes } from '../../lib/data';

export default function Volumes() {
  const router = useRouter();

  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(volume => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>
        Random Volume
      </button>
    </>
  );
}




