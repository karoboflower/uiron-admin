#!/usr/bin/env node
import { execSync } from 'node:child_process';
import process from 'node:process';
import { join } from 'node:path';

const args = process.argv.slice(3);
const command = process.argv[2];

// 获取依赖所在路径
const binPath = join(__dirname, '../node_modules/.bin');

try {
  switch (command) {
    case 'eslint':
      execSync(`${join(binPath, 'eslint')} ${args.join(' ')}`, { stdio: 'inherit' });
      break;
    case 'prettier':
      execSync(`${join(binPath, 'prettier')} ${args.join(' ')}`, { stdio: 'inherit' });
      break;
    case 'commitlint':
      execSync(`${join(binPath, 'commitlint')} ${args.join(' ')}`, { stdio: 'inherit' });
      break;
    default:
      console.log('Unknown command');
      process.exit(1);
  }
} catch (error) {
  console.error('Command execution failed:', error);
  process.exit(1);
}