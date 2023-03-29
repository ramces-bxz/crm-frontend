<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Address</th>
          <th scope="col" class="px-6 py-3">Contact Number</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Ramces Basubas
          </th>
          <td class="px-6 py-4">Individual</td>
          <td class="px-6 py-4">Camolinas, Poblacion, Cordova, Cebu</td>
          <td class="px-6 py-4">09324304879</td>
          <td class="px-6 py-4">
            <base-button mode="outline" bgColor="blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </base-button>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Quirante
          </th>
          <td class="px-6 py-4">Company</td>
          <td class="px-6 py-4">Naga, Cebu</td>
          <td class="px-6 py-4">254-7895</td>
          <td class="px-6 py-4"></td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Ada Margarette Basubas
          </th>
          <td class="px-6 py-4">Individual</td>
          <td class="px-6 py-4">Poblacion, Cordova, Cebu</td>
          <td class="px-6 py-4">0932430445</td>
          <td class="px-6 py-4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
