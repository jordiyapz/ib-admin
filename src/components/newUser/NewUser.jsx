import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Risa" />
        </div>
        <div className="newUserItem">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Risa Budi" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="risa@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+62 823 456 78" />
        </div>
        <div className="newUserItem">
          <label>Alternative Phone</label>
          <input type="text" placeholder="+62 823 456 78" />
        </div>
        <div className="newUserItem">
          <label>Alamat</label>
          <input type="text" placeholder="Bandung, Jawa Barat" />
        </div>
        <div className="newUserItem">
          <label>Pekerjaan</label>
          <input type="text" placeholder="Ibu Rumah Tangga" />
        </div>
        <div className="newUserItem">
          <label>Status Kehamilan</label>
          <input type="text" placeholder="Sedang Hamil / Tidak Hamil" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
