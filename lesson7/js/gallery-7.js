// get images with data-src
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

// check if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);

imagesToLoad.forEach(img => {
    imgObserver.observe(img);
});

// if IntersectionObserver is not supported, then it loads all images
} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}