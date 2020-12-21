import { getGifs } from "../../helpers/getGifs";

describe('Prueba getGifs', () => {

    test('Debe de traer 10 elementos', async () => {

        const category = 'One puch';

        const gifs = await getGifs(category);

        expect(gifs.length).toBe(10);
    });


    test('Debe de traer 0 elementos', async () => {

        const category = '';

        const gifs = await getGifs(category);

        expect(gifs.length).toBe(0);
    });

});
