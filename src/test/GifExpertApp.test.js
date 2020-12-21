import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Prueba componente GifExpertApp', () => {

    test('Debe tomar la fotografia del componente GifExpertApp', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball', 'Naruto']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        console.log(wrapper.find('GifGrid').length);
    });

});
