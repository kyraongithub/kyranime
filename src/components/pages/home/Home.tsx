import SkeletonGrid from '../../container/SkeletonGrid';
import useHome from './useHome';

const Home = () => {
  const {
    handleInputChange,
    handleNextPage,
    handlePrevPage,
    data,
    isLoading,
    isError,
    localQuery,
    query,
    page,
    hasKeyword,
    navigate,
  } = useHome();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-6">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          <span className="text-blue-500">kyra</span>nime
        </h1>

        {hasKeyword && (
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search anime..."
              value={localQuery}
              onChange={handleInputChange}
              className="w-full rounded-full bg-gray-800 px-5 py-3 shadow-md border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        )}
      </div>

      {!hasKeyword && (
        <div className="flex flex-col items-center justify-center mt-32">
          <h2 className="text-5xl font-bold text-white mb-10">
            Search <span className="text-blue-500">Anime</span>
          </h2>

          <input
            type="text"
            placeholder="Search anime..."
            value={localQuery}
            onChange={handleInputChange}
            className="w-full max-w-2xl rounded-full bg-gray-800 px-6 py-4 
            shadow-lg border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
          />
        </div>
      )}

      {isError && (
        <p className="text-center text-red-400 mt-10">
          Error fetching results.
        </p>
      )}

      {!isLoading && query && data?.data?.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No results found.</p>
      )}

      {isLoading && hasKeyword && <SkeletonGrid count={10} />}

      {!isLoading && (
        <div
          className={`mt-12 grid gap-8 ${
            hasKeyword
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              : 'hidden'
          }`}
        >
          {data?.data?.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 
              shadow-md hover:shadow-xl hover:border-blue-500 hover:scale-[1.02] 
              transition cursor-pointer"
              onClick={() => navigate(`/detail/${anime.mal_id}`)}
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-100">
                  {anime.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {data && data.pagination.items.total > 0 && !isLoading && (
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800
            disabled:opacity-40 hover:bg-gray-700 transition"
          >
            Prev
          </button>

          <span className="text-gray-300 font-medium">
            Page {page} / {data.pagination.last_visible_page}
          </span>

          <button
            onClick={handleNextPage}
            disabled={!data.pagination.has_next_page}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 
            disabled:opacity-40 hover:bg-gray-700 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
