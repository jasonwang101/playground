import axios from "axios";
import _ from "lodash";
_.sample([45, 234, 24231, 23213]);
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("WOOO!");
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
