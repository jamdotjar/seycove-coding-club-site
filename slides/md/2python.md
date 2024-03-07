---
marp: true
theme: gaia
class: 
  - lead
  - invert
---



# Your First Python Program

- Open your text editor or IDE.
- Type `print("Hello, world!")`.
- Save the file with a `.py` extension.
- Run the file in your terminal with `python filename.py`.

**Challenge**: Modify the program to print your name instead of "Hello, world!".

---

# Variables and Data Types

- Variables store data values.
- Common data types: `int`, `float`, `str`, `bool`.

```python
name = "John"
age = 30
is_employed = False
```

**Challenge**: Create variables to store your own name, age, and whether you are a student or not.

---
# Basic Operations

- Arithmetic operators: `+`, `-`, `*`, `/`
- Comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`

```python
sum = 5 + 3
difference = 10 - 2
product = 4 * 2
quotient = 8 / 2
```

**Challenge**: Calculate your age in months (approximate by multiplying your age by 12).

---
# Input and Output (I/O)

- Input: Getting data from the user.
- Output: Displaying data to the user.
```python
name = input("Enter your name: ")
print("Hello, " + name + "!")
```
**Challenge**: Write a program that asks the user for their name and age, then prints a message greeting them and telling them how old they are.

---
# Control Flow: If Statements

- `if` statements make decisions based on conditions.
- `else` clause runs code when condition is false.
```python
age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

**Challenge**: Write an if statement that prints "You can drive" if age is 16 or older, otherwise prints "You cannot drive yet".

---
# Loops: For and While

- `for` loop: Iterate over a sequence.
- `while` loop: Repeat as long as a condition is true.

```python
for i in range(5):
    print(i)

count = 0
while count < 5:
    print(count)
    count += 1
```

**Challenge**: Use a loop to print numbers 1 to 10.

---

# Final Challenge:


1. Asks the user for their name and age.
2. Prints a greeting message to the user.
3. Calculates and prints how many months old the user is (approximate by multiplying the age by 12).
4. Uses an if statement to check if the user is an adult (18 years or older) or a minor and prints a corresponding message.
5. Uses a loop to print a countdown from the user's age to 0.

Remember to use variables, input/output, arithmetic operations, if statements, and loops.

