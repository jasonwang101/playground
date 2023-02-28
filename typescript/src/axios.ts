import axios from "axios";
import _ from "lodash";

_.sample([45, 234, 24231, 23213]);

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

axios
.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    console.log("WOOO!");
    res.data.forEach(printUser);
})
.catch((e) => {
    console.log("ERROR!", e);
});

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}