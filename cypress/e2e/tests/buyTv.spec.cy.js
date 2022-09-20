import home from '../pages/home'
import cart from '../pages/cart'
import users from '../pages/users'

describe('Add TV to the cart', () =>{
    const email ='test@test.com';
    beforeEach(()=>{
        home.goToHomePage();
    })
    it('Search for tv and add to cart and view cart item',() =>{
        home.searchTV();
        home.selectTv();
        cart.addToCart();
        cart.proceedToCheckout();
        users.authenticateUser();
        users.selectAddress();
    });
})