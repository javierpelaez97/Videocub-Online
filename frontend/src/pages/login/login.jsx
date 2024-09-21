export default function Login() {
  return (
    <>
    
      <form className="container">
        <legend>Crea tu cuenta</legend>
            
            <div className="mb-3">
            <label for="exampleInputemail1" className="form-label">
                Correo:
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleinputEmail1"
            ></input>
            <div id="emailhelp" className="form-text">
                Tu correo no va a ser compartido con nadie.
            </div>
            </div>
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
                Contaseña
            </label>
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
            ></input>
            </div>
            
      </form>
    </>
  );
}
