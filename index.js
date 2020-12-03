var item =[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

  function butters(){
    for(let i=0 ;i<item.length ; i++){
      var better = item[i].batters.batter;
      for(let j=0 ; j<better.length ; j++){
        console.log(better[j].type)
      }
    }
  }



 function topping(){
    for(let i=0 ;i<item.length ; i++){
      var topping = item[i].topping;
      for(let j=0 ; j<topping.length ; j++){
        console.log(topping[j].type)
      }
    }
  }


function avarge(){
  array = []
  let y=0;
  for(let i =0 ;i<item.length ; i++){
    var x= array.push(item[i].ppu)
    for(let j=0 ;j<array.length ; j++){
      y += array[j]/array.length
    }
  }
  console.log(y)
}
  
function sum(){
  let i = 0
  for(let a=0 ; a<item.length ; a++){
    i += item[a]
  }
  console.log(i)
}


function allId(){
  item.forEach(
   items=> console.log(items.id)
  )
 item.forEach(items=>items.batters.batter.forEach(batterItem => console.log(batterItem.id)))

 item.forEach(items=>items.topping.forEach(toppingItem => console.log(toppingItem.id)))

}

butters();
topping();
avarge();
sum();
allId();