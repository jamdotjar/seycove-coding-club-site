---
marp: true
theme: default
class: 
- lead
- invert

---

# Building a Basic Calculator
### Functions and Control Statements

---

# Introduction
we make calculator app lol

---

# Planning Your App

We want to make a calculator app, but often with coding, jumping straight into the code can be overwhelming, so lets plan first!

Consider:
- How to prompt the user for input
- Ensuring input is in a usable format (e.g., converting strings to integers)
- Performing the addition operation

**Feel free to use any method to plan your calculator, some ideas:** 
- Pseudocode
- Flowchart
- Writing out the steps in plain English
- Bad drawing


---

# Challenge 1
Create a program that adds two numbers inputted by the user.

---

# Detailed Control Statements

Control statements like `if`, `elif`, and `else` are used to direct the flow of your program based on conditions. Here's how to check values and make decisions:
Spot the mistakes tho:
```python
floor = input("Enter floor: (1, 2, 3)")

if floor == "1":
    print("You are on the first floor")
elif floor == "2":
    print ("You are on the second floor")
elif floor = "3":
    print("You are on the third floor")
else:
    print("Invalid operation.")
```

This structure allows your program to choose different paths based on the user's input.

---

# Challenge 2
Enhance your program to allow the user to choose the operation (addition, subtraction, multiplication, division).

---

# Functions amiright

Functions organize code into reusable blocks. They can take parameters, perform operations, and return results.

Example function that concatenates two strings:
```python
def concatenate(str1, str2):
    return str1 + str2
```

# Using the function
```python
result = concatenate("Hello, ", "world!")
print("Output: ", result)  # Output: Hello, world!
```

---
# Challenge 3
Refactor your calculator code, moving each arithmetic operation into its own function.

---

# Loops for Advanced Operations

Loops (`for`, `while`) are powerful for performing repeated tasks, such as calculating a factorial or iterating over a range of numbers.

Example - the annoying machine
```python
def annoy(name, num): 
    output = ""
    for i in range(num):
        output += name
    return output

print(annoy("john", 5)) # john john john john john
```
Loops do things many times so you dont have to.

---

# Challenge 5
Expand your calculator's capabilities by adding complex operations (e.g., squaring, factorial).

Example operations and functions you could add:
- Factorial
- Exponents
- compare two numbers

---

# wow, much calculate. such code.
![doge](https://ih1.redbubble.net/image.991253560.4922/st,small,507x507-pad,600x600,f8f8f8.jpg)

