export default class LoadingImage {
  constructor(loadImg) {
    this.loadImg = loadImg;
  }

  addImg(name, url) {
    const addImageElement = document.createElement('img');
    addImageElement.src = url;

    addImageElement.addEventListener('load', () => {
      addImageElement.className = 'item-image';
      addImageElement.alt = name;

      const addImageDiv = document.createElement('div');
      addImageDiv.className = 'item-image-div';
      addImageDiv.innerHTML = `
            <div class="close">✖<div>
            `;
      addImageDiv.append(addImageElement);
      this.loadImg.append(addImageDiv);
    });
  }
}
