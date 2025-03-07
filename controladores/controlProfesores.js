import db from "../postgres/db.js"

class ProfesoresControl {
  constructor(req, res){
    /* req = this.req
    res = this.res */
  }
  async get(req, res){
    try {
      const customers = await db.any('select * from categories;');
      console.log(customers);
      console.log(customers[1], "query finalizada");
      res.send({mensaje: customers})
    } catch (error) {
      console.log(error);
    }
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