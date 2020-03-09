export default class StorageHandler {
  constructor(name = "todo-app-storage") {
    this._storageName = name;
    this._storage = window.localStorage;

    this.getItems = this.getItems.bind(this);
    this.setStorage = this.setStorage.bind(this);
  }

  getItems() {
    let items = JSON.parse(this._storage.getItem(this._storageName));
    if (items) {
      return items;
    } else {
      this._storage.setItem(this._storageName, "[]");
      return [];
    }
  }

  setStorage(data) {
    this._storage.setItem(this._storageName, JSON.stringify(data));
  }
}
