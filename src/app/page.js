export default function Home() {
    return (
        <>
            <h1>Login Page</h1>
            <form method="post" action="/submit">
                <label>Username</label>
                <input type="text"
                    placeholder="Enter Username"
                    name="username" required />
                <br />
                <label>Password</label>
                <input type="password"
                    placeholder="Enter Password"
                    name="password" required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}