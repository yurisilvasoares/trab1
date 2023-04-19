import { Cardapio } from '../models/Cardapio.js'

export const cardapioIndex = async (req, res) => {
    try {
        const cardapio = await Cardapio.findAll();
        res.status(200).json(cardapio)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const cardapioCreate = async (req, res) => {
    const { prato, categoria, num_calorias, preco } = req.body

    
    if (!prato || !categoria || !num_calorias || !preco) {
        res.status(400).json({ id: 0, msg: "Erro... Informe prato, categoria, num_caloria e preco." })
        return
    }

    try {
        const cardapio = await Cardapio.create({
            prato, categoria, num_calorias, preco
        });
        res.status(201).json(cardapio)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const cardapioDestroy = async (req, res) => {
    const { id } = req.params
    try {
        const cardapio = await Cardapio.destroy({
            where: { id }
        });
        res.status(200).json(cardapio)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const cardapioSearch = async (req, res) => {
    const { id } = req.params
    try {
        const cardapio = await Cardapio.findByPk(id);
        if (cardapio) {
            res.status(200).json(cardapio)
        } else {
            res.status(200).json({ id: 0, msg: "Erro... Produto não encontrado." })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export const cardapioUpdate = async (req, res) => {
    const { id } = req.params
    const { prato, categoria, num_calorias, preco } = req.body

    
    if (!prato || !categoria || !num_calorias || !preco) {
        res.status(400).json({ id: 0, msg: "Erro... Informe prato, categoria, num_caloria e preco." })
        return
    }

    try {
        const cardapio = await Cardapio.update({
            prato, categoria, num_calorias, preco
        }, {
            where: { id }
        });
        res.status(200).json(cardapio)
    } catch (error) {
        res.status(400).send(error)
    }
}

