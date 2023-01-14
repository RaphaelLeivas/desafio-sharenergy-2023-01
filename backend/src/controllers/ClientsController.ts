import { Response, Request } from 'express';
import { ClientModel } from '../models';
import ApiResponse from '../helpers/ApiResponse';

const create = (req: Request, res: Response) => {
  try {
    const { name, cpf, email, address, phone } = req.body;

    const client = new ClientModel({
      name,
      cpf,
      email,
      address,
      phone,
    });

    client.save((err) => {
      if (err) {
        return ApiResponse.internalError(res, 'Erro ao salvar o cliente', err);
      }
      const clientData = {
        name: client.name,
        cpf: client.cpf,
        address: client.address,
        phone: client.phone,
        email: client.email,
      };
      return ApiResponse.success(res, 'Cliente adicionado com sucesso.', clientData);
    });
  } catch (err) {
    return ApiResponse.internalError(res, 'Falha ao criar cliente', err);
  }
};

export default {
  create,
};
