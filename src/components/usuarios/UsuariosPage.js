import React from 'react'
import '../components.css';

const UsuariosPage = () => {

    

    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">Usuarios</h5>
                                <button
                                    className="btn btn-primary mr-3"
                                >
                                    Crear Usuario
                                </button>
                            </div>
                            <div className="card-body">
                                {/* <Table /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UsuariosPage
