export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  buildOptions: {
    out: 'dist'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
  ],
};
