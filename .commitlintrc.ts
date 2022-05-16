import type { UserConfig } from '@commitlint/types';

export default <UserConfig>{
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['release', 'package', 'scripts', 'deps', 'deps-dev', 'README', 'docs', 'typescript', 'lint'],
    ],
    'subject-case': [0],
    'body-max-line-length': [0],
  },
};
