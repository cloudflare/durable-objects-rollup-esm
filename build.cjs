const esbuild = require('esbuild')
const fs = require('fs')

const entryPoints = fs.readdirSync('src')
  .filter(function (filename) {
    return filename.endsWith('.ts') && !filename.endsWith('.d.ts')
  })
  .map(function (filename) {
    return 'src/' + filename
  })

esbuild.build({
  entryPoints,
  outbase: 'src',
  outdir: 'dist',
  format: 'esm',
  outExtension: {
    '.js': '.mjs'
  },
  // https://github.com/evanw/esbuild/issues/622#issuecomment-769462611
  bundle: true,
  plugins: [{
    name: 'ensure-mjs',
    setup(build) {
      build.onResolve({ filter: /.*/ }, function (args) {
        const { importer, path } = args
        if (importer) {
          return { path: path + '.mjs', external: true }
        }
      })
    }
  }]
}).catch(()=> process.exit(1)) 
