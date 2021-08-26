export default {
  mount: {
    public: '/',
    src: '/build',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
  ],
};
