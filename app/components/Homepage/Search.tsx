import { AiFillCloseSquare } from "react-icons/ai";

interface Props {
  toggleSearch: () => void;
}

function Search({ toggleSearch }: Props) {
  return (
    <div className="border-slate-500 py-2">
      <div className="mx-auto flex items-center justify-center">
        <input
          type="text"
          placeholder="Search services..."
          className="w-10/12 rounded-sm border-none bg-transparent font-semibold text-gray-700  focus:text-gray-200 focus:outline-0  focus:ring-0"
        />
        <AiFillCloseSquare
          className="h-6 w-6 cursor-pointer text-gray-600 hover:scale-105"
          onClick={toggleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
