import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div
        className="mb-4 rounded-lg bg-blue-100 p-4 text-sm text-blue-700 dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
      <div
        className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        <span className="font-medium">Danger alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span className="font-medium">Success alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="mb-4 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
        role="alert"
      >
        <span className="font-medium">Warning alert!</span> Change a few things
        up and try submitting again.
      </div>
      <div
        className="mb-4 rounded-lg bg-gray-100 p-4 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        role="alert"
      >
        <span className="font-medium">Dark alert!</span> Change a few things up
        and try submitting again.
      </div>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Alternative
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Dark
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Light
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Red
      </button>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
      >
        Yellow
      </button>
      <button
        type="button"
        className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Purple
      </button>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
        >
          Profile
        </button>
        <button
          type="button"
          className="border-t border-b border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
        >
          Settings
        </button>
        <button
          type="button"
          className="rounded-r-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
        >
          Messages
        </button>
      </div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:ml-2"
              >
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-400 dark:text-gray-500 md:ml-2">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required=""
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required=""
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            required=""
          />
        </div>
        <div className="ml-3 text-sm">
          <label className="font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="active inline-block rounded-t-lg bg-gray-100 py-4 px-4 text-center text-sm font-medium text-blue-600 dark:bg-gray-800 dark:text-blue-500"
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg py-4 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg py-4 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Settings
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg py-4 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Contacts
          </a>
        </li>
        <li>
          <a className="inline-block cursor-not-allowed rounded-t-lg py-4 px-4 text-center text-sm font-medium text-gray-400 dark:text-gray-500">
            Disabled
          </a>
        </li>
      </ul>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Color
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Sliver
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Laptop
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $2999
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      Apple Imac 27"
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      White
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Desktop Pc
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $1999
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr className="bg-white dark:bg-gray-800">
                    <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                      Apple Magic Mouse 2
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      White
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Accessories
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $99
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
