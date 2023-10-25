export function Header() {
  return (
    <header>
      <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            <h1 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
              Your balance $ 0.00
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
}
