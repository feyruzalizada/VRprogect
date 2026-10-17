import * as migration_20261010_094808_initial from './20261010_094808_initial';
import * as migration_20261012_203238_blob_storage from './20261012_203238_blob_storage';
import * as migration_20261015_104122_versions from './20261015_104122_versions';
import * as migration_20261017_151437_news from './20261017_151437_news';

export const migrations = [
  {
    up: migration_20261010_094808_initial.up,
    down: migration_20261010_094808_initial.down,
    name: '20261010_094808_initial',
  },
  {
    up: migration_20261012_203238_blob_storage.up,
    down: migration_20261012_203238_blob_storage.down,
    name: '20261012_203238_blob_storage',
  },
  {
    up: migration_20261015_104122_versions.up,
    down: migration_20261015_104122_versions.down,
    name: '20261015_104122_versions',
  },
  {
    up: migration_20261017_151437_news.up,
    down: migration_20261017_151437_news.down,
    name: '20261017_151437_news'
  },
];
