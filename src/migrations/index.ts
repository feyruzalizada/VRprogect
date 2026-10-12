import * as migration_20261010_094808_initial from './20261010_094808_initial';
import * as migration_20261012_203238_blob_storage from './20261012_203238_blob_storage';

export const migrations = [
  {
    up: migration_20261010_094808_initial.up,
    down: migration_20261010_094808_initial.down,
    name: '20261010_094808_initial',
  },
  {
    up: migration_20261012_203238_blob_storage.up,
    down: migration_20261012_203238_blob_storage.down,
    name: '20261012_203238_blob_storage'
  },
];
