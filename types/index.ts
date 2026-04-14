export interface IUser {
  _id: string;
  nombre: string;
  correo: string;
  rol: string;
}

export interface ICourse {
  _id: string;
  titulo: string;
  descripcion: string;
  id_profesor: Pick<IUser, '_id' | 'nombre' | 'correo'>;
}
