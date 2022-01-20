import { UserInsert } from "../modal/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
  private static TABLE_NAME = "usuario_cubo";

  insertUser = async (user: UserInsert): Promise<string> => {
    try {
      await this.getconnection().insert(user).into(UserData.TABLE_NAME);
      return "Usuario cadastrada com sucesso!";
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados");
      }
    }
  };
}
