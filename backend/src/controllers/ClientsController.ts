import { Response, Request } from 'express';
import { ClientModel } from '../models';
import { ApiResponse, Validators } from '../helpers';

const create = async (req: Request, res: Response) => {
  try {
    const { name, cpf, email, address, phone } = req.body;
    const clientToCreate = { name, cpf, email, address, phone }
    Validators.validateClient(clientToCreate);

    const client = new ClientModel(clientToCreate);
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
    if (err.validationError) {
      return ApiResponse.validationError(res, err.validationError, req.body);
    }
    return ApiResponse.internalError(res, 'Falha ao criar cliente: Exception catched', err);
  }
};

const list = async (req: Request, res: Response) => {
  try {
    const filter = { active: true };
    const fields = {};
    const clients = await ClientModel.find(filter, fields);

    if (!clients.length) {
      return ApiResponse.notFound(res, 'Nenhum cliente encontrado');
    }

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
    if (!Validators.isValidObjectId(id)) {
      return ApiResponse.validationError(res, 'Id informado na query não é válido', { id });
    }

    const filter = { _id: id };
    const fields = {};
    const client = await ClientModel.findOne(filter, fields);

    if (!client) {
      return ApiResponse.notFound(res, 'Cliente não encontrado pelo id', { id });
    }

    return ApiResponse.success(res, 'Cliente retornado com sucesso', client);
  } catch (err) {
    return ApiResponse.internalError(res, 'Falha ao buscar cliente: Exception catched', err);
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!Validators.isValidObjectId(id)) {
      return ApiResponse.validationError(res, 'Id informado na query não é válido', { id });
    }

    const { name, cpf, email, address, phone } = req.body;
    const newClientData = { name, cpf, email, address, phone };
    Validators.validateClient(newClientData);

    const filter = { _id: id };
    const fields = {};

    const client = await ClientModel.findOne(filter, fields);

    if (!client) {
      return ApiResponse.notFound(res, 'Cliente não encontrado pelo id', { id });
    }

    client.name = name;
    client.cpf = cpf;
    client.email = email;
    client.address = address;
    client.phone = phone;

    await client.save();

    return ApiResponse.success(res, 'Cliente editado com sucesso', client);
  } catch (err) {
    if (err.validationError) {
      return ApiResponse.validationError(res, err.validationError, req.body);
    }
    return ApiResponse.internalError(res, 'Falha ao editar cliente: Exception catched', err);
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!Validators.isValidObjectId(id)) {
      return ApiResponse.validationError(res, 'Id informado na query não é válido', { id });
    }

    const filter = { _id: id };
    const fields = {};

    const client = await ClientModel.findOne(filter, fields);

    if (!client) {
      return ApiResponse.notFound(res, 'Cliente não encontrado pelo id', { id });
    }

    client.active = false;

    await client.save();

    return ApiResponse.success(res, 'Cliente excluido com sucesso', client);
  } catch (err) {
    return ApiResponse.internalError(res, 'Falha ao excluir cliente: Exception catched', err);
  }
};

export default {
  create,
  list,
  getById,
  updateById,
  deleteById,
};
