const Register = () => {
    import { useState } from "react"

    const handleSubmit = () => {
        try {
            fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
                body: "ダミーデータ"
            })
        } catch (error) {

        }
    }
    return (
        <div>
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="名前" required></input>
                <input type="text" name="email" placeholder="メールアドレス" required></input>
                <input type="text" name="password" placeholder="パスワード" required></input>
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register