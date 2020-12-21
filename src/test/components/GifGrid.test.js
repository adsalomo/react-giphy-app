import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {

    const category = 'One Punch';

    test('Foto del componenten inicial', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Simular data de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/img.jpg',
                title: 'Hola mundo'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        //expect(wrapper).toMatchSnapshot();
        // cuando no esta cargando, el <p></p> no debe existir
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });

});
