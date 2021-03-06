// 프로젝트의 변동이 있을 때, 해당 파일에서 lint-staged를 수정하게 됩니다.
module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'apps/nextjs/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p apps/nextjs/tsconfig.json --noEmit',
  ],
  'apps/web3/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p apps/web3/tsconfig.json --noEmit',
  ],
  'packages/components/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/components/tsconfig.json --noEmit',
  ],
  'packages/storybook/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/storybook/tsconfig.json --noEmit',
  ],
  'packages/styles/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/styles/tsconfig.json --noEmit',
  ],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};
