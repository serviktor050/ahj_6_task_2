import LoadingImage from './classes/LoadingImage.js';

const loadImg = document.getElementById('loading-images');
const selectFileButton = document.getElementById('click-to-select');
const selectFileElement = document.getElementById('dnd-file');

const loadingImage = new LoadingImage(loadImg);

function load(images) {
  for (const image of images) {
    const url = URL.createObjectURL(image);
    loadingImage.addImg('name', url);

    selectFileButton.addEventListener('load', () => {
      URL.revokeObjectURL(url);
    });
  }
}

selectFileElement.addEventListener('click', () => {
  selectFileButton.value = null;
  selectFileButton.dispatchEvent(new MouseEvent('click'));
});

selectFileElement.addEventListener('dragover', (event) => {
  event.preventDefault();
});

selectFileElement.addEventListener('drop', (event) => {
  event.preventDefault();
  const images = Array.from(event.dataTransfer.files);
  load(images);
});

selectFileButton.addEventListener('input', (event) => {
  const images = Array.from(event.currentTarget.files);
  load(images);
});

loadImg.addEventListener('click', (event) => {
  if (event.target.className === 'close') {
    const imageDiv = event.target.closest('.item-image-div');
    loadImg.removeChild(imageDiv);
  }
});
