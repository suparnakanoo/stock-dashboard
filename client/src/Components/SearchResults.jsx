

const SearchResults = ({ results }) => {

//   const { setStockSymbol } = useContext(StockContext);
if (!Array.isArray(results)) {
    return null; // or some fallback UI
  }
  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-inherit border-none text-neutral-50`}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-neutral-900`}
            // onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;

