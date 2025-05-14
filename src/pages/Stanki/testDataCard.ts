import im1 from '../../assets/img.png';
import im2 from '../../assets/img_1.png';
import im3 from '../../assets/d2a14c5a78f4db6efe773dd622a273a4.jpg';
import im4 from '../../assets/lazer.jpg';

const images = [im1, im2, im3, im4];

// Функция для случайного выбора изображения
const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

// Функция для случайного выбора цены
const getRandomPrice = () => {
    const prices = ['1200$', '3200$', '500$', '250$', '25M$', '100K$', '75$', '999$'];
    return prices[Math.floor(Math.random() * prices.length)];
};

// Генерация списка товаров
const products = Array.from({ length: 15 }, () => ({
    price: getRandomPrice(),
    img: getRandomImage(),
}));

export default products;
