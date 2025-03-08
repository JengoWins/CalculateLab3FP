import { setElement } from "./calculate";
import { DeMulti, DivideОneBy, Minus, Multi, Plus, Point, Pow, Procetion, Sqrt } from "./FunctionCalculate";

//Набор switch-case условий, проверяет операцию калькулятора. В зависимости от выбора, запускает функции из файла FunctionCalculate
//Файл состоит из трех методов.

//Данный метод проверяет операцию, который ввел пользователь.
//Получает в качестве параметра функцию и модель хранения данных операции
//В начале выводит на консоль результат функции логирования, а затем проверяет операцию калькулятора
//Стоит отметить, что данная функция проверяет все наборы функций, связанные с одним операндом
export const variationAdditional = (fun:Function, model:setElement)=>{
    console.log(fun(model))
    switch(model.operation){
        case '1/x':{ 
            return DivideОneBy(model.operator1);
        }
        case '%':{ 
            return Procetion(model.operator1);
        }
        case 'pow':{ 
            return Pow(model.operator1);
        }
        case 'sqrt':{
            return Sqrt(model.operator1);
        }
        case ',':{ 
            return Point((document.getElementById("InputCalculate") as HTMLInputElement).value);
        }
        case '+/-':{ 
            return model.operator1*(-1);
        }
    }
}
//Данный метод проверяет операцию, который ввел пользователь.
//Получает в качестве параметра модель хранения данных операции
//Проверяет операцию калькулятора, введенный пользователем, связанные с двумя операндами
//(operator1:number,operator2:number,operation:string)
export const variationStarndart = (model:setElement)=>{
    if(model.operator1!==0 && model.operator2!==0 && model.operation!==""){
        switch(model.operation){
            case '-':{ 
                return Minus(model.operator1,model.operator2);
            }
            case '/':{ 
                return DeMulti(model.operator1,model.operator2);
            }
            case '+':{ 
                return Plus(model.operator1,model.operator2);
            }
            case 'X':{ 
                return Multi(model.operator1,model.operator2);
            }
        }
    }
}
//Выполняет экстра функции, которые связаны с красными кнопками
//В качестве аргументов передаются функция логирования и модель данных
//Если знак операции не =, то функция будет изменять поле ввода. В зависимости от знака, либо будет очищать полностью поле или её часть.
export const variationExt = (fun:Function,model:setElement)=>{
    console.log(fun(model))
    switch(model.operationExt){
        case 'C':{ 
            return "";
        }
        case '=':{ 
            const print = variationStarndart(model)
            return print;
        }
        case 'del':{ 
            return (document.getElementById("InputCalculate") as HTMLInputElement).value.substring(0,(document.getElementById("InputCalculate") as HTMLInputElement).value.length-1);
        }
    }
}