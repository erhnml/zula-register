<template>
  <svg
    v-if="name === 'email'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 28 20.812"
    fill="#ff9e01"
  >
    <path
      id="Forma_1"
      data-name="Forma 1"
      class="cls-1"
      d="M454.5,796.933a3.405,3.405,0,0,1-.45,1.667l-8.84-9.8,8.745-7.578a3.42,3.42,0,0,1,.545,1.841v13.867Zm-14-6.351,12.168-10.546A3.49,3.49,0,0,0,451,779.6H430a3.474,3.474,0,0,0-1.667.436Zm3.392-.638-2.816,2.442a0.882,0.882,0,0,1-1.152,0l-2.817-2.442-8.953,9.922A3.48,3.48,0,0,0,430,800.4h21a3.474,3.474,0,0,0,1.845-.534Zm-16.847-8.719a3.42,3.42,0,0,0-.545,1.841v13.867a3.4,3.4,0,0,0,.449,1.667l8.84-9.8Z"
      transform="translate(-426.5 -779.594)"
    />
  </svg>
  <svg
    v-else-if="name === 'password'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#ff9e01"
  >
    <path
      id="Forma_1"
      data-name="Forma 1"
      class="cls-1"
      d="M445.444,852a7.549,7.549,0,0,0-7.555,7.555,9.3,9.3,0,0,0,.444,2.667L429,871.555V876h4.444v-2.667h2.667v-2.667h2.666l4-4a8.365,8.365,0,0,0,2.666.445A7.556,7.556,0,1,0,445.444,852Zm2.222,8a2.667,2.667,0,1,1,2.667-2.667A2.619,2.619,0,0,1,447.666,860Z"
      transform="translate(-429 -852)"
    />
  </svg>
  <svg
    v-else-if="name === 'username'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 18.376 24.812"
    fill="#ff9e01"
  >
    <path
      id="Forma_1_copy"
      data-name="Forma 1 copy"
      class="cls-1"
      d="M440.5,714.228c2.69,0,4.871-2.715,4.871-6.064s-0.716-6.064-4.871-6.064-4.87,2.715-4.87,6.064S437.81,714.228,440.5,714.228Zm-9.2,9.26c0-.2,0-0.057,0,0h0Zm18.4,0.16c0-.056,0-0.388,0,0h0Zm-0.01-.4c-0.09-5.834-.834-7.5-6.522-8.549a3.923,3.923,0,0,1-5.334,0c-5.626,1.041-6.414,2.679-6.518,8.36a1.191,1.191,0,0,1-.014.434c0,0.1,0,.288,0,0.613,0,0,1.354,2.8,9.2,2.8s9.2-2.8,9.2-2.8v-0.453C449.7,723.681,449.694,723.616,449.688,723.243Z"
      transform="translate(-431.312 -702.094)"
    />
  </svg>
  <svg
    v-else-if="type === 'right'"
    xmlns="http://www.w3.org/2000/svg"
    width="20.38"
    height="44.812"
    viewBox="0 0 20.38 44.812"
    fill="#ff9e01"
  >
    <path
      class="cls-1"
      d="M1041.2,176.6L1020.8,199l20.4,22.4V176.6Z"
      transform="translate(-1020.81 -176.594)"
    />
  </svg>
  <svg
    v-else-if="type === 'left'"
    xmlns="http://www.w3.org/2000/svg"
    width="20.38"
    height="44.812"
    viewBox="0 0 20.38 44.812"
    fill="#ff9e01"
  >
    <path
      id="Rectangle_5_copy"
      data-name="Rectangle 5 copy"
      class="cls-1"
      d="M1427.8,176.6l20.4,22.4-20.4,22.4V176.6Z"
      transform="translate(-1427.81 -176.594)"
    />
  </svg>
</template>
