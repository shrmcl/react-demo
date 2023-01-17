function Header({ setCount }) {
  return (
    <header className="px-4 py-3 flex justify-between bg-gray-900 text-white">
      <div className="font-bold">Logo</div>
      <div className="flex gap-x-4">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
          className="px-6 py-1 bg-white text-gray-900 font-bold rounded"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
          className="px-6 py-1 bg-white text-gray-900 font-bold rounded"
        >
          -
        </button>
      </div>
    </header>
  );
}

export default Header;
