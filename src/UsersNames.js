import './App.css';
import './User.css'
import unknown from './images/unknown2.jpg'



function UsersNames() {
    let users = [
        { id: 1, userName: "Bret" },
        { id: 2, userName: "Antonette" },
        { id: 3, userName: "Samantha" },
        { id: 4, userName: "Karianne" },
        { id: 5, userName: "Kamren" },
        { id: 6, userName: "Leopoldo_Corkery" },
        { id: 7, userName: "Elwin.Skiles" },
        { id: 8, userName: "Maxime_Nienow" },
        { id: 9, userName: "Delphine" },
        { id: 10, userName: "Moriah.Stanton" }
    ];

    return (

        <div className="User-page">
          {
            users.map((user) => {
                return <div className="User-name" key={user.id}>
                    <img className = "User-img" src={unknown} ></img>
                    <p className="User-p">{user.userName}</p>
                </div>
            })
          }
        </div>
    )
}

export default UsersNames