import { listOfRestaurantMock } from "./mock";
import { restaurantMenusMock } from "./mock";


export function fetchRestaurantList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve({ data: listOfRestaurantMock })
            });
        }, 1000);
    });
}

export function fetchRestaurantMenu(restaurantId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const menu = restaurantMenusMock[restaurantId];
            resolve({
                json: () => Promise.resolve({ data: menu || [] })
            });
        }, 1000);
    });
}