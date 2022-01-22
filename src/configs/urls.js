const baseUrl = 'https://loremflickr.com/320/240';

export default baseUrl;

export const urls = {
    paris: `${baseUrl}/paris`,
    london: `${baseUrl}/london`,
    berlin: `${baseUrl}/berlin`,
    rome: `${baseUrl}/rome`,
    barcelona: `${baseUrl}/barcelona`,
    keyword: (keyword) => `${baseUrl}/${keyword}`
}
