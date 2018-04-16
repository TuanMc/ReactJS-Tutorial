
import Users from '../assets/data/users';

//  A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

export class LoginService {
    // Resoure data
    users = Users;

    // Methods
    login(user) {
        const player = this.users.find(p => p.username === user.username);
        console.log(player);

        if (player && player.password === user.password) {
            // Store user data to local storage
            localStorage.setItem("user", JSON.stringify(player));
            return true;
        }
        return false
    }

    logout() {
        // Clear all stored items in local storage and navigate to login page
        localStorage.clear();
        this.props.history.push("/");
    }
}

/**
 * 
 * SECOND WAY OF CREATING A SERVICE
 */

// const LoginService = {

//     users: Users, // Resoure data

//     // Methods
//     login: (user) => {
//         const player = this.users.find(p => p.username === user.username);
//         console.log(player);

//         if (player && player.password === user.password) {
//             // Store user data to local storage
//             localStorage.setItem("user", JSON.stringify(player));
//             return true;
//         }
//         return false
//     },

//     logout: () => {
//         localStorage.clear();
//     }
// }

// export default LoginService