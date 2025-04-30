import { mockData } from "./mock";


export function fetchRestaurantData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve({ data: mockData })
            });
        }, 2000);
    });
}
