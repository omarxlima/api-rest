import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

   async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.status(200).json(row)
    }

   async show(req, res) {
        const id = parseInt(req.params.id)
        const row = await SelecaoRepository.findById(id )
        res.status(200).json(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.status(201).json(row)
       
    }

   async update(req, res) {
        const id = parseInt(req.params.id)
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.status(200).json(row)
        
    }

    async destroy(req, res) {
        const id = parseInt(req.params.id)
        const row = await SelecaoRepository.destroy(id)
        res.status(204).json(row)
    }


}
//padrao singleton
export default new SelecaoController()