// Создать массив «Список покупок». Каждый элемент массива является объектом, который 
// содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let list = [
  {
    name: 'orange',
    count:3,
    buy:false
  },
  {
    name: 'apple',
    count:5,
    buy:true
  },
 
  {
    name: 'lemon',
    count:2,
    buy:false
  }

];
// console.log(list)

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

sortList = (arr)=>{
  console.log(arr);
  let sorted = arr.sort((a, b) => {
    return a.buy - b.buy;
});}
// sortList(list);

//Добавление покупки в список. Учтите, что при добавлении покупки с 
// уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

addNew=(arr, name, count, buy)=>{
let result = 0;
  for(elem of arr){ 
    result = arr.some(function(names){
    return elem.name == name;
  });
    if(result==true){
      elem.count += count;
      console.log(arr);
      break;
    }
    else {
      let newList={
        name: name,
        count:count,
        buy:buy
      };
      arr.unshift(newList);
      console.log(arr);
      break;
    }
  }
}

// addNew(list, 'orange',2, false);

//Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
getBuy=(arr,name)=>{
  let result=0;
  for (elem of arr){
    result=arr.some(function(names){
    return elem.name===name;
    });
    if(result===true){
      elem.buy=true;
      console.log(arr);
      break;
    }
   
}
}
// getBuy(list,'orange');

//2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 

let check = [
  {
    name :'lemon',
    count: 1,
    price: 20
  },
  {
    name :'apple',
    count: 3,
    price: 100
  },
  {
    name :'juice',
    count: 5,
    price: 18
  }
];
//Распечатка чека на экран;

// console.log(check);

//Подсчет общей суммы покупки;

allPrice = (arr, count , price)=> {
  let result = 0;
  for( elem of arr){
    result += elem.count * elem.price; 
  }
  return result;
}
// console.log(allPrice(check, check.count, check.price));

//Получение самой дорогой покупки в чеке;

maxPrice = (arr)=> {  
  for( elem of arr){ 
    elem.price=elem.count * elem.price;
  }
  let sorted = arr.sort((a, b) => {
    return b.price - a.price;
  });
  return sorted[0];
}
// console.log(maxPrice(check));

//Подсчет средней стоимости одного товара в чеке.

meanPrice =(arr)=> {
  let countPrice = 0;
  let countSum = 0;
  for( elem of arr){ 
    elem.price = elem.count * elem.price;
    countPrice += elem.price;
    countSum += elem.count;
  }
   let mean = countPrice / countSum;
   console.log(mean.toFixed(2));
}
// meanPrice(check);

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
//  Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
//  Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let style=[
  {
    name:'color' ,
    value: 'red'
  },
  {
    name:'outline-style' ,
    value: 'dotted'
  },
  {
    name:'font-style' ,
    value: 'italic'
  },
  {
    name:'font-size' ,
    value: '25px'
  },
  {
    name:'text-align' ,
    value: 'center'
  },
];
write= (arr)=>{
  let result ='<br>';
    for(let elem of arr){
      result += `<p style="${elem.name}:${elem.value}">gknk</p>`;  
    }
  document.write(result);
}
// console.log(write(style));

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
//  названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

let academy =[
  {
    nameAuditory:'math',
    count:10,
    nameFaculty: 'NNIT'

  },
  {
    nameAuditory:'econom',
    count:11,
    nameFaculty: 'IBF'

  },
  {
    nameAuditory:'informatic',
    count:18,
    nameFaculty: 'NNIT'
  }
];

//Вывод на экран всех аудиторий;
showAllAuditory =(arr)=> {
  for (elem of arr){
    console.log(elem.nameAuditory);
  }
} 
//  showAllAuditory(academy);

 //Вывод на экран аудиторий для указанного факультета;
 AuditoryOfFaculty =(arr,faculty)=> {
  for (elem of arr){
    if(elem.nameFaculty==faculty){
      console.log(elem.nameAuditory);
    }
  }
} 
// AuditoryOfFaculty(academy,'NNIT');
  
  //Вывод на экран только тех аудиторий, которые подходят для переданной группы.
  //  Объект-группа состоит из названия, количества студентов и названия факультета;
show=(arr, name, count, nameFaculty)=> {
   for(elem of arr){
    if(elem.count<= count&& elem.nameFaculty==nameFaculty){
      console.log(elem.nameAuditory);
    }
  }
}
// show(academy, 'group1', 12, 'NNIT');

  //Функция сортировки аудиторий по количеству мест;

sorted=(arr)=> {
  console.log(arr);
  let sorted = arr.sort((a, b) => {
    return a.count - b.count;
  });
}
//  sorted(academy);

// Функция сортировки аудиторий по названию (по алфавиту).
sorted=(arr)=> {
  console.log(arr);
  let sorted = arr.sort((a, b) => {
    if (a.nameAuditory < b.nameAuditory) {return -1}
  });
}
//  sorted(academy);