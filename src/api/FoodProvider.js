import axios from "axios";

class FoodProvider {

	linkBase = "https://www.themealdb.com/api/json/v1/1";

	//Search meal by name

	searchByName(food) {
		axios
			.get(`${this.linkBase}/search.php?s=${food}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//List all meals by first letter

	searchByNameFirstLetter(letter) {
		axios
			.get(`${this.linkBase}/search.php?f=${letter}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//Lookup full meal details by id

	lookupFullMealDetailsById(id) {
		axios
			.get(`${this.linkBase}/lookup.php?i=${id}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//Lookup a single random meal

	lookupSingleRandomMeal(amount) {
		let meals = [];

		for (let i = 0; i < amount; i++) {
			axios
				.get(`${this.linkBase}/random.php`)
				.then((foodList) => {
					// console.log(foodList.data.meals)
					meals.push(foodList.data.meals);
				})
				.catch((error) => {
					console.log(error);
					i--;
				});
		}
		return meals;
	}

	//List all meal categories

	listAllMealCategories() {
		axios
			.get(`${this.linkBase}/categories.php`)
			.then((foodList) => {
				// console.log(foodList.data.categories)
				return foodList.data.categories;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//List all categories 

	listAllCategories() {
		axios
			.get(`${this.linkBase}/list.php?c=list`)
			.then((foodList) => {
				console.log(foodList.data)
				return foodList.data;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}


	//List All Area

	listAllArea() {
		axios
			.get(`${this.linkBase}/list.php?a=list`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//List all igredients

	listAllIgredients() {
		axios
			.get(` ${this.linkBase}/list.php?i=list`)
			.then((foodList) => {
				// console.log(foodList.data.meals[id])
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	// Filter by main ingredient

	filterByMainIngredient(nameIgredient) {
		axios
			.get(` ${this.linkBase}/filter.php?i=${nameIgredient}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}


	// Filter by Category

	filterByCategory(nameCategory) {
		axios
			.get(` ${this.linkBase}/filter.php?c=${nameCategory}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	//Filter by Area

	filterByArea(nameArea) {
		axios
			.get(` ${this.linkBase}/filter.php?a=${nameArea}`)
			.then((foodList) => {
				// console.log(foodList.data.meals)
				return foodList.data.meals;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

}




