import * as migration_20261010_094808_initial from './20261010_094808_initial';
import * as migration_20261012_203238_blob_storage from './20261012_203238_blob_storage';
import * as migration_20261015_104122_versions from './20261015_104122_versions';
import * as migration_20261017_151437_news from './20261017_151437_news';
import * as migration_20261108_114209_translation_tabs from './20261108_114209_translation_tabs';
import * as migration_20261108_120000_translation_copy from './20261108_120000_translation_copy';
import * as migration_20261108_180000_vr_standards_names from './20261108_180000_vr_standards_names';

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
    name: '20261017_151437_news',
  },
  {
    up: migration_20261108_114209_translation_tabs.up,
    down: migration_20261108_114209_translation_tabs.down,
    name: '20261108_114209_translation_tabs',
  },
  {
    up: migration_20261108_120000_translation_copy.up,
    down: migration_20261108_120000_translation_copy.down,
    name: '20261108_120000_translation_copy',
  },
  {
    up: migration_20261108_180000_vr_standards_names.up,
    down: migration_20261108_180000_vr_standards_names.down,
    name: '20261108_180000_vr_standards_names'
  },
];
