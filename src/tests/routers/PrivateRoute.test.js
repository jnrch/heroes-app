import React from 'react';
const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { PrivateRoute } = require("../../routers/PrivateRoute");


describe('Testing <PrivateRoute />', () => {
  
    const props = {
        location: '/marvel'
    }

    test('should show component if it is authenticated and save in localStorage', () => {
       
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Listo!</span>}
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists()).toBe(false);

    });


    
});