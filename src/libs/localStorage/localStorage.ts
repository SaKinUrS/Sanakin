import { type LocalStorageKeyEnum } from '@libs/localStorage';

class LocalStorageServiceImpl {
  setItem(key: LocalStorageKeyEnum, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: LocalStorageKeyEnum): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: LocalStorageKeyEnum): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export const LocalStorage = new LocalStorageServiceImpl();
