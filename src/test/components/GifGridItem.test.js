import React from 'react'
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import '@testing-library/jest-dom';

describe('Prueba GifGridItem', () => {

    const url = 'http://www.adsalomo.com';
    const title = 'Hola mundo';

    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />
    );

    test('Debe de mostrar la foto del componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe contener el titulo en el <p></p>', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('La imagen debe tener la URL y el titulo alt', () => {
        const img = wrapper.find('img');
        //console.log(img.props()); // propiedades de la img, componentes de html
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la clase de estilos: animate__fadeIn', () => {
        const div = wrapper.find('div');

        //console.log(div.prop('className'));

        expect(div.prop('className')).toContain('animate__fadeIn');
    });



});
