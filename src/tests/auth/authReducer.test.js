const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");


describe('Testing authReducer', () => {

    test('should return default state', () => {

        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
        
    });

    test('should authenticate and put the name of the user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Jonathan'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ 
            logged: true,
            name: 'Jonathan' 
        });
        
    });

    test('should delete username and logged should be false', () => {

        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Jonathan' }, action);
        expect( state ).toEqual({ logged: false });
        
    });
        
});
