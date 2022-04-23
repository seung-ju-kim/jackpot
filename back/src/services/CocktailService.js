import { CocktailModel, UserCocktailModel } from "../db";

class CocktailService {
  // 칵테일 조회
  static getCocktailInfo = async ({ name }) => {
    const cocktailInfo = await CocktailModel.findCocktail({ name });
    if (!cocktailInfo) {
      const errorMessage =
        "해당 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return cocktailInfo;
  };
  // 유저 칵테일 조회
  static getUserCocktailInfo = async ({ user_id }) => {
    const userCocktailInfo = await UserCocktailModel.findUserCocktail({
      user_id,
    });
    if (!userCocktailInfo) {
      const errorMessage =
        "해당 유저의 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return userCocktailInfo;
  };
  // 유저 칵테일 추가
  static addCocktail = async ({
    name,
    ingredient,
    description,
    imageUrl,
    user_id,
  }) => {
    const addCocktailData = {
      name,
      ingredient,
      description,
      imageUrl,
      user_id,
    };
    const addCocktail = await UserCocktailModel.addCocktail(addCocktailData);
    return addCocktail;
  };
  // 유저 칵테일 수정
  static modify = async ({ _id, name, ingredient, imageUrl, user_id }) => {
    const updateCocktailData = { _id, name, ingredient, imageUrl, user_id };
    const filter = { _id: _id };
    const modifiedCocktail = await UserCocktailModel.modify(
      filter,
      updateCocktailData
    );
    return modifiedCocktail;
  };
  // 유저 칵테일 삭제
}

export { CocktailService };
