import { Response, Request } from 'express';
import { ClientModel } from '../models';
import ApiResponse from '../helpers/ApiResponse';

const create = async (req: Request, res: Response) => {
  try {
    const { name, cpf, email, address, phone } = req.body;

    const client = new ClientModel({
      name,
      cpf,
      email,
      address,
      phone,
    });

    await client.save();

    const clientData = {
      name: client.name,
      cpf: client.cpf,
      address: client.address,
      phone: client.phone,
      email: client.email,
    };
    return ApiResponse.success(res, 'Cliente adicionado com sucesso', clientData);
  } catch (err) {
    return ApiResponse.internalError(res, 'Falha ao criar cliente: Exception catched', err);
  }
};

const list = async (req: Request, res: Response) => {
  try {
    const filter = { active: true };
    const fields = {};
    const clients = await ClientModel.find(filter, fields);

    return ApiResponse.success(res, 'Lista de clientes retornada com sucesso', clients);
  } catch (err) {
    return ApiResponse.internalError(
      res,
      'Falha ao buscar lista de clientes: Exception catched',
      err
    );
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const fields = {};
    const clients = await ClientModel.findOne(filter, fields);

    return ApiResponse.success(res, 'Cliente retornado com sucesso', clients);
  } catch (err) {
    return ApiResponse.internalError(res, 'Falha ao buscar cliente: Exception catched', err);
  }
};

export default {
  create,
  list,
  getById,
};
