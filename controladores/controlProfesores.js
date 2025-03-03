class ProfesoresControl {
  constructor(req, res){
    /* req = this.req
    res = this.res */
  }
  get(req, res){
    res.send({mensaje: `get profesores`})
  }
  post(req, res){
    res.send({mensaje: `post profesores`})
  }
  getOne(req, res){
    const id = req.params.id
    res.send({mensaje: `get profesore with id=${id}`})
  }
  put(req, res){
    const id = req.params.id
    res.send({mensaje: `update profesores with id=${id}`})
  }
  delete(req, res){
    const id = req.params.id
    res.send({mensaje: `delete profesores with id=${id}`})
  }
}

export default new ProfesoresControl();