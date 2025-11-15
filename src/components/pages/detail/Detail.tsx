import type {
  AnimeGenre,
  AnimeProducer,
  AnimeStudio,
} from '../../../interfaces/anime.interface';
import DetailSkeleton from '../../container/DetailSkeleton';
import useDetail from './useDetail';

const DetailPage = () => {
  const { isLoading, isError, anime, navigate } = useDetail();

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>⚠️</p>
        <h2 className="text-2xl font-bold">Failed to load details</h2>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>⚠️</p>
        <h2 className="text-2xl font-bold">Anime Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-300 hover:text-white transition mb-4"
        >
          ← Back
        </button>
      </div>

      <div className="relative h-64 md:h-96 lg:h-128 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0 w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-112 shadow-xl rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-900">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {anime.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
              {anime.score && (
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  ⭐ <span className="ml-1">{anime.score}</span>
                </div>
              )}

              {anime.year && (
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  📅 <span className="ml-1">{anime.year}</span>
                </div>
              )}

              {anime.rating && (
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  🔞 <span className="ml-1">{anime.rating}</span>
                </div>
              )}

              {anime.type && (
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  🎬 <span className="ml-1">{anime.type}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {anime.genres?.map((genre: AnimeGenre) => (
                <span
                  key={genre.mal_id}
                  className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
                Synopsis
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {anime.synopsis || 'No synopsis available.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Information
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span>{anime.status || 'Unknown'}</span>
              </li>

              <li className="flex justify-between">
                <span className="text-gray-400">Episodes</span>
                <span>{anime.episodes || '?'}</span>
              </li>

              <li className="flex justify-between">
                <span className="text-gray-400">Duration</span>
                <span>{anime.duration || '?'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Studios
            </h3>
            <ul className="space-y-3">
              {anime.studios?.length ? (
                anime.studios.map((studio: AnimeStudio) => (
                  <li key={studio.mal_id}>{studio.name}</li>
                ))
              ) : (
                <li className="text-gray-400">No studio data.</li>
              )}
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Producers
            </h3>
            <ul className="space-y-3">
              {anime.producers?.length ? (
                anime.producers.map((prod: AnimeProducer) => (
                  <li key={prod.mal_id}>{prod.name}</li>
                ))
              ) : (
                <li className="text-gray-400">No producer data.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
