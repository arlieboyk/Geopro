import { AiFillCloseSquare } from "react-icons/ai";

interface Props {
  toggleSearch: () => void;
}

function Search({ toggleSearch }: Props) {
  return (
    <div className="py-2 border-slate-500 backdrop-filter backdrop-blur-lg">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-10/12 text-gray-800 font-semibold focus:text-black rounded-sm border-none  bg-transparent focus:ring-0  focus:outline-0"
        />
        <AiFillCloseSquare
          className="w-6 h-6 cursor-pointer hover:scale-105"
          onClick={toggleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
