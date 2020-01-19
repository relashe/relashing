import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import progress from "rollup-plugin-progress";
import visualizer from "rollup-plugin-visualizer";

export default {
  input: "src/index.js",
  output: {
    file: "dist/lib.es.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    postcss({
      minimize: true,
      plugins: [],
    }),
    // reactSvg(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    progress(),
    visualizer({
      filename: "./dist/stats.html",
    }),
  ],
  external: ["react", "react-dom"],
};
