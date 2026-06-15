import rootConfig from '../../eslint.config.js'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  ...rootConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
