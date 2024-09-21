
export default function SingUp(){
    return(
        <>
            <form className="container">
        <legend>Crea tu cuenta</legend>
            <div className="mb-3">
            <label for="exampleInputName" className="form-label">
                Nombre:
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleInputName"
            ></input>
            
            </div>
            <div className="mb-3">
            <label for="exampleInputLastName" className="form-label">
                Apellido:
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleInputLastName"
            ></input>
            
            </div>
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
            <div class="mb-3">
            <label for="disabledSelect" class="form-label">
                Selecciona una opción:
            </label>
            <select id="disabledSelect" class="form-select">
                <option>User</option>
                <option>Admin</option>
            </select>
            <div id="emailhelp" className="form-text">
                Selecciona el Rol que quieras ejercer, si eres recruiter recomiendo usar 'Admin'.
            </div>
            </div>
      </form>
        </>
    )
}