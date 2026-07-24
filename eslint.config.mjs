import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Turn OFF all ESLint rules that conflict with Prettier formatting.
  // (Prettier owns formatting; ESLint owns code quality.)
  prettier,
  // Content site: allow raw quotes in JSX text. The rule exists to avoid
  // accidentally writing invalid JSX, but for prose-heavy pages it produces
  // dozens of noisy `&quot;`-style errors with zero rendering benefit.
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Tooling output
    'playwright-report/**',
    'test-results/**',
    'coverage/**',
  ]),
]);

export default eslintConfig;
