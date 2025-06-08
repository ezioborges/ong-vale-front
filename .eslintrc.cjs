module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Adiciona suporte para Node.js para arquivos de configuração (como vite.config.ts)
  },
  extends: [
    'eslint:recommended', // Regras básicas recomendadas pelo ESLint
    'plugin:react/recommended', // Regras recomendadas para React
    'plugin:react-hooks/recommended', // Regras recomendadas para React Hooks
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:jsx-a11y/recommended', // Regras de acessibilidade para JSX
    'plugin:prettier/recommended', // Integração Prettier: desativa regras conflitantes e executa Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita o parsing de JSX
    },
    ecmaVersion: 'latest', // Permite o uso da sintaxe ES mais recente
    sourceType: 'module', // Permite o uso de módulos ES (import/export)
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier', // O plugin do Prettier
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Não exige 'import React from "react"' em cada arquivo (para React 17+)
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
      },
    ],
    'no-unused-vars': 'warn', // Avisa sobre variáveis não utilizadas (pode ser 'error')
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignora vars prefixadas com _
    'no-console': 'warn', // Avisa sobre o uso de console.log
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React instalada
    },
  },
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    'public/',
    '*.cjs', // Ignora o próprio arquivo de configuração do ESLint
  ],
};
