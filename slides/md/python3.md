---
marp: true
theme: default
class: 
  - lead
  - invert
---

# **Python Microproject: Guessing Game**

---

# **Introduction**

- Today, we'll learn how to build a simple guessing game.
- Basic concepts: Variables, Loops, Conditionals, Input/Output.

---

# **Concept**

- The computer randomly selects a number between 1 and 100.
- The player tries to guess the number.
- The computer gives feedback: too high, too low, or correct.
- The goal: Guess the number in the fewest attempts.

---

# **Core Game Loop**

- The heart of our guessing game will be the **game loop**.
- It repeatedly asks for user input until the correct number is guessed.
- Provides feedback based on the guess.

---

# **Pseudocode**

Writing pseudocode can be an easy way to plan out your project:
Let's write some pseudocode for our guessing game!
```plaintext
WHILE true
    CREATE target number
    SET guess count to 0
    PROMPT "Guess a number between 1 and 100"
    READ guess from user
    INCREMENT guess count
    IF guess is equal to target number
        PRINT "Congratulations! You've guessed correctly."
        PRINT guess count
        EXIT loop
    ELSE IF guess is less than target number
        PRINT "Too low. Try again!"
    ELSE
        PRINT "Too high. Try again!"
```
---
# **Let's Get Started!**
---
# **1. Importing Modules**

- First, we need to import the `random` module, corresponding to "CREATE target number" in our pseudocode.

```plaintext
CREATE target number
```

```python
import random
```

---

# **2. Generate a Target Number**

- The computer selects a number between 1 and 100, fulfilling the "CREATE target number" part of our pseudocode.

```plaintext
CREATE target number
```

```python
target_number = random.randint(1, 100)
```

---

# **3. Initializing the Guess Count**

- Initialize a variable to keep track of how many guesses the player has made, as indicated by "SET guess count to 0" in our pseudocode.

```plaintext
SET guess count to 0
```

```python
guess_count = 0
```

---

# **4. Asking for User Input**

- Prompt the player to guess the number, as indicated by "PROMPT" and "READ guess from user" in our pseudocode.

```plaintext
PROMPT "Guess a number between 1 and 100"
READ guess from user
```

```python
guess = int(input("Guess a number between 1 and 100: "))
```

---

# **5. Writing the Game Loop**

- Use a `while` loop to keep the game running, implementing our main game loop pseudocode.

```plaintext
WHILE true
    ...
    INCREMENT guess count
```

```python
while True:
    guess = int(input("Guess a number between 1 and 100: "))
    guess_count += 1  # Increment guess count
    # Conditions will be added next.
```

---

# **6. Adding Conditions**

- Check if the guess is too high, too low, or correct, matching the conditional parts of our pseudocode.

```plaintext
IF guess is equal to target number
    PRINT "Congratulations! You've guessed correctly."
    PRINT guess count
    EXIT loop
ELSE IF guess is less than target number
    PRINT "Too low. Try again!"
ELSE
    PRINT "Too high. Try again!"
```

```python
if guess < target_number:
    print("Too low. Try again!")
elif guess > target_number:
    print("Too high. Try again!")
else:
    print(f"Congratulations! You've guessed correctly in {guess_count} tries.")
    break  # This exits the loop
```

---

# **Complete Game Code**

- Below is the complete code integrating all the steps we've discussed.

```python
import random

target_number = random.randint(1, 100)
guess_count = 0

while True:
    guess = int(input("Guess a number between 1 and 100: "))
    guess_count += 1
    if guess < target_number:
        print("Too low. Try again!")
    elif guess > target_number:
        print("Too high. Try again!")
    else:
        print(f"Congratulations! You've guessed correctly in {guess_count} tries.")
        break
```

---

# **Challenges**

1. Check if the input is within the accepted range.
1. Set a limit on the number of guesses.
2. Allow the player to play again without restarting the program.
3. Let the players choose the range.
5. GUI?

---

# **Conclusion**

- You've just built a simple guessing game in Python!
- Experiment with enhancements to improve the game.
- Keep practicing and have fun with Python.

---
