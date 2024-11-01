import { body } from "express-validator";
export const loginValidation = [
    body('email', 'Неправильний логін чи пароль').isEmail(),
    body('password', 'Неправильний логін чи пароль').isLength({ min: 8 }),
];
export const registerValidation = [
    body('fullName', 'Вкажіть імя').isLength({ min: 3 }),
    body('email', 'Неправильний логін чи пароль').isEmail(),
    body('password', 'Неправильний логін чи пароль').isLength({ min: 8 }),
    body('avatarUrl').optional().isURL(),
];
export const productCreateValidation = [
    body('nameOfProduct', 'Введіть назву товару').isLength({ min: 3 }).isString(),
    body('typeOfProduct', 'Введіть тип товару').isString(),
    body('imageUrl', 'Введіть посилання на картинку товару ').isString(),
    body('price' ,'Введіть ціну'),
    body('brandOfProduct', 'Введіть бренд товару').isString(),
    body('seriesOfProduct', 'Введіть модель товару').isString(),
    body('sexOfProduct', 'Введіть для кого призначений товар').isString(),
    body('color', 'Введіть колір товару').isString(),
    body('material', 'Введіть матеріал товару').isString(),
    body('size', 'Вкажіть розміри для товару').optional(),
];