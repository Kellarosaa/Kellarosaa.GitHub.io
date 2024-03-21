go
package main

import (
	"fmt"
	"math"
)

func main() {
	var num1, num2 float64
	var operator string

	fmt.Print("Enter first number: ")
	fmt.Scanln(&num1)

	fmt.Print("Enter operator (+, -, *, /, sqrt, pow, log, factorial, abs): ")
	fmt.Scanln(&operator)

	switch operator {
	case "+":
		fmt.Print("Enter second number: ")
		fmt.Scanln(&num2)
		fmt.Printf("Result: %.2f\n", num1+num2)
	case "-":
		fmt.Print("Enter second number: ")
		fmt.Scanln(&num2)
		fmt.Printf("Result: %.2f\n", num1-num2)
	case "*":
		fmt.Print("Enter second number: ")
		fmt.Scanln(&num2)
		fmt.Printf("Result: %.2f\n", num1*num2)
	case "/":
		fmt.Print("Enter second number: ")
		fmt.Scanln(&num2)
		if num2 == 0 {
			fmt.Println("Error: Division by zero")
		} else {
			fmt.Printf("Result: %.2f\n", num1/num2)
		}
	case "sqrt":
		fmt.Printf("Result: %.2f\n", math.Sqrt(num1))
	case "pow":
		fmt.Print("Enter exponent: ")
		fmt.Scanln(&num2)
		fmt.Printf("Result: %.2f\n", math.Pow(num1, num2))
	case "log":
		fmt.Printf("Result: %.2f\n", math.Log(num1))
	case "factorial":
		result := 1.0
		for i := 1; i <= int(num1); i++ {
			result *= float64(i)
		}
		fmt.Printf("Result: %.2f\n", result)
	case "abs":
		fmt.Printf("Result: %.2f\n", math.Abs(num1))
	default:
		fmt.Println("Invalid operator")
	}
}
