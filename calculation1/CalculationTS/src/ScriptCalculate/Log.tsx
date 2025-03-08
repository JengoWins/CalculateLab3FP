import { setElement } from "./calculate"
//Функция логирования в консоли
export const Logger = (model:setElement)=>{
    return "Element 1 - "+model.operator1+"\n"+"Operation - "+model.operation+"\n"+"Element 2 - "+model.operator2;
}