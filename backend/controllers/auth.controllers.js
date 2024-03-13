export const signup = async (req, res) => {
    /* res.send('Signup user'); */
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
    } catch (error) {

    }
};

export const login = (req, res) => {
    res.send('Login user');
};
export const logout = (req, res) => {
    res.send('Logout user');
};
