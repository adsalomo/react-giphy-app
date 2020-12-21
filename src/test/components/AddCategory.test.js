import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Prueba AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // por cada prueba se reinicia
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe retornar el componente AddCategory', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {
            target: {
                value
            }
        });
    });

    test('No debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        // valida que la funcion no se haya llamado
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el seCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Nueva categoria';

        // Cambio de la caja de texto
        input.simulate('change', {
            target: {
                value
            }
        });

        // llamada el evento submit
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        // La funcion de haya llamadao una vez
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // Valor del input debe estar vacio
        expect(input.prop('value')).toBe('');

    });


});
