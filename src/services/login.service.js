

//  A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

export class LoginService {
    // Resoure data
    users = [
        { username: "test1", password: "123", name: "Ben Blocker" },
        { username: "test2", password: "123", name: "Dave Defender" },
        { username: "test3", password: "123", name: "Sam Sweeper" },
        { username: "test4", password: "123", name: "Matt Midfielder" },
        { username: "test5", password: "123", name: "William Winger" },
        { username: "test6", password: "123", name: "Fillipe Forward" }
    ];

    // Methods
    login(user) {
        console.log(user);
        console.log(this.users)
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

    addNewUser(user) {
        if (!user) return false;
        if (user.name && user.password && user.username) {
            this.users.push(user);
            console.log(this.users)
            return true;
        }
        return false;
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