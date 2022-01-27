import { UserDataBase } from "../data/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import { UserInput, UserInsert } from "../modal/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  signUpBusiness = async (input: UserInput) => {
    if (
      !input.name ||
      !input.email ||
      !input.data_passeio ||
      !input.duracao ||
      !input.latitude ||
      !input.longitude ||
      !input.horario_inicio ||
      !input.horario_termino
    ) {
      throw new MissingFields();
    }

    const [horarioInicio, minutosInicio] = input.horario_inicio.split(":");
    const [horarioTermino, minutosTermino] = input.horario_termino.split(":");
    const minutosTotaisInicio =
      Number(minutosInicio) + (Number(horarioInicio) * 60);
    const minutosTotaisTermino =
      Number(minutosTermino) + (Number(horarioTermino) * 60);

    if (
      minutosTotaisTermino - minutosTotaisInicio !== 60 ||
      minutosTotaisTermino - minutosTotaisInicio !== 30
    ) {
      throw new Error("Insira um horario com intervalo de 30 ou 60 minutos");
    }

    const user: UserInsert = {
      id: new IdGenerator().generate(),
      ...input,
    };

    const result = await new UserDataBase().insertUser(user);
    return result;
  };

  getAllUserBusiness = async () => {
    const result = await new UserDataBase().getAllUsers();
    return result;
  };
}
