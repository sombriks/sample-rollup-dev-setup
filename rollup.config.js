import serve from "rollup-plugin-serve"
import copy from "rollup-plugin-copy"
import livereload from 'rollup-plugin-livereload'

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js"
  },
  watch: true,
  plugins: [
    serve({
      contentBase: "dist"
    }),
    copy({
      targets: [
        { src: "public/*", dest: "dist" }
      ]
    }),
    livereload()
  ]
}