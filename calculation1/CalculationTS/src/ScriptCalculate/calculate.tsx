import { Logger } from "./Log";
import { variationAdditional, variationExt } from "./Variation";


//Шаблон мобели хранения данных операндов и операций
export interface setElement{
    operator1: number; //первый операнд
    operation: string; //основная операция
    operator2: number; //второй операнд
    operationExt: string; //экстра операция (связан исключительно с =, del, С)
}
//Объект хранилища данных
var element: setElement = {
    operator1: 0, 
    operation: "",
    operator2: 0,
    operationExt: ""
}

//Нажатие кнопок, которые отвечают за кратковременные действия
export const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let inputLine=(document.getElementById("InputCalculate") as HTMLInputElement).value;//Значение поля ввода
    let butOperate = (event.target as HTMLButtonElement).value;//Значение кнопки
    //Проверка того, что поле ввода не пустое
    const InCheck = CheckEmptiness(inputLine,butOperate);
    console.log("Проверка пустоты - "+InCheck)
    //Выполнение поиска операнда, связанные с одним операндом
    const eventStandart = variationAdditional(Logger, element);
    //Условие служит для проверки работы функции для выделения остатка 
    if(element.operation===","){
        if(eventStandart!.toString()==="Существует точка")
            console.log("Существует точка")
        else
            (document.getElementById("InputCalculate") as HTMLInputElement).value += eventStandart!.toString();
    }else
        (document.getElementById("InputCalculate") as HTMLInputElement).value = eventStandart!.toString();
};

//Нажатие кнопок, которые отвечают за добавления операции к операндам
export const buttonClickActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    let inputLine=(document.getElementById("InputCalculate") as HTMLInputElement).value;
    let butOperate = (event.target as HTMLButtonElement).value;
    //Проверка того, что поле ввода не пустое
    const InCheck = CheckEmptiness(inputLine,butOperate);
    console.log("Проверка пустоты - "+InCheck)
};

//Нажатие основных кнопок, ввод чисел
export const buttonClickMain = (event: React.MouseEvent<HTMLButtonElement>) => {
    let numberBut = event.target as HTMLButtonElement;
    const inputElement = document.getElementById("InputCalculate") as HTMLInputElement;
    //Попытка избегать добавление 0 или текста в хранилище данных
    if (inputElement.value === "0" || inputElement.value === "Это не так работает") 
        inputElement.value = "";
    inputElement.value += numberBut.value;
};

//Нажатие особых (красных) кнопок
export const buttonClickExt = (event: React.MouseEvent<HTMLButtonElement>) => {
    let inputLine=(document.getElementById("InputCalculate") as HTMLInputElement).value;//Значение поля ввода
    element.operationExt = (event.target as HTMLButtonElement).value; 
    //Проверка того, что операнды не пустые (для корректной работы операций)
    if(inputLine!=="")
    {
        if(element.operator1===0){
            let inputNumber = Number(inputLine);
            element.operator1=inputNumber;
        }else if(element.operator1!==0){
            let inputNumber = Number(inputLine);
            element.operator2=inputNumber;
        }
    }
    //Запуск работы с очисткой или выполнения операций с двумя операндами
    const eventHeavy = variationExt(Logger, element);
    (document.getElementById("InputCalculate") as HTMLInputElement).value = eventHeavy!.toString();
    //Очистка хранилища данных
    if(element.operationExt==="=" || element.operationExt==="C" ){
        element.operation="";
        element.operationExt="";
        element.operator1=0;
        element.operator2=0;
    }
};


//Функции связаны с обработкой информации, во время операций выполнений кнопок
//Функция проверяющий на пустоту тестового поля
export const CheckEmptiness = (inputLine:string,butOperate:string)=>{
    let check=false;
    if(inputLine!=="")
    {
        let inputNumber = Number(inputLine);
        element.operator1=inputNumber;
        element.operation=butOperate;
        check=true;
    }
    else if(inputLine==="")
    {
        (document.getElementById("InputCalculate") as HTMLInputElement).value = "";
        (document.getElementById("InputCalculate") as HTMLInputElement).value = "Это не так работает";
    }
    return check;
}
